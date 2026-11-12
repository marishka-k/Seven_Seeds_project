import { useRef } from 'react';
import { dishes } from '../../data/dishes';
import { useSlider } from '../../hooks/useSlider';
import DishCard from '../DishCard/DishCard';
import Dots from '../Dots/Dots';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Menu.module.css';

// «Меню»: три блюда. До 600 px — слайдер с точками, дальше сетка
export default function Menu() {
  const trackRef = useRef(null);
  const { index, goTo } = useSlider(trackRef);

  return (
    <section id="menu" className={styles.menu} aria-labelledby="menu-title">
      <SectionTitle id="menu-title">Меню</SectionTitle>
      <ul ref={trackRef} className={styles.menu__list}>
        {dishes.map((dish) => (
          <li key={dish.id} className={styles.menu__item}>
            <DishCard dish={dish} />
          </li>
        ))}
      </ul>
      <Dots count={dishes.length} active={index} onSelect={goTo} label="Блюда меню" />
    </section>
  );
}
