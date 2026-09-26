import React from 'react';
import { useStore } from '@nanostores/react';
import { watchlist, toggleWatchlist } from '../store/watchlistStore';
import { motion } from 'framer-motion';
import { playHoverSound } from '../utils/sound';

export default function Watchlist() {
  const $watchlist = useStore(watchlist);

  if ($watchlist.length === 0) {
    return (
      <div className="max-w-2xl mx-auto mt-24 text-center text-mono">
        <div className="text-h2 mb-4">WATCHLIST EMPTY</div>
        <a href="/" className="hover:opacity-50 border-b border-[var(--ink-primary)] pb-1">[ RETURN TO INDEX ]</a>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-24 px-6 mb-24">
      <div className="text-mono-sm tracking-system mb-8">SYSTEM / WATCHLIST</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {$watchlist.map((product, i) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[var(--paper-base)] border border-[var(--ink-primary)] shadow-[5px_5px_0_var(--ink-faded)] p-4 flex flex-col group"
          >
            <div className="aspect-square bg-[var(--ink-ghost)] mb-4 relative overflow-hidden flex items-center justify-center p-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                style={{ mixBlendMode: 'var(--blend-mode)' as any }}
              />
              <button 
                onClick={() => toggleWatchlist(product)}
                onMouseEnter={() => playHoverSound()}
                className="absolute top-2 right-2 text-mono text-xs bg-[var(--paper-base)] border border-[var(--ink-primary)] px-2 py-1 hover:bg-[var(--accent-copper)] hover:text-[var(--paper-base)] transition-colors"
              >
                [ REMOVE ]
              </button>
            </div>
            
            <div className="flex-1">
              <div className="text-mono text-sm opacity-50 mb-1">{product.name}</div>
              <h3 className="text-h2 uppercase text-lg mb-2 leading-none">{product.model}</h3>
              <div className="text-mono mb-4">{product.currency} {product.price.toLocaleString()}</div>
            </div>
            
            <a 
              href={`/?highlight=${product.id}`}
              onMouseEnter={() => playHoverSound()}
              className="text-center w-full block border border-[var(--ink-primary)] text-mono py-2 hover:bg-[var(--ink-primary)] hover:text-[var(--paper-base)] transition-colors mt-auto"
            >
              [ VIEW IN INDEX ]
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
