import React from 'react';
import { useStore } from '@nanostores/react';
import { activityLog } from '../store/activityStore';
import { products } from '../data/products';

export default function ActivityLog() {
  const $log = useStore(activityLog);

  return (
    <div>
      <div className="text-mono text-xs mb-4">ACTIVITY LOG</div>
      <div className="border border-[var(--ink-primary)] p-4 bg-[var(--paper-base)] space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
        {$log.length === 0 ? (
          <div className="text-mono text-xs text-[var(--ink-faded)]">NO RECENT ACTIVITY</div>
        ) : (
          $log.slice(0, 20).map((entry, idx) => {
            const product = products.find(p => p.id === entry.productId);
            const name = product ? product.model : entry.productId;
            
            const action = entry.type === 'STATE_CHANGED' && entry.state
              ? `TOGGLED [${entry.state}]`
              : entry.type;

            const date = new Date(entry.timestamp).toLocaleDateString();

            return (
              <div key={idx} className="text-mono text-xs border-b border-dashed border-[var(--ink-faded)] pb-2 last:border-0">
                <div className="text-[var(--ink-faded)] mb-1">{date}</div>
                <div className="text-[var(--accent-copper)]">{action}</div>
                <div>{name}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
