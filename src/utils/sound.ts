// Procedural audio engine for Outright

let audioCtx: AudioContext | null = null;
let soundEnabled = false;

// Initialize sound state from localStorage
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('outright-sound');
  soundEnabled = stored === 'true';
}

export const isSoundEnabled = () => soundEnabled;

export const setSoundEnabled = (enabled: boolean) => {
  soundEnabled = enabled;
  if (typeof window !== 'undefined') {
    localStorage.setItem('outright-sound', String(enabled));
  }
};

const getAudioContext = () => {
  if (!soundEnabled) return null;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

// Generic beep generator
const beep = (freq: number, type: OscillatorType, duration: number, vol = 0.1) => {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);

  gain.gain.setValueAtTime(vol, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + duration);
};

// Noise generator (for receipt/printer sounds)
const noise = (duration: number, vol = 0.05) => {
  const ctx = getAudioContext();
  if (!ctx) return;

  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noiseSource = ctx.createBufferSource();
  noiseSource.buffer = buffer;

  // Bandpass filter for that mechanical clicky sound
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 1000;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(vol, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

  noiseSource.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noiseSource.start();
};

export const playPrintSound = () => {
  if (!soundEnabled) return;
  // Sequence of quick mechanical clicks
  noise(0.05, 0.1);
  setTimeout(() => noise(0.05, 0.1), 100);
  setTimeout(() => noise(0.1, 0.15), 250);
  setTimeout(() => noise(0.05, 0.1), 450);
};

export const playTypewriterClick = () => {
  if (!soundEnabled) return;
  beep(800, 'square', 0.05, 0.05);
};

export const playSuccessChaChing = () => {
  if (!soundEnabled) return;
  beep(1200, 'sine', 0.1, 0.1);
  setTimeout(() => beep(1600, 'sine', 0.3, 0.15), 100);
};

export const playErrorBuzz = () => {
  if (!soundEnabled) return;
  beep(150, 'sawtooth', 0.3, 0.2);
};

export const playHoverSound = () => {
    if (!soundEnabled) return;
    beep(400, 'sine', 0.05, 0.02);
};
