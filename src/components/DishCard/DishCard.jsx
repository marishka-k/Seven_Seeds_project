import { asset } from '../../utils/asset';
import styles from './DishCard.module.css';

// Карточка блюда: фото и подпись в оранжевой рамке
export default function DishCard({ dish }) {
  return (
    <article className={styles.dish}>
      <img
        className={styles.dish__photo}
        src={asset(dish.image)}
        alt={dish.text.join(' ')}
        width="665"
        height="598"
        loading="lazy"
        decoding="async"
      />
      <p className={styles.dish__text}>
        {dish.text.map((line) => (
          <span key={line} className={styles.dish__line}>
            {line}
          </span>
        ))}
      </p>
    </article>
  );
}
