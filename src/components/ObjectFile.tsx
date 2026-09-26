import React from 'react';
import type { Product } from '../data/products';
import { objectData } from '../data/objectData';
import { useStore } from '@nanostores/react';
import { collection, toggleCollectionState, hasCollectionState, type CollectionState } from '../store/collectionStore';
import { logActivity } from '../store/activityStore';
import { playHoverSound } from '../utils/sound';
import { shareProduct } from '../utils/share';

interface ObjectFileProps {
  product: Product;
}

const ALL_STATES: CollectionState[] = [
  'OWNED', 'WANTED', 'FAVORITE', 'SEEN', 
  'RESEARCHED', 'PREVIOUSLY_OWNED', 'SOLD', 'TRADED'
];

export default function ObjectFile({ product }: ObjectFileProps) {
  const $collection = useStore(collection);
  const entry = $collection.find(e => e.productId === product.id);
  const activeStates = entry?.states || [];

  // Merge core product data with supplementary object data
  const enrichedProduct = { ...product, ...objectData[product.id] };

  const handleToggleState = (state: CollectionState) => {
    toggleCollectionState(product.id, state);
    logActivity('STATE_CHANGED', product.id, state);
    playHoverSound();
  };

  const getRarityBar = (rarity: number) => {
    const filled = Math.min(10, Math.max(0, rarity));
    const empty = 10 - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  };

  return (
    <div className="flex flex-col space-y-8">
      {/* Specs (retained from ProductDetail) */}
      <div className="space-y-4">
        <div className="flex justify-between text-mono items-center">
          <span>COLOR</span>
          <span className="dotted-leader" />
          <div className="flex items-center gap-2">
            <span 
              className="w-3 h-3 inline-block rounded-full border border-[var(--ink-primary)] shadow-sm"
              style={{ backgroundColor: product.colorHex || '#ccc' }}
            />
            <span className="text-right">{product.color}</span>
          </div>
        </div>
        <div className="flex justify-between text-mono">
          <span>MATERIAL</span>
          <span className="dotted-leader" />
          <span className="text-right max-w-[50%]">{product.material}</span>
        </div>
        <div className="flex justify-between text-mono">
          <span>ORIGIN</span>
          <span className="dotted-leader" />
          <span>{product.origin}</span>
        </div>
        <div className="flex justify-between text-mono">
          <span>RELEASE</span>
          <span className="dotted-leader" />
          <span>{product.release}</span>
        </div>
        <div className="flex justify-between text-mono">
          <span>STOCK</span>
          <span className="dotted-leader" />
          <span>{product.status}</span>
        </div>
        
        {enrichedProduct.rarity !== undefined && (
          <div className="flex justify-between text-mono items-center pt-2 border-t border-[var(--ink-ghost)]">
            <span>RARITY</span>
            <span className="dotted-leader" />
            <span className="tracking-widest">{getRarityBar(enrichedProduct.rarity)}</span>
          </div>
        )}
        
        {product.productUrl && (
          <div className="flex justify-between text-mono mt-4 pt-4 border-t border-[var(--ink-ghost)]">
            <span>SOURCE</span>
            <span className="dotted-leader" />
            <a href={product.productUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-copper)] transition-colors underline underline-offset-2">
              VIEW ON GOAT
            </a>
          </div>
        )}
        
        <div className="flex justify-between text-mono">
          <span>SHARE</span>
          <span className="dotted-leader" />
          <button 
            onClick={() => shareProduct(product.id)}
            className="hover:text-[var(--accent-copper)] transition-colors underline underline-offset-2"
            aria-label="Copy Product Link"
          >
            COPY LINK
          </button>
        </div>
        
        <div className="flex justify-between text-mono">
          <span>WATCHLIST</span>
          <span className="dotted-leader" />
          <button 
            onClick={() => handleToggleState('WANTED')}
            className="hover:text-[var(--accent-copper)] transition-colors underline underline-offset-2"
            aria-label="Toggle Watchlist"
          >
            {activeStates.includes('WANTED') ? 'REMOVE' : 'SAVE'}
          </button>
        </div>
      </div>

      <div className="receipt-rule" />

      {/* Your Relationship */}
      <div>
        <div className="text-mono-sm tracking-system mb-4">YOUR RELATIONSHIP</div>
        <div className="flex flex-wrap gap-2">
          {ALL_STATES.map(state => {
            const isActive = activeStates.includes(state);
            return (
              <button
                key={state}
                onClick={() => handleToggleState(state)}
                className={`text-mono text-xs border border-[var(--ink-primary)] px-2 py-1 transition-colors
                  ${isActive ? 'bg-[var(--ink-primary)] text-[var(--paper-base)]' : 'hover:bg-[var(--ink-faded)] hover:text-[var(--paper-base)] hover:border-[var(--ink-faded)]'}`}
              >
                {isActive ? `[×${state.replace('_', ' ')}]` : `[ ${state.replace('_', ' ')} ]`}
              </button>
            );
          })}
        </div>
      </div>

      {enrichedProduct.lore && (
        <>
          <div className="receipt-rule" />
          <div>
            <div className="text-mono-sm tracking-system mb-4">LORE / ARCHIVE ENTRY</div>
            <p className="text-mono text-sm leading-relaxed">
              {enrichedProduct.lore}
            </p>
          </div>
        </>
      )}

      {enrichedProduct.timeline && enrichedProduct.timeline.length > 0 && (
        <>
          <div className="receipt-rule" />
          <div>
            <div className="text-mono-sm tracking-system mb-4">HISTORICAL RECORD</div>
            <div className="space-y-3">
              {enrichedProduct.timeline.map((item, i) => (
                <div key={i} className="flex gap-4 text-mono text-sm">
                  <span className="font-bold min-w-[4ch]">{item.year}</span>
                  <span className="text-[var(--ink-secondary)]">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {enrichedProduct.culturalTags && enrichedProduct.culturalTags.length > 0 && (
        <>
          <div className="receipt-rule" />
          <div>
            <div className="text-mono-sm tracking-system mb-4">CULTURAL RECORD</div>
            <div className="flex flex-wrap gap-2">
              {enrichedProduct.culturalTags.map(tag => (
                <span key={tag} className="text-mono text-xs text-[var(--ink-faded)] border border-dashed border-[var(--ink-faded)] px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
