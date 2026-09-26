import React, { useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isSearchOpen, searchQuery, closeSearch, toggleSearch } from '../store/searchStore';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import { playTypewriterClick, playHoverSound } from '../utils/sound';

export default function SearchModal() {
  const isOpen = useStore(isSearchOpen);
  const query = useStore(searchQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on / or Cmd+K
      if ((e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT') || 
          (e.key === 'k' && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        toggleSearch();
      }
      
      // Close on Escape
      if (e.key === 'Escape' && isOpen) {
        closeSearch();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to allow animation to start before focus
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchQuery.set(e.target.value);
    playTypewriterClick();
  };

  const selectProduct = (id: string) => {
    closeSearch();
    // Use the existing highlight mechanic which centers the camera and opens it
    // Wait for modal to close first
    setTimeout(() => {
      window.location.href = `/?highlight=${id}`;
    }, 200);
  };

  // Filter logic
  const normalizedQuery = query.toLowerCase().trim();
  const results = normalizedQuery === '' ? [] : products.filter(p => 
    p.name.toLowerCase().includes(normalizedQuery) ||
    p.model.toLowerCase().includes(normalizedQuery) ||
    p.sku.toLowerCase().includes(normalizedQuery) ||
    p.color.toLowerCase().includes(normalizedQuery) ||
    p.material.toLowerCase().includes(normalizedQuery) ||
    p.category.toLowerCase().includes(normalizedQuery)
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[var(--paper-base)] flex flex-col p-6 md:p-12 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-mono-sm tracking-system text-[var(--ink-faded)]">SYSTEM / SEARCH</div>
            <button onClick={closeSearch} className="text-mono hover:opacity-50" aria-label="Close Search">[ ESC ]</button>
          </div>
          
          <div className="receipt-rule mb-8" />
          
          {/* Input Area */}
          <div className="flex items-center text-h2 mb-12">
            <span className="mr-4 text-[var(--accent-copper)]">QUERY &gt;</span>
            <input 
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInput}
              placeholder="_"
              className="flex-1 bg-transparent outline-none uppercase placeholder:text-[var(--ink-faded)]"
              spellCheck="false"
            />
          </div>
          
          {/* Results */}
          <div className="flex-1 max-w-4xl mx-auto w-full">
            {query.length > 0 && (
              <div className="text-mono text-[var(--ink-faded)] mb-6">
                FOUND {results.length.toString().padStart(2, '0')} MATCHES
              </div>
            )}
            
            <div className="space-y-4">
              {results.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => selectProduct(p.id)}
                  onMouseEnter={() => playHoverSound()}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-[var(--ink-primary)] hover:bg-[var(--ink-primary)] hover:text-[var(--paper-base)] cursor-pointer group transition-colors"
                >
                  <div className="flex items-center gap-6 mb-2 md:mb-0">
                    <span className="text-mono opacity-50">{p.id}</span>
                    <span className="text-lg font-bold uppercase">{p.model}</span>
                    <span className="text-mono text-sm hidden md:inline-block">{p.name} / {p.color}</span>
                  </div>
                  <div className="flex items-center gap-6 text-mono text-sm w-full md:w-auto justify-between md:justify-end">
                    <span className="md:hidden truncate flex-1">{p.name}</span>
                    <span>{p.currency} {p.price.toLocaleString()}</span>
                    <span className="opacity-0 group-hover:opacity-100 hidden md:inline-block">→</span>
                  </div>
                </motion.div>
              ))}
              
              {query.length > 0 && results.length === 0 && (
                <div className="text-center text-mono py-12 border border-dashed border-[var(--ink-faded)] text-[var(--ink-faded)]">
                  NO MATCHING RECORDS IN INDEX
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
