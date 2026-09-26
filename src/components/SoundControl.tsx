import React, { useState, useEffect } from 'react';
import { isSoundEnabled, setSoundEnabled } from '../utils/sound';

export default function SoundControl() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(isSoundEnabled());
  }, []);

  const toggleSound = () => {
    const newState = !enabled;
    setEnabled(newState);
    setSoundEnabled(newState);
  };

  return (
    <button 
      onClick={toggleSound}
      className={`text-mono whitespace-nowrap hover:opacity-50 transition-opacity ${enabled ? 'text-[var(--accent-copper)]' : 'text-[var(--ink-faded)]'}`}
      aria-label={enabled ? 'Disable Sound' : 'Enable Sound'}
    >
      [ SOUND: {enabled ? 'ON' : 'OFF'} ]
    </button>
  );
}
