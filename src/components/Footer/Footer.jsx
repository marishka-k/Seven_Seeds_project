import styles from './Footer.module.css';

// Подвал: пометка об учебном проекте
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>Учебный проект. Мастер-класс вымышленный, регистрация не отправляется</p>
    </footer>
  );
}
