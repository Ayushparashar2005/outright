import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { userProfile } from '../store/profileStore';
import { motion, AnimatePresence } from 'framer-motion';
import { logActivity } from '../store/activityStore';
import { playTypewriterClick } from '../utils/sound';

export default function ProfileSetupModal() {
  const $profile = useStore(userProfile);
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');

  // Check if profile exists on mount
  useEffect(() => {
    // We subscribe to the store which will fire immediately with current state
    const unsubscribe = userProfile.subscribe((profile) => {
      // If we've hydrated (or confirmed empty) and there's no profile, open modal
      if (profile === null) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
    
    return () => unsubscribe();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !displayName.trim()) return;

    userProfile.set({
      username: username.trim().toLowerCase().replace(/\s+/g, '_'),
      displayName: displayName.trim(),
      bio: "Collector and enthusiast.",
      specialties: [],
      joinedAt: Date.now(),
      avatarSeed: username.trim()
    });

    logActivity('NOTED', 'SYSTEM_INIT');
    setIsOpen(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    setter(e.target.value);
    playTypewriterClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[var(--paper-base)] border border-[var(--ink-primary)] p-8 max-w-md w-full shadow-[10px_10px_0_var(--ink-primary)]"
            style={{ mixBlendMode: 'normal' }}
          >
            <div className="text-mono-sm tracking-system mb-4">SYSTEM / IDENTIFICATION REQUIRED</div>
            <div className="receipt-rule mb-6" />
            
            <h2 className="text-h2 uppercase mb-4">Initialize Profile</h2>
            <p className="text-mono text-sm text-[var(--ink-faded)] mb-8">
              Welcome to the OUTRIGHT archive. To begin curating your collection, please establish your identity.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-mono text-xs mb-2">DISPLAY NAME</label>
                <input
                  type="text"
                  required
                  value={displayName}
                  onChange={e => handleInput(e, setDisplayName)}
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-[var(--ink-primary)] px-0 py-2 outline-none text-mono focus:border-[var(--accent-copper)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-mono text-xs mb-2">USERNAME</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={e => handleInput(e, setUsername)}
                  placeholder="johndoe"
                  className="w-full bg-transparent border-b border-[var(--ink-primary)] px-0 py-2 outline-none text-mono focus:border-[var(--accent-copper)] transition-colors"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full border border-[var(--ink-primary)] py-3 text-mono hover:bg-[var(--ink-primary)] hover:text-[var(--paper-base)] transition-colors"
                >
                  [ INITIALIZE ]
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
