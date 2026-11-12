import { forwardRef } from 'react';
import { asset } from '../../utils/asset';
import { cx } from '../../utils/cx';
import styles from './Checkbox.module.css';

// Чекбокс: нативный input скрыт, квадрат в оранжевой рамке с галочкой
const Checkbox = forwardRef(function Checkbox({ name, label, checked, error, onChange }, ref) {
  const errorId = `${name}-error`;

  return (
    <div className={styles.checkbox}>
      <label className={cx(styles.checkbox__label, error && styles.checkbox__label_invalid)}>
        <input
          ref={ref}
          className={cx('visually-hidden', styles.checkbox__input)}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
        <span className={styles.checkbox__box} aria-hidden="true">
          {checked && <img src={asset('images/icons/check.svg')} alt="" width="14" height="10" />}
        </span>
        <span>{label}</span>
      </label>
      {error && (
        <p id={errorId} className={styles.checkbox__error}>
          {error}
        </p>
      )}
    </div>
  );
});

export default Checkbox;
