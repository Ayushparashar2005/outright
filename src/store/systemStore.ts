import { atom } from 'nanostores';

export const cameraPosition = atom({ x: 0, y: 0, z: 25 });
export const currentFps = atom(60);
export const sessionStartTime = atom(Date.now());
export const memoryUsage = atom(0); // in MB

// Optional: listen to custom events from R3F canvas
if (typeof document !== 'undefined') {
  document.addEventListener('camera-update', ((e: CustomEvent) => {
    cameraPosition.set(e.detail);
  }) as EventListener);
  
  document.addEventListener('fps-update', ((e: CustomEvent) => {
    currentFps.set(e.detail);
  }) as EventListener);
}

// Memory loop
if (typeof window !== 'undefined') {
  setInterval(() => {
    // @ts-ignore - performance.memory is Chrome specific but useful if available
    if (performance && (performance as any).memory) {
      memoryUsage.set(Math.round((performance as any).memory.usedJSHeapSize / (1024 * 1024)));
    }
  }, 2000);
}
