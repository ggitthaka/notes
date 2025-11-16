import { useEffect, useState } from 'react';

type Icon = 'light' | 'dark';

export default function useIcon() {
  const [icon, setIcon] = useState<Icon>();

  const getIconForTheme = (theme: string | null) => {
    switch (theme) {
      case 'light':
        return 'dark';
      case 'dark':
        return 'light';
      case 'system': {
        const mode = localStorage.getItem('mode');
        return mode === 'light' ? 'dark' : 'light';
      }
      default:
        return undefined;
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const theme = document.querySelector('html')?.getAttribute('data-theme');
    const newIcon = getIconForTheme(theme ?? null);

    if (newIcon) {
      queueMicrotask(() => setIcon(newIcon));
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const targetNode = document.querySelector('html');
    if (!targetNode) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes') {
          const theme = document
            .querySelector('html')
            ?.getAttribute('data-theme');
          const newIcon = getIconForTheme(theme ?? null);
          if (newIcon) setIcon(newIcon);
        }
      }
    });

    observer.observe(targetNode, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return { icon, setIcon };
}
