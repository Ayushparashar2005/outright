import React from 'react';
import { useStore } from '@nanostores/react';
import { systemMessages } from '../store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { playTypewriterClick } from '../utils/sound';

export default function SystemMessage() {
  const $messages = useStore(systemMessages);

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col-reverse gap-2 pointer-events-none">
      <AnimatePresence>
        {$messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onAnimationStart={() => playTypewriterClick()}
            className="text-mono-sm text-[var(--accent-copper)] bg-[var(--paper-base)] px-2 py-1 border-l-2 border-[var(--accent-copper)]"
            style={{ 
              textShadow: '0 0 1px rgba(0,0,0,0.1)'
            }}
          >
            {msg.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
