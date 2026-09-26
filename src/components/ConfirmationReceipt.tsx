import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { orderSnapshot } from '../store/orderStore';

export default function ConfirmationReceipt() {
  const $orderSnapshot = useStore(orderSnapshot);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Cleanup order snapshot on unmount if it exists, so next time it's clear
    return () => {
      if (orderSnapshot.get()) {
        orderSnapshot.set(null);
      }
    };
  }, []);

  if (!isClient) return null;

  if (!$orderSnapshot) {
    return (
      <div className="w-full max-w-md bg-[var(--paper-base)] border border-[var(--ink-primary)] p-8 shadow-2xl relative text-center text-mono">
        <div className="text-h2 my-4">NO RECORD FOUND</div>
        <div className="text-[var(--ink-faded)]">ORDER DETAILS EXPIRED OR INVALID</div>
      </div>
    );
  }

  const { orderId, items, total, timestamp } = $orderSnapshot;
  const date = new Date(timestamp);
  const dateStr = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
  const timeStr = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

  return (
    <div id="receipt-container" className="w-full max-w-md bg-[var(--paper-base)] border border-[var(--ink-primary)] p-8 shadow-2xl relative">
      {/* Jagged top edge */}
      <div 
        className="absolute top-0 left-0 w-full h-2 bg-[var(--paper-base)] transform -translate-y-full"
        style={{
          WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><polygon points="0,10 5,0 10,10" fill="black"/></svg>')`,
          WebkitMaskRepeat: 'repeat-x',
          maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><polygon points="0,10 5,0 10,10" fill="black"/></svg>')`,
          maskRepeat: 'repeat-x'
        }}
      ></div>
      
      <div className="text-center mb-8">
        <div className="text-mono tracking-widest font-bold">══════════════════════════════════</div>
        <div className="text-h2 my-4">TRANSACTION COMPLETE</div>
        <div className="text-mono tracking-widest font-bold">══════════════════════════════════</div>
      </div>

      <div className="text-mono space-y-2 mb-8">
        <div className="flex justify-between">
          <span>ORDER</span>
          <span>/ {orderId}</span>
        </div>
        <div className="flex justify-between">
          <span>DATE</span>
          <span>/ {dateStr}</span>
        </div>
        <div className="flex justify-between">
          <span>TIME</span>
          <span>/ {timeStr}</span>
        </div>
      </div>

      <div className="text-mono tracking-widest font-bold mb-4">══════════════════════════════════</div>
      <div className="text-mono mb-4">ITEMS</div>
      <div className="receipt-rule my-4"></div>
      
      <div className="space-y-4 text-mono mb-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between">
            <span>{item.quantity.toString().padStart(2, '0')} × {item.product.name} / SIZE {item.size.toString().padStart(2, '0')}</span>
            <span>{item.product.currency} {(item.product.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="receipt-rule my-4"></div>
      
      <div className="space-y-2 text-mono mb-8">
        <div className="flex justify-between">
          <span>SUBTOTAL</span>
          <span className="dotted-leader"></span>
          <span>INR {total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>TOTAL</span>
          <span className="dotted-leader"></span>
          <span>INR {total.toLocaleString()}</span>
        </div>
      </div>

      <div className="text-mono tracking-widest font-bold mb-8">══════════════════════════════════</div>

      <div className="text-center text-mono space-y-4 mb-8">
        <div className="font-bold text-lg">THANK YOU</div>
        <div className="text-sm leading-relaxed">
          YOUR ORDER HAS BEEN REGISTERED.<br/>
          WE WILL NOTIFY YOU WHEN<br/>
          YOUR RECEIPT IS DISPATCHED.
        </div>
      </div>

      <div className="text-center text-mono tracking-widest font-bold mb-4">══════════════════════════════════</div>
      <div className="text-center text-mono tracking-widest font-bold mb-4">*  *  *  *  *</div>
      <div className="text-center text-mono tracking-widest font-bold">══════════════════════════════════</div>

      {/* Jagged bottom edge */}
      <div 
        className="absolute bottom-0 left-0 w-full h-2 bg-[var(--paper-base)] transform translate-y-full rotate-180"
        style={{
          WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><polygon points="0,10 5,0 10,10" fill="black"/></svg>')`,
          WebkitMaskRepeat: 'repeat-x',
          maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><polygon points="0,10 5,0 10,10" fill="black"/></svg>')`,
          maskRepeat: 'repeat-x'
        }}
      ></div>
    </div>
  );
}
