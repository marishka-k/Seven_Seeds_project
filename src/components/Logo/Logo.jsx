import { asset } from '../../utils/asset';
import { cx } from '../../utils/cx';
import styles from './Logo.module.css';

// Логотип «seven seeds» — ссылка на начало страницы
export default function Logo({ onClick, className }) {
  return (
    <a className={cx(styles.logo, className)} href="#top" aria-label="Seven Seeds — на главную" onClick={onClick}>
      <img className={styles.logo__image} src={asset('images/logo-long.svg')} alt="" width="200" height="240" />
    </a>
  );
}
