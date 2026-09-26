import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { cartCount } from '../store/cartStore';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';
import SoundControl from './SoundControl';
import { themeStore, toggleTheme } from '../store/themeStore';
import { toggleSearch } from '../store/searchStore';

export default function SystemNavigation() {
  const $cartCount = useStore(cartCount);
  const $theme = useStore(themeStore);
  const [isHighlightActive, setIsHighlightActive] = useState(false);

  useEffect(() => {
    const handleHighlight = (e: any) => {
      setIsHighlightActive(e.detail);
    };
    document.addEventListener('highlight-changed', handleHighlight);
    return () => document.removeEventListener('highlight-changed', handleHighlight);
  }, []);

  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 w-full h-[40px] z-50 flex items-center justify-between px-6 border-b border-[var(--rule-color)] bg-[var(--paper-base)]"
      style={{ mixBlendMode: 'var(--blend-mode)' as any }}
    >
      
      {/* Logo area */}
      <div className="flex-1">
        <a href="/" className="text-mono hover:opacity-50 transition-opacity">
          OUTRIGHT / SYSTEM
        </a>
      </div>

      {/* Nav Links - Desktop */}
      <div className="hidden md:flex flex-1 justify-center space-x-12 items-center">
        <a href="/" className={`text-mono hover:opacity-50 transition-opacity ${currentPath === '/' ? 'border-b border-[var(--rule-color)]' : ''}`}>INDEX</a>
        <a href="/archive" className={`text-mono hover:opacity-50 transition-opacity ${currentPath === '/archive' ? 'border-b border-[var(--rule-color)]' : ''}`}>ARCHIVE</a>
        <a href="/orders" className={`text-mono hover:opacity-50 transition-opacity ${currentPath === '/orders' ? 'border-b border-[var(--rule-color)]' : ''}`}>ORDERS</a>
        <a href="/collection" className={`text-mono hover:opacity-50 transition-opacity ${currentPath === '/collection' ? 'border-b border-[var(--rule-color)]' : ''}`}>COLLECTION</a>
        <a href="/about" className={`text-mono hover:opacity-50 transition-opacity ${currentPath === '/about' ? 'border-b border-[var(--rule-color)]' : ''}`}>ABOUT</a>
        <a href="/profile" className={`text-mono hover:opacity-50 transition-opacity ${currentPath === '/profile' ? 'border-b border-[var(--rule-color)]' : ''}`}>PROFILE</a>
        
        <button onClick={toggleSearch} className="text-mono hover:opacity-50 transition-opacity whitespace-nowrap" aria-label="Open Search">
          [ / SEARCH ]
        </button>
        
        {isHighlightActive && (
          <button 
            onClick={() => document.dispatchEvent(new CustomEvent('clear-highlight'))}
            className="text-mono hover:opacity-50 transition-opacity text-[var(--accent-copper)] whitespace-nowrap"
          >
            [ CLEAR HIGHLIGHT ]
          </button>
        )}
        
        <button 
          onClick={toggleTheme}
          className="text-mono hover:opacity-50 transition-opacity ml-12 whitespace-nowrap"
          aria-label="Toggle Theme"
        >
          [ {$theme.toUpperCase()} ]
        </button>
        <div className="ml-4">
          <SoundControl />
        </div>
      </div>

      {/* Cart & Mobile Menu */}
      <div className="flex-1 flex justify-end">
        <button 
          className="text-mono flex items-center hover:opacity-50 transition-opacity focus:outline-none"
          onClick={() => {
            // Event dispatched to open cart
            document.dispatchEvent(new CustomEvent('open-cart'));
          }}
        >
          CART [
          <motion.span
            key={$cartCount}
            initial={{ scale: 1.5, color: 'var(--accent-copper)' }}
            animate={{ scale: 1, color: 'inherit' }}
            transition={{ duration: 0.4 }}
            className="inline-block min-w-[2ch] text-center"
          >
            {$cartCount.toString().padStart(2, '0')}
          </motion.span>
          ]
        </button>
        <MobileNav />
      </div>

    </nav>
  );
}
