import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button 
        onClick={() => setIsOpen(true)}
        className="text-mono ml-6 hover:opacity-50 transition-opacity focus:outline-none"
      >
        [ MENU ]
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[var(--paper-base)] z-[60] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[var(--rule-color)] h-[40px]">
                <a href="/" className="text-mono hover:opacity-50 transition-opacity">
                  OUTRIGHT / SYSTEM
                </a>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-mono hover:opacity-50 transition-opacity focus:outline-none"
                >
                  [ CLOSE ]
                </button>
              </div>

              <div className="flex-1 flex flex-col p-6 text-h2 uppercase space-y-8 mt-12">
                <a href="/" className="hover:opacity-50 transition-opacity border-b border-[var(--ink-faded)] pb-2 block w-max">INDEX</a>
                <a href="/archive" className="hover:opacity-50 transition-opacity border-b border-[var(--ink-faded)] pb-2 block w-max">ARCHIVE</a>
                <a href="/orders" className="hover:opacity-50 transition-opacity border-b border-[var(--ink-faded)] pb-2 block w-max">ORDERS</a>
                <a href="/collection" className="hover:opacity-50 transition-opacity border-b border-[var(--ink-faded)] pb-2 block w-max">COLLECTION</a>
                <a href="/about" className="hover:opacity-50 transition-opacity border-b border-[var(--ink-faded)] pb-2 block w-max">ABOUT</a>
                <a href="/profile" className="hover:opacity-50 transition-opacity border-b border-[var(--ink-faded)] pb-2 block w-max">PROFILE</a>
              </div>
              
              <div className="p-6 text-mono text-sm text-[var(--ink-faded)]">
                OUTRIGHT / SYSTEM 0.0.1<br/>
                DIGITAL BRUTALISM
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
