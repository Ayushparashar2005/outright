import React from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products';

interface PrintEffectProps {
  product: Product;
  size: number;
}

export default function PrintEffect({ product, size }: PrintEffectProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 1 }}
      animate={{ height: 120, opacity: [1, 1, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", opacity: { delay: 1, duration: 0.2 } }}
      className="absolute top-full left-0 w-full overflow-hidden border-x border-b border-[var(--ink-primary)] bg-[var(--paper-base)] z-10"
      style={{
        boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
        borderBottomStyle: 'dashed'
      }}
    >
      <div className="p-4 text-mono-sm">
        <div className="mb-2 tracking-system">*** ITEM PRINTED ***</div>
        <div className="flex justify-between">
          <span>{product.name}</span>
          <span>SIZE {size.toString().padStart(2, '0')}</span>
        </div>
        <div className="text-[var(--ink-faded)] mt-1">{product.sku}</div>
        <div className="mt-4 text-right">
          {product.currency} {product.price.toLocaleString()}
        </div>
      </div>
    </motion.div>
  );
}
