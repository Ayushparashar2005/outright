import React, { useEffect } from 'react';
import { addSystemMessage } from '../store/cartStore';

export default function BootSequence() {
  useEffect(() => {
    // Only run once per session
    const hasBooted = sessionStorage.getItem('outright-booted');
    if (hasBooted) {
      return;
    }
    
    sessionStorage.setItem('outright-booted', 'true');
    
    const messages = [
      'SYSTEM INITIALIZING...',
      'LOADING INVENTORY DATA...',
      'INDEXING PRODUCTS...',
      'MOUNTING SPATIAL CATALOG...',
      'SYSTEM READY.'
    ];
    
    messages.forEach((msg, index) => {
      setTimeout(() => {
        addSystemMessage(msg);
      }, index * 800 + 500);
    });
  }, []);

  return null;
}
