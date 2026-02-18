'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { ShoppingBag, Heart } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { cn } from '@/lib/utils';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isProductInWishlist } = useAppContext();

  const primaryImage = product.images?.[0] ?? {
    url: 'https://placehold.co/600x800',
    alt: 'Placeholder image',
    hint: 'placeholder',
  };
  
  const isInWishlist = isProductInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  }

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  }

  return (
    <div className="relative group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-50">
        <Image
          src={primaryImage.url}
          alt={primaryImage.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={primaryImage.hint}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
          {product.style && (
            <span className="bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-white/50">
              {product.style}
            </span>
          )}
        </div>

        {/* This link overlay allows the card to be clickable without illegal nesting of buttons inside anchors */}
        <Link 
          href={`/products/${product.slug}`} 
          className="absolute inset-0 z-10" 
          aria-label={`View ${product.name}`} 
        />

        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
           <button
            onClick={handleAddToCartClick}
            className="w-full h-10 bg-white text-black rounded-full flex items-center justify-center gap-2 text-sm font-bold shadow-lg hover:bg-gray-100 active:scale-95 transition-all pointer-events-auto"
          >
            <ShoppingBag size={16} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="p-4 space-y-1 relative">
        <div className="flex justify-between items-start gap-2">
          <Link href={`/products/${product.slug}`} className="font-medium text-gray-900 truncate text-sm flex-grow hover:underline">
            {product.name}
          </Link>
          <button
            onClick={handleWishlistClick}
            className={cn(
              "p-1 rounded-full transition-colors relative z-20",
              isInWishlist ? "text-red-500" : "text-gray-300 hover:text-gray-400"
            )}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={18} fill={isInWishlist ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">Ksh {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">Ksh {product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{product.category}</p>
      </div>
    </div>
  );
}