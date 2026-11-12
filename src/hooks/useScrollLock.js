import { useEffect } from 'react';

// Блокирует прокрутку страницы, пока открыто меню или модалка
export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    document.body.classList.add('scroll-locked');
    return () => document.body.classList.remove('scroll-locked');
  }, [locked]);
}

// Вызывает onEscape по нажатию Escape, пока active
export function useEscape(active, onEscape) {
  useEffect(() => {
    if (!active) return undefined;
    const handler = (event) => {
      if (event.key === 'Escape') onEscape();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [active, onEscape]);
}
