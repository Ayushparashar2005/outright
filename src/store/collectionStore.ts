import { atom, computed } from 'nanostores';

export type CollectionState =
  | 'OWNED'
  | 'WANTED'
  | 'PREVIOUSLY_OWNED'
  | 'SOLD'
  | 'TRADED'
  | 'SEEN'
  | 'RESEARCHED'
  | 'FAVORITE';

export interface CollectionEntry {
  productId: string;
  states: CollectionState[];
  addedAt: number;
  notes?: string;
}

export const collection = atom<CollectionEntry[]>([]);

if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('outright-collection');
  if (stored) {
    try {
      collection.set(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse collection', e);
    }
  }

  collection.subscribe((list) => {
    localStorage.setItem('outright-collection', JSON.stringify(list));
  });
}

// Actions
export const toggleCollectionState = (productId: string, state: CollectionState) => {
  const current = collection.get();
  const index = current.findIndex(entry => entry.productId === productId);

  if (index >= 0) {
    const entry = current[index];
    const stateIndex = entry.states.indexOf(state);
    
    let newStates = [...entry.states];
    if (stateIndex >= 0) {
      // Remove state
      newStates.splice(stateIndex, 1);
    } else {
      // Add state
      newStates.push(state);
    }

    if (newStates.length === 0) {
      // Remove entirely if no states left
      collection.set(current.filter(e => e.productId !== productId));
    } else {
      // Update states
      const newCollection = [...current];
      newCollection[index] = { ...entry, states: newStates };
      collection.set(newCollection);
    }
  } else {
    // Add new entry
    collection.set([
      ...current,
      {
        productId,
        states: [state],
        addedAt: Date.now()
      }
    ]);
  }
};

export const hasCollectionState = (productId: string, state: CollectionState) => {
  const current = collection.get();
  const entry = current.find(e => e.productId === productId);
  return entry ? entry.states.includes(state) : false;
};

// Computed
export const ownedCount = computed(collection, (entries) => 
  entries.filter(e => e.states.includes('OWNED')).length
);

export const wantedCount = computed(collection, (entries) => 
  entries.filter(e => e.states.includes('WANTED')).length
);

export const archiveCount = computed(collection, (entries) => 
  entries.length
);

export const previouslyOwnedCount = computed(collection, (entries) => 
  entries.filter(e => e.states.includes('PREVIOUSLY_OWNED')).length
);
