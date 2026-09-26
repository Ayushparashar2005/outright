import { atom } from 'nanostores';

export type Theme = 'light' | 'dark';

export const themeStore = atom<Theme>('light');

if (typeof window !== 'undefined') {
  const storedTheme = localStorage.getItem('outright-theme') as Theme;
  if (storedTheme) {
    themeStore.set(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeStore.set('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeStore.subscribe((theme) => {
    localStorage.setItem('outright-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.dispatchEvent(new CustomEvent('theme-changed', { detail: theme }));
  });
}

export const toggleTheme = () => {
  themeStore.set(themeStore.get() === 'light' ? 'dark' : 'light');
};
