import { event } from '../../data/event';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import styles from './Final.module.css';

// Финальный блок «Ждём вас на мастер-классе» с датой, адресом и ценой
export default function Final({ onRegister }) {
  return (
    <section id="registration" className={styles.final} aria-labelledby="final-title">
      <Backdrop name="final" className={styles.final__bg} />

      <div className={styles.final__content}>
        <h2 id="final-title" className={styles.final__title}>
          {event.finalTitle[0]}
          <br className={styles.final__break} /> {event.finalTitle[1]}
        </h2>
        <p className={styles.final__info}>
          <span className={styles.final__accent}>{event.finalDate}</span>
          <span className={styles.final__accent}>{event.address}</span>
          <span>{event.price}</span>
        </p>
        <Button className={styles.final__button} onClick={onRegister}>
          Зарегистрироваться
        </Button>
      </div>
    </section>
  );
}
