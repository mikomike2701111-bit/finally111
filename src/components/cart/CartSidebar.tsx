'use client';

import * as React from 'react';
import { useAppContext } from '@/context/AppContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import Link from 'next/link';
import { usePaystackPayment } from 'react-paystack';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { kenyanCounties } from '@/lib/kenyan-counties';
import { useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="h-5 w-5"
  >
    <path fill="black" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .2c54.9 0 105.8 21.2 144.2 59.5 38.2 38.3 59.5 89.4 59.5 144.2 0 112.2-91.5 203.7-203.7 203.7-35.1 0-69.2-9-98.7-25.9l-7.1-4.2-73.3 19.3 19.7-71.5-4.5-7.4c-18.4-30.6-28.2-66.2-28.2-103.5 0-112.2 91.5-203.7 203.7-203.7zM223.9 150.1c-12.2 0-22.1 9.9-22.1 22.1v.1c0 12.2 9.9 22.1 22.1 22.1 6.1 0 11.6-2.5 15.6-6.5 3.9-3.9 6.5-9.4 6.5-15.6-.1-12.2-10-22.1-22.1-22.1zm53.8 141.2c-4.4-2.2-26.2-12.9-30.3-14.4-4.1-1.5-7.1-2.2-10.1 2.2s-11.4 14.4-14 17.3c-2.6 3-5.2 3.3-9.6 1.1-4.4-2.2-18.6-6.9-35.4-21.8-13-11.7-21.8-26.2-24.4-30.6-2.6-4.4-.3-6.9 1.9-9.1 2-2 4.4-5.2 6.6-7.8 2.2-2.6 3-4.4 1.5-7.4-1.5-3-10.1-24.3-13.8-33.3-3.7-8.9-7.5-7.7-10.1-7.8h-9.1c-2.6 0-7.1.3-10.9 4.4-3.8 4.1-14.6 14.3-14.6 34.9 0 20.6 15 40.5 17.1 43.5 2.1 3 29.5 44.9 71.9 62.8 10.4 4.4 18.5 7.1 24.8 9.1 6.3 2 12.1 1.7 16.7.7 5.2-.9 26.2-10.7 29.9-21.1 3.7-10.4 3.7-19.3 2.6-21.1-1.1-1.9-4.1-3-8.5-5.2z" />
  </svg>
);

const checkoutSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('A valid email is required'),
  county: z.string().min(1, 'County is required'),
  region: z.string().min(1, 'Region/Town is required'),
  description: z.string().min(1, 'Address description is required'),
});
type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CartSidebar() {
  const { cart, removeFromCart, updateQuantity, cartCount, cartTotal, clearCart } = useAppContext();
  const [open, setOpen] = React.useState(false);
  const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = React.useState(false);
  const [checkoutData, setCheckoutData] = React.useState<CheckoutFormData | null>(null);
  
  const { toast } = useToast();
  const firestore = useFirestore();

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { name: '', email: '', county: '', region: '', description: '' },
  });

  const handleCheckoutViaWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "Hi Eddjos, I would like to order the following items:\n\n";
    cart.forEach(item => {
      message += `- ${item.name} (Quantity: ${item.quantity})\n`;
    });
    message += `\nTotal Price: Ksh ${cartTotal.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254740685488?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const paystackConfig = {
    reference: (new Date()).getTime().toString(),
    email: checkoutData?.email || "customer@example.com",
    amount: cartTotal * 100, // Amount in cents
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
    currency: 'KES',
    metadata: {
      cartItems: cart.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
      total: cartTotal,
      customerName: checkoutData?.name || "",
      custom_fields: [
        { display_name: "Cart Total", variable_name: "cart_total", value: `Ksh ${cartTotal.toFixed(2)}`},
        { display_name: "Number of Items", variable_name: "number_of_items", value: cartCount },
        { display_name: "County", variable_name: "shipping_county", value: checkoutData?.county || "" },
        { display_name: "Region", variable_name: "shipping_region", value: checkoutData?.region || "" },
        { display_name: "Address Description", variable_name: "shipping_description", value: checkoutData?.description || "" }
      ]
    }
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const onPaystackSuccess = (reference: any) => {
    if (!firestore || !checkoutData) {
      toast({ variant: "destructive", title: "Error", description: "Could not save order. Checkout details missing."});
      return;
    }

    const orderData = {
      products: cart.map(item => ({ id: item.id, name: item.name, quantity: item.quantity, price: item.price })),
      totalAmount: cartTotal,
      shippingAddress: {
        county: checkoutData.county,
        region: checkoutData.region,
        description: checkoutData.description,
      },
      status: 'pending' as const,
      createdAt: serverTimestamp(),
      customerName: checkoutData.name,
      customerEmail: checkoutData.email,
    };

    addDocumentNonBlocking(collection(firestore, 'orders'), orderData);
    
    toast({
        title: "Payment Successful!",
        description: `Thank you for your purchase. Reference: ${reference.reference}`,
    });
    clearCart();
    setOpen(false);
  };

  const onPaystackClose = () => {
      // silent on close
  };
  
  const handleCheckoutSubmit = (data: CheckoutFormData) => {
    setCheckoutData(data);
    setIsCheckoutDialogOpen(false);
    initializePayment({ onSuccess: onPaystackSuccess, onClose: onPaystackClose });
  }

  const handlePayNowClick = () => {
    if (cart.length === 0) {
      toast({ variant: "destructive", title: "Cart is Empty", description: "Please add items to your cart." });
      return;
    }
    if (!process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY) {
      toast({ variant: "destructive", title: "Configuration Error", description: "Payment gateway is not configured." });
      return;
    }
    setIsCheckoutDialogOpen(true);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag />
              {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                      {cartCount}
                  </span>
              )}
              <span className="sr-only">Open shopping cart</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md flex flex-col">
          <SheetHeader>
            <SheetTitle>Shopping Cart ({cartCount})</SheetTitle>
          </SheetHeader>
          {cart.length > 0 ? (
            <>
              <div className="flex-grow overflow-y-auto -mx-6 px-6 divide-y">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-4 py-4">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden">
                      <Image
                        src={item.images[0]?.url || ''}
                        alt={item.images[0]?.alt || item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-grow">
                      <Link href={`/products/${item.slug}`} className="font-semibold hover:underline" onClick={() => setOpen(false)}>{item.name}</Link>
                      <p className="text-sm text-muted-foreground">Ksh {item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                              <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-semibold">{item.quantity}</span>
                          <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                              <Plus className="h-4 w-4" />
                          </Button>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={() => removeFromCart(item.id)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
              <SheetFooter className="mt-auto border-t pt-4 space-y-4">
                  <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>Ksh {cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full" size="lg" onClick={handlePayNowClick}>
                      Pay Now
                    </Button>
                    <Button size="lg" variant="tactile-green" className="w-full" onClick={handleCheckoutViaWhatsApp}>
                        <WhatsAppIcon />
                        Checkout via WhatsApp
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full" onClick={clearCart}>Clear Cart</Button>
              </SheetFooter>
            </>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              <p className="mt-4 font-semibold">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">Add some products to get started.</p>
            </div>
          )}
        </SheetContent>
      </Sheet>
      
      <Dialog open={isCheckoutDialogOpen} onOpenChange={setIsCheckoutDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Checkout Details</DialogTitle>
          </DialogHeader>
          <Form {...checkoutForm}>
            <form onSubmit={checkoutForm.handleSubmit(handleCheckoutSubmit)} className="space-y-4 py-4">
                <FormField control={checkoutForm.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input placeholder="e.g., Jane Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                <FormField control={checkoutForm.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl><Input type="email" placeholder="e.g., jane.doe@example.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
              <FormField control={checkoutForm.control} name="county" render={({ field }) => (
                <FormItem>
                  <FormLabel>County</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select a county" /></SelectTrigger></FormControl>
                    <SelectContent>
                      {kenyanCounties.map(county => <SelectItem key={county} value={county}>{county}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}/>
              <FormField control={checkoutForm.control} name="region" render={({ field }) => (
                <FormItem>
                  <FormLabel>Region / Town</FormLabel>
                  <FormControl><Input placeholder="e.g., Westlands" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}/>
              <FormField control={checkoutForm.control} name="description" render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Description</FormLabel>
                  <FormControl><Textarea placeholder="e.g., Building name, street, house number" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}/>
              <DialogFooter>
                <Button type="submit">Proceed to Payment</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
