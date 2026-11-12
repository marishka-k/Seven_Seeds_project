import { asset } from '../../utils/asset';
import { cx } from '../../utils/cx';
import styles from './FeatureCard.module.css';

// Карточка «Что интересного ?». На лаптопе и десктопе текст обрезается многоточием,
// по наведению или клику карточка раскрывается поверх соседних блоков
export default function FeatureCard({ feature, expanded, onToggle }) {
  const textId = `feature-${feature.id}-text`;

  return (
    <article className={cx(styles.feature, expanded && styles.feature_expanded)}>
      <h3 className={styles.feature__head}>
        <img className={styles.feature__check} src={asset('images/icons/check.svg')} alt="" width="14" height="10" />
        <button
          type="button"
          className={styles.feature__toggle}
          aria-expanded={expanded}
          aria-controls={textId}
          onClick={onToggle}
        >
          {feature.title}
        </button>
      </h3>
      <p id={textId} className={styles.feature__text}>
        {feature.text}
      </p>
    </article>
  );
}
