import { useCallback, useEffect, useState } from 'react';

// Слайдер на нативной прокрутке: номер текущей карточки и переход к карточке по точке
export function useSlider(trackRef) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const update = () => {
      const first = track.children[0];
      if (!first) return;
      const step = first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
      const max = track.scrollWidth - track.clientWidth;
      // у правого края — последняя карточка
      const i = track.scrollLeft >= max - 2 ? track.children.length - 1 : Math.round(track.scrollLeft / step);
      setIndex(i);
    };
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [trackRef]);

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current;
      const card = track?.children[i];
      if (!card) return;
      setIndex(i);
      track.scrollTo({ left: card.offsetLeft - track.firstElementChild.offsetLeft, behavior: 'smooth' });
    },
    [trackRef],
  );

  return { index, goTo };
}
