import { event } from '../../data/event';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import styles from './Hero.module.css';

// Первый экран: заголовок, дата, описание и кнопка регистрации
export default function Hero({ onRegister }) {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <Backdrop name="hero" className={styles.hero__bg} />

      <div className={styles.hero__content}>
        <h1 id="hero-title" className={styles.hero__title}>
          {event.title[0]}
          <br />
          {event.title[1]}
        </h1>
        <p className={styles.hero__date}>{event.date}</p>
        <p className={styles.hero__lead}>
          {event.lead.map((line) => (
            <span key={line} className={styles.hero__line}>
              {line}
            </span>
          ))}
        </p>
        <Button className={styles.hero__button} onClick={onRegister}>
          Зарегистрироваться
        </Button>
      </div>
    </section>
  );
}
