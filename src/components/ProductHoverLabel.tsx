import React from 'react';
import type { Product } from '../data/products';

export default function ProductHoverLabel({ product }: { product: Product }) {
  return (
    <div
      className="bg-[var(--paper-base)] border border-[var(--ink-primary)] p-2 pointer-events-none whitespace-nowrap min-w-[180px] animate-[fadeInUp_0.2s_ease-out_forwards]"
      style={{
        boxShadow: '2px 2px 0 var(--ink-faded)'
      }}
    >
      <div className="text-mono-sm tracking-system mb-1">PRODUCT {product.id}</div>
      <div className="receipt-rule my-1 opacity-50" style={{ height: '1px' }} />
      <div className="flex justify-between text-mono text-[10px] leading-tight">
        <span>MODEL</span>
        <span className="opacity-50">........</span>
        <span>{product.name}</span>
      </div>
      <div className="flex justify-between text-mono text-[10px] leading-tight">
        <span>COLOR</span>
        <span className="opacity-50">........</span>
        <span>{product.color}</span>
      </div>
      <div className="flex justify-between text-mono text-[10px] leading-tight">
        <span>SIZE</span>
        <span className="opacity-50">..........</span>
        <span>{product.sizes.length > 1 ? `${product.sizes[0]}-${product.sizes[product.sizes.length-1]}` : product.sizes[0]?.toString().padStart(2, '0') || 'N/A'}</span>
      </div>
      <div className="flex justify-between text-mono text-[10px] leading-tight">
        <span>STATUS</span>
        <span className="opacity-50">........</span>
        <span>{product.status}</span>
      </div>
      <div className="receipt-rule my-1 opacity-50" style={{ height: '1px' }} />
      <div className="text-right text-mono font-bold mt-1">
        {product.currency} {product.price.toLocaleString()}
      </div>
    </div>
  );
}
