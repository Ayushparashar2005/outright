import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { cameraPosition, currentFps, sessionStartTime, memoryUsage } from '../store/systemStore';
import { cartItems } from '../store/cartStore';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

export default function SystemMonitor() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [uptime, setUptime] = useState('00:00:00');
  
  const cam = useStore(cameraPosition);
  const fps = useStore(currentFps);
  const start = useStore(sessionStartTime);
  const mem = useStore(memoryUsage);
  const cart = useStore(cartItems);
  
  // Need to read the active filters count to get "filtered visible", but for now we'll just show total index size
  // and we can optionally listen to filters-changed to update a local state.
  const [visibleCount, setVisibleCount] = useState(products.length);

  useEffect(() => {
    const handleFilters = (e: any) => {
      // In SpatialCatalog, it handles the actual filtering. We can listen to the same event or R3F can emit it.
      // For simplicity, we just listen to a new custom event 'visible-count' that SpatialCatalog will emit.
    };
    document.addEventListener('visible-count', ((e: CustomEvent) => setVisibleCount(e.detail)) as EventListener);
    return () => document.removeEventListener('visible-count', handleFilters);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.floor((Date.now() - start) / 1000);
      const h = Math.floor(diff / 3600).toString().padStart(2, '0');
      const m = Math.floor((diff % 3600) / 60).toString().padStart(2, '0');
      const s = (diff % 60).toString().padStart(2, '0');
      setUptime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="fixed bottom-6 right-6 z-[90] font-mono text-[10px] md:text-xs">
      {!isExpanded ? (
        <button 
          onClick={() => setIsExpanded(true)}
          className="bg-[var(--paper-base)] border border-[var(--ink-primary)] px-3 py-1 hover:bg-[var(--ink-primary)] hover:text-[var(--paper-base)] transition-colors shadow-sm text-mono"
        >
          [ SYS ]
        </button>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="bg-[var(--paper-base)] border border-[var(--ink-primary)] p-4 shadow-xl text-mono min-w-[240px]"
        >
          <div className="flex justify-between items-center mb-2 text-[var(--ink-faded)]">
            <span>DIAGNOSTICS</span>
            <button onClick={() => setIsExpanded(false)} className="hover:opacity-50">[ _ ]</button>
          </div>
          <div className="receipt-rule opacity-50 mb-4" />
          
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>PRODUCTS IN INDEX</span>
              <span className="opacity-50">........</span>
              <span>{products.length}</span>
            </div>
            <div className="flex justify-between">
              <span>FILTERED VISIBLE</span>
              <span className="opacity-50">.........</span>
              <span>{visibleCount}</span>
            </div>
            <div className="flex justify-between">
              <span>ITEMS IN CART</span>
              <span className="opacity-50">............</span>
              <span>{cart.length.toString().padStart(2, '0')}</span>
            </div>
            
            <div className="receipt-rule opacity-20 my-2" />
            
            <div className="flex justify-between text-[var(--accent-copper)]">
              <span>CAMERA POS</span>
              <span className="opacity-50">...........</span>
              <span>X:{cam.x.toFixed(1)} Y:{cam.y.toFixed(1)} Z:{cam.z.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span>RENDER FPS</span>
              <span className="opacity-50">...........</span>
              <span>{fps}</span>
            </div>
            {mem > 0 && (
              <div className="flex justify-between">
                <span>HEAP MEMORY</span>
                <span className="opacity-50">..........</span>
                <span>{mem}MB</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>SESSION UPTIME</span>
              <span className="opacity-50">.......</span>
              <span>{uptime}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
