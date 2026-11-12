import styles from './Note.module.css';

// Бежевая плашка под карточками
export default function Note({ children }) {
  return (
    <p className={styles.note}>
      <span className={styles.note__text}>{children}</span>
    </p>
  );
}
