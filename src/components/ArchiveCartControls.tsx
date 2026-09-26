import React, { useState } from 'react';
import type { Product } from '../data/products';
import { addToCart, addSystemMessage } from '../store/cartStore';

export default function ArchiveCartControls({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<number | null>(product.sizes.length > 0 ? product.sizes[0] : null);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    addToCart(product, selectedSize);
    addSystemMessage('SYSTEM / ITEM ADDED TO CART');
  };

  return (
    <div className="mt-8 border-t border-[var(--ink-ghost)] pt-8">
      <div className="text-mono mb-4 text-[var(--ink-secondary)]">SELECT SIZE</div>
      <div className="flex flex-wrap gap-2 mb-8">
        {product.sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-10 h-10 border border-[var(--ink-primary)] text-mono flex items-center justify-center transition-colors
              ${selectedSize === size 
                ? 'bg-[var(--ink-primary)] text-[var(--paper-base)]' 
                : 'hover:bg-[var(--ink-faded)] hover:text-[var(--paper-base)] hover:border-[var(--ink-faded)]'
              }`}
          >
            {size.toString().padStart(2, '0')}
          </button>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="text-h2 mb-4 sm:mb-0">
          {product.currency} {product.price.toLocaleString()}
        </div>
        
        <button 
          onClick={handleAddToCart}
          disabled={product.status === 'OUT OF STOCK'}
          className="text-mono text-lg border-b border-[var(--ink-primary)] pb-1 hover:opacity-50 disabled:opacity-30 transition-opacity"
        >
          {product.status === 'OUT OF STOCK' ? '[ OUT OF STOCK ]' : '[ ADD TO RECEIPT ]'}
        </button>
      </div>
    </div>
  );
}
