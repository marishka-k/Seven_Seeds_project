import { cx } from '../../utils/cx';
import styles from './Dots.module.css';

// Точки слайдера (видны только на узкой мобильной версии)
export default function Dots({ count, active, onSelect, label }) {
  return (
    <div className={styles.dots} role="group" aria-label={label}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={cx(styles.dots__dot, i === active && styles.dots__dot_active)}
          aria-label={`Карточка ${i + 1} из ${count}`}
          aria-current={i === active ? 'true' : undefined}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}
