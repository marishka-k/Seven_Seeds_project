import { cx } from '../../utils/cx';
import styles from './Button.module.css';

// Оранжевая кнопка из макета
export default function Button({ children, className, type = 'button', ...rest }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={cx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
}
