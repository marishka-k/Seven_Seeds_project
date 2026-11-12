import { cx } from '../../utils/cx';
import styles from './SectionTitle.module.css';

// Заголовок раздела (h2), по умолчанию по центру
export default function SectionTitle({ id, children, align = 'center', className }) {
  return (
    <h2 id={id} className={cx(styles.title, styles[`title_align_${align}`], className)}>
      {children}
    </h2>
  );
}
