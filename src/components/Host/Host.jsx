import { host } from '../../data/host';
import { asset } from '../../utils/asset';
import FactCard from '../FactCard/FactCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Host.module.css';

// «Ведущая мастер-класса»: фото (с 1024 px), имя и четыре факта
export default function Host() {
  return (
    <section id="host" className={styles.host} aria-labelledby="host-title">
      <img
        className={styles.host__photo}
        src={asset(host.photo)}
        alt={`${host.name} на кухне`}
        width="784"
        height="796"
        loading="lazy"
        decoding="async"
      />
      <div className={styles.host__content}>
        <SectionTitle id="host-title" align="left">
          Ведущая мастер-класса
        </SectionTitle>
        <p className={styles.host__name}>{host.name}</p>
        <ul className={styles.host__facts}>
          {host.facts.map((fact) => (
            <li key={fact.id}>
              <FactCard fact={fact} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
