import { asset } from '../../utils/asset';
import styles from './FactCard.module.css';

// Факт о ведущей: иконка и текст в оранжевой рамке
export default function FactCard({ fact }) {
  return (
    <div className={styles.fact}>
      <img className={styles.fact__icon} src={asset(fact.icon)} alt="" width="40" height="40" />
      <p className={styles.fact__text}>{fact.text}</p>
    </div>
  );
}
