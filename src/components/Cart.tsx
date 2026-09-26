import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { motion, AnimatePresence } from 'framer-motion';
import { cartItems, cartTotal, removeFromCart, updateQuantity } from '../store/cartStore';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const $cartItems = useStore(cartItems);
  const $cartTotal = useStore(cartTotal);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    document.addEventListener('open-cart', handleOpen);
    return () => document.removeEventListener('open-cart', handleOpen);
  }, []);

  const now = new Date();
  const dateStr = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()}`;
  const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Receipt Panel */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed bottom-0 right-0 md:right-12 w-full md:w-[380px] max-h-[85vh] bg-[var(--paper-base)] z-50 flex flex-col border border-[var(--ink-primary)] shadow-2xl"
            role="dialog"
            aria-label="Shopping Cart"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
              borderBottom: 'none' // The jagged edge will be CSS later if needed, simple approach here
            }}
          >
            {/* Header */}
            <div className="p-6 pb-2 text-center">
              <div className="receipt-rule mt-0 mb-4" />
              <div className="text-mono tracking-system font-bold">PURCHASE RECORD</div>
              <div className="receipt-rule my-4" />
              <div className="text-mono-sm text-[var(--ink-faded)]">{dateStr} / {timeStr}</div>
              <div className="receipt-rule mt-4 mb-0" />
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {$cartItems.length === 0 ? (
                <div className="text-center text-mono py-8 flex flex-col items-center">
                  <div className="text-[var(--ink-faded)] mb-4">NO ITEMS DETECTED</div>
                  <a href="/archive" className="hover:opacity-50 border-b border-[var(--ink-primary)] pb-1" onClick={() => setIsOpen(false)}>
                    [ BROWSE CATALOG ]
                  </a>
                </div>
              ) : (
                <div className="space-y-6">
                  {$cartItems.map((item, index) => (
                    <div key={item.id} className="text-mono">
                      <div className="flex justify-between items-start">
                        <div>
                          <span>{(index + 1).toString().padStart(2, '0')} </span>
                          <span>{item.product.name} {item.product.color}</span>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="hover:opacity-50 text-[var(--ink-faded)] ml-4"
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          [×]
                        </button>
                      </div>
                      <div className="pl-6 mt-1 text-[var(--ink-faded)]">
                        <div>SIZE {item.size.toString().padStart(2, '0')}</div>
                        <div>SKU: {item.product.sku}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span>QTY: </span>
                          <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-[var(--ink-primary)]" aria-label="Decrease quantity">[−]</button>
                          <span className="min-w-[2ch] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-[var(--ink-primary)]" aria-label="Increase quantity">[+]</button>
                        </div>
                      </div>
                      <div className="text-right mt-2 font-bold">
                        {item.product.currency} {(item.product.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 pt-2 bg-[var(--paper-base)]">
              <div className="receipt-rule my-4" />
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-mono">
                  <span>SUBTOTAL</span>
                  <span className="dotted-leader" />
                  <span>INR {$cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-mono">
                  <span>ITEMS</span>
                  <span className="dotted-leader" />
                  <span>{$cartItems.reduce((acc, i) => acc + i.quantity, 0).toString().padStart(2, '0')}</span>
                </div>
                <div className="flex justify-between text-mono">
                  <span>STATUS</span>
                  <span className="dotted-leader" />
                  <span>{$cartItems.length > 0 ? 'READY' : 'PENDING'}</span>
                </div>
                <div className="flex justify-between text-mono font-bold mt-4 pt-4 border-t border-dashed border-[var(--ink-primary)]">
                  <span>TOTAL</span>
                  <span>INR {$cartTotal.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="receipt-rule mb-6" />

              <div className="text-center pb-4">
                {/* Regular anchor tag to Astro static page instead of react router */}
                <a 
                  href={$cartItems.length > 0 ? "/checkout" : "#"}
                  className={`inline-block text-mono text-lg tracking-widest ${
                    $cartItems.length > 0 ? 'hover:opacity-50' : 'opacity-30 cursor-not-allowed'
                  }`}
                  onClick={(e) => {
                    if ($cartItems.length === 0) e.preventDefault();
                  }}
                >
                  [ CHECKOUT ]
                </a>
              </div>
              
              {/* Jagged bottom edge simulation */}
              <div 
                className="absolute bottom-0 left-0 w-full h-2 bg-[var(--paper-base)] transform translate-y-1/2"
                style={{
                  WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><polygon points="0,10 5,0 10,10" fill="black"/></svg>')`,
                  WebkitMaskRepeat: 'repeat-x',
                  maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><polygon points="0,10 5,0 10,10" fill="black"/></svg>')`,
                  maskRepeat: 'repeat-x'
                }}
              ></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
