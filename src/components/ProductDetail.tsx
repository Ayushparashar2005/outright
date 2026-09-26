import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../data/products';
import { addToCart, addSystemMessage } from '../store/cartStore';
import PrintEffect from './PrintEffect';
import { playPrintSound, playHoverSound } from '../utils/sound';
import ObjectFile from './ObjectFile';

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const handleSelect = (e: CustomEvent<Product>) => {
      setProduct(e.detail);
      setSelectedSize(e.detail.sizes[0]);
    };
    
    document.addEventListener('select-product', handleSelect as EventListener);
    return () => document.removeEventListener('select-product', handleSelect as EventListener);
  }, []);

  const close = () => {
    document.dispatchEvent(new CustomEvent('clear-product'));
    setProduct(null);
  };

  const handlePrint = () => {
    if (!product || !selectedSize) return;
    
    setIsPrinting(true);
    addSystemMessage('PRINTING RECEIPT...');
    playPrintSound();
    
    // Simulate print delay then add to cart
    setTimeout(() => {
      addToCart(product, selectedSize);
      addSystemMessage('ITEM ADDED');
      setIsPrinting(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-screen w-full md:w-[400px] bg-[var(--paper-base)] border-l border-[var(--ink-primary)] z-40 overflow-y-auto p-6 pt-16 flex flex-col shadow-[-20px_0_40px_rgba(0,0,0,0.05)]"
          role="dialog"
          aria-labelledby="product-detail-title"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="text-mono-sm tracking-system text-[var(--ink-faded)] mb-1">
                PRODUCT / {product.id}
              </div>
              <h1 id="product-detail-title" className="text-h2 leading-tight uppercase mb-2">{product.model}</h1>
              <div className="text-mono text-[var(--ink-secondary)]">{product.name} — {product.color} / {product.material.split('/')[0]}</div>
            </div>
            <button onClick={close} className="text-mono hover:opacity-50" aria-label="Close product details">[×]</button>
          </div>

          <div className="receipt-rule mb-6" />

          {/* Product Image */}
          <div className="mb-8 border border-[var(--ink-primary)] p-4 relative group">
            <div className="absolute top-2 left-2 text-[10px] text-mono text-[var(--ink-faded)] bg-[var(--paper-base)] px-1">
              [ IMG_DATA ]
            </div>
            
            <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-[var(--ink-ghost)]">
              {/* Scanline overlay for aesthetic */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none" />
              
              <motion.img 
                src={product.image} 
                alt={product.name}
                initial={{ opacity: 0, filter: 'contrast(1.5) brightness(0.8) grayscale(1)' }}
                animate={{ opacity: 1, filter: 'contrast(1) brightness(1) grayscale(0)' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-[90%] h-[90%] object-contain relative z-0"
                style={{ mixBlendMode: 'var(--blend-mode)' as any }}
              />
            </div>
            <div className="mt-2 text-[10px] text-mono text-right text-[var(--ink-faded)]">
              RENDER: OK
            </div>
          </div>

          <div className="receipt-rule mb-8" />

          {/* Object File Content */}
          <div className="mb-8">
            <ObjectFile product={product} />
          </div>
          
          <div className="receipt-rule mb-8" />

          {/* Size Selector */}
          <div className="mb-12">
            <div className="text-mono mb-4">SIZE</div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  onMouseEnter={() => playHoverSound()}
                  aria-pressed={selectedSize === size}
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
          </div>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Footer / Action */}
          <div className="mt-auto pb-8 relative">
            <div className="text-h2 mb-4">
              {product.currency} {product.price.toLocaleString()}
            </div>
            
            <div className="relative">
              <button 
                onClick={handlePrint}
                disabled={isPrinting || product.status === 'OUT OF STOCK'}
                className="w-full text-left text-mono text-lg border-b border-[var(--ink-primary)] pb-2 hover:opacity-50 disabled:opacity-30 transition-opacity"
              >
                {product.status === 'OUT OF STOCK' ? '[ OUT OF STOCK ]' : isPrinting ? '[ PRINTING... ]' : '[ ADD TO RECEIPT ]'}
              </button>
              
              {/* Print Animation Overlay */}
              <AnimatePresence>
                {isPrinting && (
                  <PrintEffect product={product} size={selectedSize!} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
