import React, { useState } from 'react';
import { filters, type FilterState, defaultFilterState } from '../data/filters';
import { addSystemMessage } from '../store/cartStore';

export default function FilterPanel() {
  const [activeFilters, setActiveFilters] = useState<FilterState>(defaultFilterState);

  const toggleFilter = (type: keyof FilterState, value: string | number | [number, number]) => {
    setActiveFilters(prev => {
      let newState = { ...prev };
      
      if (type === 'price') {
        newState.price = value as [number, number];
      } else {
        const current = prev[type] as any[];
        const isSelected = current.includes(value);
        
        const updated = isSelected 
          ? current.filter(v => v !== value)
          : [...current, value];
          
        newState = { ...prev, [type]: updated };
      }
      
      // Dispatch event so SpatialCatalog can react
      document.dispatchEvent(new CustomEvent('filters-changed', { detail: newState }));
      addSystemMessage('SYSTEM / FILTER UPDATED');
      
      return newState;
    });
  };

  const activeCount = Object.entries(activeFilters).reduce((acc, [key, value]) => {
    if (key === 'price') {
      return acc + (value[0] !== defaultFilterState.price[0] || value[1] !== defaultFilterState.price[1] ? 1 : 0);
    }
    return acc + (value as any[]).length;
  }, 0);

  return (
    <div className="fixed left-0 top-[40px] pt-8 pl-6 pr-6 z-30 w-[200px] hidden md:flex md:flex-col bg-[var(--paper-base)] border-r border-[var(--rule-color)]" style={{ height: 'calc(100vh - 40px)' }}>
      <div className="flex-shrink-0">
        <div className="text-mono-sm tracking-system mb-1 text-[var(--ink-secondary)]">
          SYSTEM / FILTER {activeCount > 0 && <span className="text-[var(--accent-copper)] ml-1">[{activeCount}]</span>}
        </div>
        <div className="receipt-rule mb-4" />
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {/* Categories */}
        <div className="mb-4">
          <div className="text-mono text-xs mb-1 text-[var(--ink-secondary)]">CATEGORY</div>
          <div className="space-y-0.5">
            {filters.categories.map(c => {
              const isSelected = activeFilters.category.includes(c);
              return (
                <button
                  key={c}
                  onClick={() => toggleFilter('category', c)}
                  className={`w-full text-left text-mono text-xs flex items-start hover:text-[var(--accent-copper)] transition-colors ${isSelected ? 'text-[var(--accent-copper)]' : ''}`}
                >
                  <span className="w-6 shrink-0 inline-block">{isSelected ? '[×]' : '[ ]'}</span>
                  <span className={isSelected ? 'underline underline-offset-2' : ''}>{c}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Brands */}
      <div className="mb-4">
        <div className="text-mono text-xs mb-1 text-[var(--ink-secondary)]">BRAND</div>
        <div className="space-y-0.5">
          {filters.brands.map(b => {
            const isSelected = activeFilters.brand.includes(b);
            return (
              <button
                key={b}
                onClick={() => toggleFilter('brand', b)}
                className={`w-full text-left text-mono text-xs flex items-start hover:text-[var(--accent-copper)] transition-colors ${isSelected ? 'text-[var(--accent-copper)]' : ''}`}
              >
                <span className="w-6 shrink-0 inline-block">{isSelected ? '[×]' : '[ ]'}</span>
                <span className={isSelected ? 'underline underline-offset-2' : ''}>{b}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Colors */}
      <div className="mb-4">
        <div className="text-mono text-xs mb-1 text-[var(--ink-secondary)]">COLOR</div>
        <div className="space-y-0.5">
          {filters.colors.map(col => {
            const isSelected = activeFilters.color.includes(col);
            return (
              <button
                key={col}
                onClick={() => toggleFilter('color', col)}
                className={`w-full text-left text-mono text-xs flex items-start hover:text-[var(--accent-copper)] transition-colors ${isSelected ? 'text-[var(--accent-copper)]' : ''}`}
              >
                <span className="w-6 shrink-0 inline-block">{isSelected ? '[×]' : '[ ]'}</span>
                <span className={isSelected ? 'underline underline-offset-2' : ''}>{col}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-4">
        <div className="text-mono text-xs mb-1 text-[var(--ink-secondary)]">SIZE</div>
        <div className="flex flex-wrap gap-1">
          {filters.sizes.map(size => {
            const isSelected = activeFilters.size.includes(size);
            return (
              <button
                key={size}
                onClick={() => toggleFilter('size', size)}
                className={`w-6 h-6 text-mono text-xs border flex items-center justify-center transition-colors
                  ${isSelected ? 'bg-[var(--accent-copper)] text-[var(--paper-base)] border-[var(--accent-copper)]' : 'border-transparent hover:border-[var(--accent-copper-faded)] hover:text-[var(--accent-copper)]'}`}
              >
                {size.toString().padStart(2, '0')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <div className="text-mono text-xs mb-1 text-[var(--ink-secondary)]">PRICE (MAX)</div>
        <div className="flex items-center gap-2 text-mono text-xs">
          <span>₹{activeFilters.price[0]}</span>
          <input 
            type="range" 
            min={filters.priceRange.min} 
            max={filters.priceRange.max} 
            step="1000"
            value={activeFilters.price[1]} 
            onChange={(e) => toggleFilter('price', [activeFilters.price[0], parseInt(e.target.value)])}
            className="flex-1 accent-[var(--accent-copper)]"
          />
          <span>₹{activeFilters.price[1]}</span>
        </div>
      </div>
      
      <div className="receipt-rule mt-6 mb-2" />
      {activeCount > 0 && (
        <button 
          onClick={() => {
            setActiveFilters(defaultFilterState);
            document.dispatchEvent(new CustomEvent('filters-changed', { detail: defaultFilterState }));
            addSystemMessage('SYSTEM / FILTER CLEARED');
          }}
          className="text-mono text-xs hover:text-[var(--accent-copper)] transition-colors"
        >
          [ CLEAR FILTERS ]
        </button>
      )}
      </div>
    </div>
  );
}
