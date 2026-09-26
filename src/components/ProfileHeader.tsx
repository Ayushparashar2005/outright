import React from 'react';
import { useStore } from '@nanostores/react';
import { userProfile } from '../store/profileStore';

export default function ProfileHeader() {
  const $profile = useStore(userProfile);

  return (
    <div>
      <div className="text-mono-sm tracking-system mb-4">OUTRIGHT / PROFILE</div>
      <div className="border border-[var(--ink-primary)] p-6 bg-[var(--paper-base)]">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 bg-[var(--ink-primary)] flex items-center justify-center text-[var(--paper-base)] text-3xl font-bold font-mono uppercase">
            {$profile?.username.substring(0, 1) || '?'}
          </div>
          <div>
            <h1 className="text-h2 uppercase mb-1">{$profile?.displayName || 'GUEST'}</h1>
            <div className="text-mono text-[var(--ink-faded)]">@{$profile?.username || 'guest'}</div>
          </div>
        </div>
        <p className="text-mono text-sm leading-relaxed mb-6 text-[var(--ink-secondary)]">
          {$profile?.bio || 'Connecting...'}
        </p>
        
        <div className="receipt-rule mb-6"></div>
        
        <div className="text-mono text-xs mb-2">SPECIALTIES</div>
        <div className="flex flex-wrap gap-2 text-mono text-xs">
          {$profile?.specialties && $profile.specialties.length > 0 ? (
            $profile.specialties.map((spec, i) => (
              <span key={i} className="border border-dashed border-[var(--ink-faded)] text-[var(--ink-faded)] px-2 py-0.5">
                {spec}
              </span>
            ))
          ) : (
            <span className="text-[var(--ink-faded)]">NO SPECIALTIES LOGGED</span>
          )}
        </div>
      </div>
    </div>
  );
}
