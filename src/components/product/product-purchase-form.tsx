'use client';

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Minus, Plus, LoaderCircle, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { cn } from '@/lib/utils';
import { usePaystackPayment } from 'react-paystack';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { verifyPayment } from '@/ai/flows/verify-payment';

interface ProductPurchaseFormProps {
  product: Product;
  selectedColor: string | undefined;
  setSelectedColor: (color: string) => void;
}

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="h-5 w-5"
    >
      <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .2c54.9 0 105.8 21.2 144.2 59.5 38.2 38.3 59.5 89.4 59.5 144.2 0 112.2-91.5 203.7-203.7 203.7-35.1 0-69.2-9-98.7-25.9l-7.1-4.2-73.3 19.3 19.7-71.5-4.5-7.4c-18.4-30.6-28.2-66.2-28.2-103.5 0-112.2 91.5-203.7 203.7-203.7zM223.9 150.1c-12.2 0-22.1 9.9-22.1 22.1v.1c0 12.2 9.9 22.1 22.1 22.1 6.1 0 11.6-2.5 15.6-6.5 3.9-3.9 6.5-9.4 6.5-15.6-.1-12.2-10-22.1-22.1-22.1zm53.8 141.2c-4.4-2.2-26.2-12.9-30.3-14.4-4.1-1.5-7.1-2.2-10.1 2.2s-11.4 14.4-14 17.3c-2.6 3-5.2 3.3-9.6 1.1-4.4-2.2-18.6-6.9-35.4-21.8-13-11.7-21.8-26.2-24.4-30.6-2.6-4.4-.3-6.9 1.9-9.1 2-2 4.4-5.2 6.6-7.8 2.2-2.6 3-4.4 1.5-7.4-1.5-3-10.1-24.3-13.8-33.3-3.7-8.9-7.5-7.7-10.1-7.8h-9.1c-2.6 0-7.1.3-10.9 4.4-3.8 4.1-14.6 14.3-14.6 34.9 0 20.6 15 40.5 17.1 43.5 2.1 3 29.5 44.9 71.9 62.8 10.4 4.4 18.5 7.1 24.8 9.1 6.3 2 12.1 1.7 16.7.7 5.2-.9 26.2-10.7 29.9-21.1 3.7-10.4 3.7-19.3 2.6-21.1-1.1-1.9-4.1-3-8.5-5.2z" />
    </svg>
  );

const addressSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'A valid phone number is required'),
  description: z.string().min(1, 'Delivery address is required'),
});
type AddressFormData = z.infer<typeof addressSchema>;

