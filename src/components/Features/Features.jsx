import { useRef, useState } from 'react';
import { event } from '../../data/event';
import { features } from '../../data/features';
import { useSlider } from '../../hooks/useSlider';
import Dots from '../Dots/Dots';
import FeatureCard from '../FeatureCard/FeatureCard';
import Note from '../Note/Note';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Features.module.css';

// «Что интересного ?»: четыре карточки и плашка про рецепты
export default function Features() {
  const trackRef = useRef(null);
  const { index, goTo } = useSlider(trackRef);
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="features" className={styles.features} aria-labelledby="features-title">
      <SectionTitle id="features-title">Что интересного ?</SectionTitle>
      <ul ref={trackRef} className={styles.features__list}>
        {features.map((feature) => (
          <li key={feature.id} className={styles.features__item}>
            <FeatureCard
              feature={feature}
              expanded={expandedId === feature.id}
              onToggle={() => setExpandedId((id) => (id === feature.id ? null : feature.id))}
            />
          </li>
        ))}
      </ul>
      <Dots count={features.length} active={index} onSelect={goTo} label="Карточки «Что интересного»" />
      <Note>{event.note}</Note>
    </section>
  );
}
