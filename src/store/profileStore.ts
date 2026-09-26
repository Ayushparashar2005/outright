import { atom } from 'nanostores';

export interface UserProfile {
  username: string;
  displayName: string;
  bio: string;
  specialties: string[];
  joinedAt: number;
  avatarSeed: string; // drives a deterministic avatar
}

export const userProfile = atom<UserProfile | null>(null);

if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('outright-profile');
  if (stored) {
    try {
      userProfile.set(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse profile', e);
    }
  }

  userProfile.subscribe((profile) => {
    if (profile) {
      localStorage.setItem('outright-profile', JSON.stringify(profile));
    } else {
      localStorage.removeItem('outright-profile');
    }
  });
}
