'use client';

import { useState } from 'react';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { kenyanCounties } from '@/lib/kenyan-counties';
import { useFirestore, useUser, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';


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
      <path fill="black" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .2c54.9 0 105.8 21.2 144.2 59.5 38.2 38.3 59.5 89.4 59.5 144.2 0 112.2-91.5 203.7-203.7 203.7-35.1 0-69.2-9-98.7-25.9l-7.1-4.2-73.3 19.3 19.7-71.5-4.5-7.4c-18.4-30.6-28.2-66.2-28.2-103.5 0-112.2 91.5-203.7 203.7-203.7zM223.9 150.1c-12.2 0-22.1 9.9-22.1 22.1v.1c0 12.2 9.9 22.1 22.1 22.1 6.1 0 11.6-2.5 15.6-6.5 3.9-3.9 6.5-9.4 6.5-15.6-.1-12.2-10-22.1-22.1-22.1zm53.8 141.2c-4.4-2.2-26.2-12.9-30.3-14.4-4.1-1.5-7.1-2.2-10.1 2.2s-11.4 14.4-14 17.3c-2.6 3-5.2 3.3-9.6 1.1-4.4-2.2-18.6-6.9-35.4-21.8-13-11.7-21.8-26.2-24.4-30.6-2.6-4.4-.3-6.9 1.9-9.1 2-2 4.4-5.2 6.6-7.8 2.2-2.6 3-4.4 1.5-7.4-1.5-3-10.1-24.3-13.8-33.3-3.7-8.9-7.5-7.7-10.1-7.8h-9.1c-2.6 0-7.1.3-10.9 4.4-3.8 4.1-14.6 14.3-14.6 34.9 0 20.6 15 40.5 17.1 43.5 2.1 3 29.5 44.9 71.9 62.8 10.4 4.4 18.5 7.1 24.8 9.1 6.3 2 12.1 1.7 16.7.7 5.2-.9 26.2-10.7 29.9-21.1 3.7-10.4 3.7-19.3 2.6-21.1-1.1-1.9-4.1-3-8.5-5.2z" />
    </svg>
  );

const addressSchema = z.object({
  county: z.string().min(1, 'County is required'),
  region: z.string().min(1, 'Region/Town is required'),
  description: z.string().min(1, 'Address description is required'),
});
type AddressFormData = z.infer<typeof addressSchema>;

const fallbackColors = ['#111827', '#f9fafb', '#4b5563', '#9ca3af'];
const sizes = ['S', 'M', 'L', 'XL'];

