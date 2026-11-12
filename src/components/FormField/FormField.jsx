import { forwardRef } from 'react';
import { cx } from '../../utils/cx';
import styles from './FormField.module.css';

// Поле формы с видимой подписью и текстом ошибки под ним
const FormField = forwardRef(function FormField({ name, label, error, ...rest }, ref) {
  const errorId = `${name}-error`;

  return (
    <div className={styles.field}>
      <label className={styles.field__label} htmlFor={name}>
        {label}
      </label>
      <input
        ref={ref}
        id={name}
        name={name}
        className={cx(styles.field__input, error && styles.field__input_invalid)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p id={errorId} className={styles.field__error}>
          {error}
        </p>
      )}
    </div>
  );
});

export default FormField;
