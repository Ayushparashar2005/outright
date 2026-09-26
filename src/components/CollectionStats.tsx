import React from 'react';
import { useStore } from '@nanostores/react';
import { ownedCount, wantedCount, archiveCount, previouslyOwnedCount } from '../store/collectionStore';

export default function CollectionStats() {
  const $owned = useStore(ownedCount);
  const $wanted = useStore(wantedCount);
  const $archive = useStore(archiveCount);
  const $prev = useStore(previouslyOwnedCount);

  return (
    <div className="border border-[var(--ink-primary)] p-4 text-mono flex flex-col md:flex-row gap-8 bg-[var(--paper-base)]">
      <div className="flex-1">
        <div className="text-xs text-[var(--ink-faded)] mb-1">CURRENT COLLECTION</div>
        <div className="text-2xl">{$owned.toString().padStart(2, '0')} <span className="text-sm">OBJECTS</span></div>
      </div>
      <div className="w-[1px] bg-[var(--rule-color)] opacity-20 hidden md:block" />
      <div className="flex-1">
        <div className="text-xs text-[var(--ink-faded)] mb-1">ARCHIVE</div>
        <div className="text-2xl">{$archive.toString().padStart(2, '0')} <span className="text-sm">OBJECTS</span></div>
      </div>
      <div className="w-[1px] bg-[var(--rule-color)] opacity-20 hidden md:block" />
      <div className="flex-1">
        <div className="text-xs text-[var(--ink-faded)] mb-1">WISHLIST</div>
        <div className="text-2xl">{$wanted.toString().padStart(2, '0')} <span className="text-sm">OBJECTS</span></div>
      </div>
      <div className="w-[1px] bg-[var(--rule-color)] opacity-20 hidden md:block" />
      <div className="flex-1">
        <div className="text-xs text-[var(--ink-faded)] mb-1">PREVIOUSLY OWNED</div>
        <div className="text-2xl">{$prev.toString().padStart(2, '0')} <span className="text-sm">OBJECTS</span></div>
      </div>
    </div>
  );
}
