'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { ShoppingBag } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { cn } from '@/lib/utils';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isProductInWishlist } = useAppContext();

  const primaryImage = product.images[0] ?? {
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
    <div 
      className="relative group overflow-hidden rounded-2xl bg-gray-100 transition-all duration-100 ease-in-out shadow-[0_4px_0_hsl(var(--border))] hover:-translate-y-0.5 hover:shadow-[0_6px_0_hsl(var(--border))] border-2 border-black"
    >
      <Link href={`/products/${product.slug}`} className="absolute inset-0 z-10" aria-label={product.name}/>
      <div className="aspect-[3/4]">
        <Image
          src={primaryImage.url}
          alt={primaryImage.alt}
          fill
          className="object-cover transition-opacity duration-500 group-hover:scale-105"
          data-ai-hint={primaryImage.hint}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div 
        className="absolute bottom-4 left-4 right-4 bg-gray-300/60 backdrop-blur-md rounded-2xl p-3 flex items-center justify-between border border-white/20 z-20"
      >
        <div>
          <h3 className="font-normal text-gray-900 truncate">{product.name}</h3>
          <div className="flex items-baseline gap-2">
              <p className="text-lg font-semibold text-gray-900">Ksh {product.price.toFixed(2)}</p>
              {product.originalPrice && (
                  <p className="text-sm text-red-500 line-through">Ksh {product.originalPrice.toFixed(2)}</p>
              )}
          </div>
        </div>
        <button
          onClick={handleAddToCartClick}
          aria-label="Add to cart"
          className="flex-shrink-0 w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 active:scale-95 transition-all"
        >
          <ShoppingBag size={20} />
        </button>
      </div>
      <button
        onClick={handleWishlistClick}
        aria-label="Toggle Wishlist"
        className={cn(
          "wishlist-btn absolute top-4 right-4 z-20",
          isInWishlist && "active"
        )}
      >
        <div className="particles">
          <span style={{ '--i': 1 } as React.CSSProperties}></span>
          <span style={{ '--i': 2 } as React.CSSProperties}></span>
          <span style={{ '--i': 3 } as React.CSSProperties}></span>
          <span style={{ '--i': 4 } as React.CSSProperties}></span>
          <span style={{ '--i': 5 } as React.CSSProperties}></span>
          <span style={{ '--i': 6 } as React.CSSProperties}></span>
        </div>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
             stroke="black" strokeWidth="1.5" fill="rgba(255,255,255,0)"/>
        </svg>
      </button>
      
       {product.style && 
        <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md border-white/90 text-black text-xs font-semibold px-3 py-1 rounded-full">{product.style.charAt(0).toUpperCase() + product.style.slice(1)}</div>
      }
    </div>
  );
}
