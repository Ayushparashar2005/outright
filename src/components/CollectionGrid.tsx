import React from 'react';
import { useStore } from '@nanostores/react';
import { collection, type CollectionState } from '../store/collectionStore';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { playHoverSound } from '../utils/sound';

interface CollectionGridProps {
  filter: CollectionState | 'ALL';
  limit?: number;
}

export default function CollectionGrid({ filter, limit }: CollectionGridProps) {
  const $collection = useStore(collection);

  // Filter entries
  let filteredEntries = $collection;
  if (filter !== 'ALL') {
    filteredEntries = $collection.filter(e => e.states.includes(filter));
  }
  
  if (limit) {
    filteredEntries = filteredEntries.slice(0, limit);
  }

  const items = filteredEntries.map(entry => {
    return {
      entry,
      product: products.find(p => p.id === entry.productId)
    };
  }).filter(item => item.product !== undefined);

  if (items.length === 0) {
    return (
      <div className="py-24 text-center border border-dashed border-[var(--ink-faded)] text-mono text-[var(--ink-faded)]">
        NO OBJECTS IN {filter === 'ALL' ? 'ARCHIVE' : filter.replace('_', ' ')}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map(({ entry, product }, i) => (
        <motion.div
          key={entry.productId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="border border-[var(--ink-primary)] p-4 flex flex-col group bg-[var(--paper-base)]"
        >
          <div className="aspect-square bg-[var(--ink-ghost)] mb-4 relative overflow-hidden flex items-center justify-center p-4">
            <img 
              src={product!.image} 
              alt={product!.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              style={{ mixBlendMode: 'var(--blend-mode)' as any }}
            />
            
            {/* Badges for states */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {entry.states.map(state => (
                <span key={state} className="text-mono text-[10px] bg-[var(--ink-primary)] text-[var(--paper-base)] px-1.5 py-0.5">
                  {state.replace('_', ' ')}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <div className="text-mono text-sm opacity-50">{product!.name}</div>
              <div className="text-mono text-[10px] opacity-30">#{product!.id}</div>
            </div>
            <h3 className="text-lg uppercase mb-2 leading-tight">{product!.model}</h3>
          </div>
          
          <a 
            href={`/?highlight=${product!.id}`}
            onMouseEnter={() => playHoverSound()}
            className="text-center w-full block border border-[var(--ink-primary)] text-mono py-2 hover:bg-[var(--ink-primary)] hover:text-[var(--paper-base)] transition-colors mt-4 text-sm"
          >
            [ VIEW OBJECT ]
          </a>
        </motion.div>
      ))}
    </div>
  );
}
