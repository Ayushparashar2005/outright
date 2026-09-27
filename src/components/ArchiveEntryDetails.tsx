import React from 'react';
import type { Product } from '../data/products';
import { products } from '../data/products';
import { archiveData } from '../data/archiveData';

interface Props {
  product: Product;
}

export default function ArchiveEntryDetails({ product }: Props) {
  const data = archiveData[product.id];

  const renderRarityBar = (rarity: number) => {
    const filled = '█'.repeat(rarity);
    const empty = '░'.repeat(10 - rarity);
    return `${filled}${empty}`;
  };

  if (!data) {
    return (
      <div className="mt-8 pt-6 border-t border-[var(--ink-faded)] opacity-50 text-mono-sm text-center">
        [ NO ARCHIVE DATA ]
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-8 pt-6 border-t border-[var(--ink-faded)] text-mono text-sm">
      
      {/* Significance & Rarity */}
      <div className="flex flex-col gap-3">
        {data.significance && (
          <div className="inline-block self-start bg-[var(--ink-primary)] text-[var(--paper-base)] px-3 py-1 font-bold tracking-widest text-xs">
            {data.significance}
          </div>
        )}
        <div className="flex items-center gap-4 text-xs">
           <span className="opacity-50">RARITY</span>
           <span className="tracking-widest">{renderRarityBar(data.rarity)}</span>
           <span className="opacity-50">{data.rarity}/10</span>
        </div>
      </div>

      {/* Lore Pull-Quote */}
      {data.lore && (
        <div className="border-l-2 border-[var(--ink-primary)] pl-4 py-1 my-6">
          <p className="leading-relaxed opacity-90 italic">"{data.lore}"</p>
          {data.verdict && (
            <p className="mt-4 font-bold text-[var(--ink-primary)]">VERDICT: {data.verdict}</p>
          )}
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 text-xs border-y border-[var(--ink-faded)] py-4 my-6">
        {data.marketPeak && (
          <div>
            <div className="opacity-50 mb-1">MARKET PEAK</div>
            <div>{data.marketPeak}</div>
          </div>
        )}
        {data.origin && (
          <div>
            <div className="opacity-50 mb-1">ORIGIN</div>
            <div>{data.origin}</div>
          </div>
        )}
        {data.designerNote && (
          <div className="col-span-2 mt-2">
            <div className="opacity-50 mb-1">DESIGNER NOTE</div>
            <div className="opacity-80 leading-relaxed">{data.designerNote}</div>
          </div>
        )}
      </div>

      {/* Timeline */}
      {data.timeline && data.timeline.length > 0 && (
        <div className="py-2">
          <div className="text-[var(--ink-primary)] mb-4 tracking-widest text-xs">OBJECT TIMELINE</div>
          <div className="space-y-6 pl-2">
            {data.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-2 before:h-2 before:bg-[var(--ink-primary)] after:content-[''] after:absolute after:left-[3px] after:top-[14px] after:bottom-[-24px] after:w-[2px] after:bg-[var(--ink-faded)] last:after:hidden">
                <span className="font-bold mr-4">{item.year}</span>
                <span className="opacity-80 block mt-1 leading-snug">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Objects (Mini Cards) */}
      {data.relatedObjects && data.relatedObjects.length > 0 && (
        <div className="pt-6">
          <div className="text-[var(--ink-primary)] mb-4 tracking-widest text-xs">RELATED OBJECTS</div>
          <div className="flex flex-wrap gap-4">
            {data.relatedObjects.map(relId => {
               const relProduct = products.find(prod => prod.id === relId);
               if (!relProduct) return null;
               return (
                 <a key={relId} href={`/?highlight=${relId}`} className="group flex items-center gap-3 border border-[var(--ink-faded)] p-2 hover:border-[var(--ink-primary)] transition-colors pr-4 w-56">
                   <div className="w-12 h-12 bg-[var(--ink-ghost)] flex items-center justify-center shrink-0">
                     {relProduct.image ? (
                       <img src={relProduct.image} alt={relProduct.name} className="max-w-full max-h-full object-contain p-1" loading="lazy" />
                     ) : (
                       <span className="text-[8px] opacity-50">IMG</span>
                     )}
                   </div>
                   <div className="flex flex-col overflow-hidden text-xs">
                     <span className="truncate">{relProduct.name}</span>
                     <span className="opacity-50 truncate group-hover:text-[var(--ink-primary)] transition-colors mt-1">{relProduct.price} {relProduct.currency}</span>
                   </div>
                 </a>
               );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