export default function ProductPurchaseForm({ product, selectedColor, setSelectedColor }: ProductPurchaseFormProps) {
  const { addToCart } = useAppContext();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const { toast } = useToast();
  
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: { name: '', phone: '0700000000', description: '' },
    mode: 'onChange',
  });

  const watchedPhone = addressForm.watch('phone');
  const watchedName = addressForm.watch('name');
  const watchedDescription = addressForm.watch('description');
  
  const paystackConfig = useMemo(() => ({
    reference: (new Date()).getTime().toString(),
    email: "customer@runway.com",
    amount: product.price * quantity * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
    currency: 'KES',
    metadata: {
      productName: product.name,
      quantity,
      size: selectedSize,
      customerName: watchedName,
      customerPhone: watchedPhone,
    }
  }), [product, quantity, selectedSize, watchedPhone, watchedName]);

  const initializePayment = usePaystackPayment(paystackConfig);

  const onPaymentSuccess = async (reference: any) => {
    setIsVerifying(true);
    const orderPayload = {
      products: [{ id: product.id, name: product.name, quantity, price: product.price }],
      totalAmount: product.price * quantity,
      shippingAddress: { description: watchedDescription },
      customerName: watchedName,
      customerPhone: watchedPhone,
    };
    try {
      const result = await verifyPayment({ reference: reference.reference, orderPayload });
      if (result.success) {
        setPaymentSuccess(true);
        toast({ title: "Order Confirmed!", description: "Your payment has been verified." });
        setTimeout(() => {
          setIsAddressDialogOpen(false);
          setPaymentSuccess(false);
        }, 2000);
      } else {
        toast({ variant: "destructive", title: "Verification Failed", description: result.message });
      }
    } catch (error) {
      console.error("Verification error:", error);
      toast({ variant: "destructive", title: "System Error" });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleAddressSubmit = (data: AddressFormData) => {
    initializePayment(onPaymentSuccess);
  };

  const colorOptions = product.availableColors || [];
  const availableSizes = product.sizes || ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <>
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase tracking-widest">{product.category}</span>
                {product.style && (
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full uppercase tracking-widest border border-blue-100">
                    {product.style}
                  </span>
                )}
            </div>
        </div>

        {/* Description First */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Product Story</h3>
          <p className="text-sm leading-relaxed text-gray-600 font-medium">{product.description}</p>
        </div>

        <div className="pt-4 border-t border-gray-50 space-y-6">
          {colorOptions.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Color Palette</h3>
              <div className="flex items-center gap-3">
                {colorOptions.map((color) => (
                  <button 
                    key={`${color.name}-${color.hex}`} 
                    onClick={() => setSelectedColor(color.hex)} 
                    className={cn(
                      "w-8 h-8 rounded-full border-2 transition-all p-0.5", 
                      selectedColor === color.hex ? 'border-black scale-110 shadow-sm' : 'border-transparent hover:border-gray-200'
                    )}
                  >
                    <div className="w-full h-full rounded-full border border-gray-100" style={{ backgroundColor: color.hex }} />
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Size Select</h3>
            <div className="flex flex-wrap gap-2">
              {availableSizes.map((size) => (
                <button 
                  key={size} 
                  onClick={() => setSelectedSize(size)} 
                  className={cn(
                    "min-w-[44px] h-10 px-3 rounded-xl text-xs font-bold transition-all border", 
                    selectedSize === size 
                      ? 'bg-black text-white border-black shadow-md' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Quantity</h3>
            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-1 py-1 border">
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus className="w-3 h-3" /></Button>
                <span className="w-6 text-center font-black text-sm">{quantity}</span>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" onClick={() => setQuantity(q => q + 1)}><Plus className="w-3 h-3" /></Button>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-50 space-y-4">
          <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Investment</span>
              <p className="text-2xl font-black text-gray-900">Ksh {(product.price * quantity).toLocaleString()}</p>
          </div>
          
          <div className="flex flex-col gap-2">
              <Button size="lg" className="w-full rounded-full h-12 font-bold shadow-sm" onClick={() => addToCart(product, quantity)}>Add to Bag</Button>
              <Button size="lg" variant="secondary" className="w-full rounded-full h-12 font-bold border border-gray-200" onClick={() => setIsAddressDialogOpen(true)}>
                  Direct Buy with Paystack
              </Button>
              <Button size="lg" variant="tactile-green" className="w-full rounded-full h-12 font-bold shadow-sm flex items-center justify-center gap-2" onClick={() => {
                  const message = `Hi Eddjos, I want to buy ${quantity}x ${product.name} (Size: ${selectedSize}). Total: Ksh ${(product.price * quantity).toLocaleString()}.`;
                  window.open(`https://wa.me/254740685488?text=${encodeURIComponent(message)}`, '_blank');
              }}>
                  <WhatsAppIcon />
                  Order on WhatsApp
              </Button>
          </div>
        </div>
      </div>

      <Dialog open={isAddressDialogOpen} onOpenChange={(open) => !isVerifying && setIsAddressDialogOpen(open)}>
        <DialogContent onPointerDownOutside={(e) => isVerifying && e.preventDefault()} className="rounded-3xl border-2 border-black sm:max-w-md">
          {paymentSuccess ? (
            <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
               <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
               </div>
               <h2 className="text-2xl font-black mb-2">Payment Confirmed!</h2>
               <p className="text-gray-500 font-medium">Your order has been recorded. Redirecting...</p>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-black text-center">Delivery Details</DialogTitle>
              </DialogHeader>
              <Form {...addressForm}>
                <form onSubmit={addressForm.handleSubmit(handleAddressSubmit)} className="space-y-4 py-4">
                    <FormField control={addressForm.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-xs uppercase tracking-tighter">Recipient Name</FormLabel>
                        <FormControl><Input placeholder="Jane Doe" {...field} className="rounded-xl h-11 border-2" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}/>
                    <FormField control={addressForm.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-xs uppercase tracking-tighter">Phone Contact</FormLabel>
                        <FormControl><Input type="tel" {...field} className="rounded-xl h-11 border-2" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}/>
                  <FormField control={addressForm.control} name="description" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-xs uppercase tracking-tighter">Shipping Address</FormLabel>
                      <FormControl><Textarea placeholder="Apartment, Street, Town..." {...field} className="rounded-xl min-h-[80px] border-2" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                  <DialogFooter className="mt-6">
                    <Button type="submit" size="lg" className="w-full rounded-full h-12 font-bold shadow-lg" disabled={!addressForm.formState.isValid || isVerifying}>
                        {isVerifying ? <LoaderCircle className="animate-spin" /> : 'Confirm & Proceed to Paystack'}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
