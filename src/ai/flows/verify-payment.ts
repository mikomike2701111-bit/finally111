'use server';
/**
 * @fileOverview A server-side flow to securely verify Paystack payments.
 *
 * - verifyPayment - A function that verifies a payment reference with Paystack and records the order.
 * - VerifyPaymentInput - The input type for the verifyPayment function.
 * - VerifyPaymentOutput - The return type for the verifyPayment function.
 */
import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import axios from 'axios';
import { adminDb } from '@/lib/firebase-admin';
import type { Order } from '@/lib/types';
import { FieldValue } from 'firebase-admin/firestore';

const VerifyPaymentInputSchema = z.object({
  reference: z.string().describe('The payment reference from Paystack.'),
  orderPayload: z.object({
    products: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        quantity: z.number(),
        price: z.number(),
      })
    ),
    totalAmount: z.number(),
    shippingAddress: z.object({
      county: z.string(),
      region: z.string(),
      description: z.string(),
    }),
    customerName: z.string(),
    customerEmail: z.string().email(),
  }),
});
export type VerifyPaymentInput = z.infer<typeof VerifyPaymentInputSchema>;

const VerifyPaymentOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  orderId: z.string().optional(),
});
export type VerifyPaymentOutput = z.infer<typeof VerifyPaymentOutputSchema>;

export async function verifyPayment(
  input: VerifyPaymentInput
): Promise<VerifyPaymentOutput> {
  return verifyPaymentFlow(input);
}

const verifyPaymentFlow = ai.defineFlow(
  {
    name: 'verifyPaymentFlow',
    inputSchema: VerifyPaymentInputSchema,
    outputSchema: VerifyPaymentOutputSchema,
  },
  async ({ reference, orderPayload }) => {
    const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

    if (!PAYSTACK_SECRET_KEY) {
      console.error('Paystack secret key is not configured.');
      return { success: false, message: 'Server configuration error.' };
    }

    try {
      const response = await axios.get(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
          headers: {
            Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          },
        }
      );

      const { status, data } = response;

      if (status === 200 && data?.data?.status === 'success') {
        // Payment is successful.
        // Verify that the amount paid matches the order total.
        const amountPaid = data.data.amount / 100; // Paystack amount is in kobo/cents
        if (amountPaid < orderPayload.totalAmount) {
          // This could be a security issue. Log it and reject.
          console.warn(
            `Tampering detected. Paystack amount ${amountPaid} is less than order total ${orderPayload.totalAmount}`
          );
          // TODO: Potentially refund the transaction here.
          return {
            success: false,
            message: 'Payment amount does not match order total.',
          };
        }

        // Amount is valid, create the order in Firestore.
        const orderData: Omit<Order, 'id' | 'createdAt'> & {
          createdAt: FieldValue;
        } = {
          ...orderPayload,
          status: 'pending',
          createdAt: FieldValue.serverTimestamp(),
        };

        const orderRef = await adminDb.collection('orders').add(orderData);
        console.log('Order created successfully with ID: ', orderRef.id);

        return {
          success: true,
          message: 'Payment verified and order created.',
          orderId: orderRef.id,
        };
      } else {
        // Payment was not successful according to Paystack.
        return {
          success: false,
          message: data?.message || 'Payment verification failed.',
        };
      }
    } catch (error: any) {
      console.error(
        'Error verifying payment:',
        error.response?.data || error.message
      );
      return {
        success: false,
        message: 'An error occurred during payment verification.',
      };
    }
  }
);