export default function ProductPurchaseForm({ product, selectedColor, setSelectedColor }: ProductPurchaseFormProps) {
  const { addToCart, toggleWishlist, isProductInWishlist } = useAppContext();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);
  const [addressData, setAddressData] = useState<AddressFormData | null>(null);

  const isInWishlist = isProductInWishlist(product.id);
  const { toast } = useToast();
  const firestore = useFirestore();
  const { user } = useUser();
  
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: { county: '', region: '', description: '' },
  });

  const availableSizes = product.sizes || ['S', 'M', 'L'];


  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product.id);
  };
  
  const handleBuyViaWhatsApp = () => {
    const selectedColorName = product.availableColors?.find(c => c.hex === selectedColor)?.name;
    const colorText = selectedColorName ? ` in color ${selectedColorName}` : '';
    const message = `Hi Eddjos, I would like to order ${quantity} of the ${product.name}${colorText} in Size ${selectedSize}. Price: Ksh ${(product.price * quantity).toFixed(2)}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254740685488?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const paystackConfig = {
    reference: (new Date()).getTime().toString(),
    email: "customer@example.com", // Using a placeholder email
    amount: product.price * quantity * 100, // Amount in cents
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
    currency: 'KES',
    metadata: {
      productName: product.name,
      quantity,
      size: selectedSize,
      custom_fields: [
        { display_name: "Product Name", variable_name: "product_name", value: product.name },
        { display_name: "Quantity", variable_name: "quantity", value: quantity },
        { display_name: "Size", variable_name: "size", value: selectedSize },
        { display_name: "County", variable_name: "shipping_county", value: addressData?.county || "" },
        { display_name: "Region", variable_name: "shipping_region", value: addressData?.region || "" },
        { display_name: "Address Description", variable_name: "shipping_description", value: addressData?.description || "" }
      ]
    }
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const onPaystackSuccess = (reference: any) => {
    if (!firestore || !user || !addressData) {
        toast({ variant: "destructive", title: "Error", description: "Could not save order. User or address missing."});
        return;
    }
    
    const orderData = {
        userId: user.uid,
        products: [{ id: product.id, name: product.name, quantity, price: product.price }],
        totalAmount: product.price * quantity,
        shippingAddress: addressData,
        status: 'pending' as const,
        createdAt: serverTimestamp(),
    };
    
    addDocumentNonBlocking(collection(firestore, 'orders'), orderData);
    
    toast({
        title: "Payment Successful!",
        description: `Thank you for your purchase. Reference: ${reference.reference}`,
    });
  };

  const onPaystackClose = () => {
      // Silent on close as it's triggered on success as well.
  };

  const handleAddressSubmit = (data: AddressFormData) => {
    setAddressData(data);
    setIsAddressDialogOpen(false);
    initializePayment({ onSuccess: onPaystackSuccess, onClose: onPaystackClose });
  };

  const handlePayNowClick = () => {
      if (!process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY) {
          toast({
              variant: "destructive",
              title: "Configuration Error",
              description: "Paystack payment is not configured correctly."
          });
          return;
      }
      setIsAddressDialogOpen(true);
  };

  const colorOptions = product.availableColors || fallbackColors.map(hex => ({ name: hex, hex }));


  return (
    <>
    <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm space-y-6">
      <div>
        <div className="flex justify-between items-start gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <button
            onClick={handleToggleWishlist}
            className={cn(
                "wishlist-btn",
                isInWishlist && "active"
            )}
            aria-label="Add to wishlist"
            >
            <div className="particles">
                <span style={{'--i': 1} as React.CSSProperties}></span>
                <span style={{'--i': 2} as React.CSSProperties}></span>
                <span style={{'--i': 3} as React.CSSProperties}></span>
                <span style={{'--i': 4} as React.CSSProperties}></span>
                <span style={{'--i': 5} as React.CSSProperties}></span>
                <span style={{'--i': 6} as React.CSSProperties}></span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="black" strokeWidth="1.5"/>
            </svg>
        </button>
        </div>
      </div>

      {colorOptions.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-900">Color</h3>
          <div className="flex items-center gap-3 mt-2">
            {colorOptions.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.hex)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color.hex ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-gray-200'}`}
                style={{ backgroundColor: color.hex }}
              >
                <span className="sr-only">{color.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Size</h3>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {sizes.map((size) => {
              const isAvailable = availableSizes.includes(size);
              return (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  disabled={!isAvailable}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-full px-4 py-2 ${!isAvailable ? 'text-gray-400 line-through' : ''}`}
                >
                  {size}
                </Button>
              );
            })}
          </div>
        </div>
        <a href="#" className="text-sm text-primary hover:underline">Size Guide</a>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center border rounded-full">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
              <Minus className="w-4 h-4" />
            </Button>
            <span className="w-10 text-center font-semibold">{quantity}</span>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setQuantity(q => q + 1)}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="border-t pt-6 space-y-4">
        <div className="flex justify-between items-center">
            <span className="text-lg text-gray-500">Total Price</span>
            <p className="text-3xl font-bold">Ksh {(product.price * quantity).toFixed(2)}</p>
        </div>
        <div className="grid grid-cols-1 gap-2">
            <Button size="lg" className="w-full rounded-full h-12 text-base font-bold" onClick={handleAddToCart}>Add to Cart</Button>
            <Button size="lg" variant="default" className="w-full rounded-full h-12 text-base font-bold" onClick={handlePayNowClick}>Pay Now</Button>
            <Button size="lg" variant="tactile-green" className="w-full rounded-full h-12 text-base font-bold" onClick={handleBuyViaWhatsApp}>
                <WhatsAppIcon />
                Buy via WhatsApp
            </Button>
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-gray-900">Description</h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
    <Dialog open={isAddressDialogOpen} onOpenChange={setIsAddressDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Shipping Address</DialogTitle>
          </DialogHeader>
          <Form {...addressForm}>
            <form onSubmit={addressForm.handleSubmit(handleAddressSubmit)} className="space-y-4 py-4">
              <FormField control={addressForm.control} name="county" render={({ field }) => (
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
              <FormField control={addressForm.control} name="region" render={({ field }) => (
                <FormItem>
                  <FormLabel>Region / Town</FormLabel>
                  <FormControl><Input placeholder="e.g., Westlands" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}/>
              <FormField control={addressForm.control} name="description" render={({ field }) => (
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
