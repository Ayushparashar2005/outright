import { atom } from 'nanostores';
import type { CollectionState } from './collectionStore';

export interface ActivityEntry {
  type: 'ADDED' | 'REMOVED' | 'STATE_CHANGED' | 'NOTED';
  productId: string;
  state?: CollectionState;
  timestamp: number;
}

export const activityLog = atom<ActivityEntry[]>([]);

if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('outright-activity');
  if (stored) {
    try {
      activityLog.set(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse activity log', e);
    }
  }

  activityLog.subscribe((log) => {
    localStorage.setItem('outright-activity', JSON.stringify(log));
  });
}

export const logActivity = (type: ActivityEntry['type'], productId: string, state?: CollectionState) => {
  const current = activityLog.get();
  // Keep last 50 entries
  const updated = [
    { type, productId, state, timestamp: Date.now() },
    ...current
  ].slice(0, 50);
  
  activityLog.set(updated);
};
