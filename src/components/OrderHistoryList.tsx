import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { orderHistory } from '../store/orderHistoryStore';
import { motion, AnimatePresence } from 'framer-motion';
import { playHoverSound } from '../utils/sound';

export default function OrderHistoryList() {
  const $history = useStore(orderHistory);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if ($history.length === 0) {
    return (
      <div className="max-w-2xl mx-auto mt-24 text-center text-mono">
        <div className="text-h2 mb-4">TRANSACTION LOG EMPTY</div>
        <a href="/" className="hover:opacity-50 border-b border-[var(--ink-primary)] pb-1">[ RETURN TO INDEX ]</a>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-24 px-6 mb-24">
      <div className="text-mono-sm tracking-system mb-8">SYSTEM / TRANSACTION LOG</div>
      
      <div className="space-y-4">
        {$history.map((order, i) => {
          const isExpanded = expandedId === order.orderId;
          const date = new Date(order.timestamp);
          const dateStr = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
          const timeStr = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

          return (
            <motion.div 
              key={order.orderId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--paper-base)] border border-[var(--ink-primary)] shadow-sm"
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-center hover:bg-[var(--ink-primary)] hover:text-[var(--paper-base)] transition-colors group"
                onClick={() => {
                  setExpandedId(isExpanded ? null : order.orderId);
                  playHoverSound();
                }}
              >
                <div className="text-mono">
                  <span className="font-bold mr-4">ORDER / {order.orderId}</span>
                  <span className="text-sm opacity-60 group-hover:opacity-100">{dateStr} {timeStr}</span>
                </div>
                <div className="text-mono font-bold">
                  INR {order.total.toLocaleString()}
                </div>
              </div>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-[var(--ink-primary)] border-dashed mt-4 mx-6">
                      <div className="text-mono mt-6 mb-4">ITEMS</div>
                      <div className="space-y-4">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-mono text-sm">
                            <span>{item.quantity.toString().padStart(2, '0')} × {item.product.name} / SIZE {item.size.toString().padStart(2, '0')}</span>
                            <span>{item.product.currency} {(item.product.price * item.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="receipt-rule opacity-30 my-6" />
                      
                      <div className="text-mono text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="opacity-60">CUSTOMER</span>
                          <span>{order.customerName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="opacity-60">DELIVERY TO</span>
                          <span className="text-right max-w-[50%]">{order.deliveryAddress}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
