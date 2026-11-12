import { useEffect, useRef } from 'react';
import { navItems } from '../../data/nav';
import { useEscape, useScrollLock } from '../../hooks/useScrollLock';
import { asset } from '../../utils/asset';
import { cx } from '../../utils/cx';
import Logo from '../Logo/Logo';
import styles from './MobileMenu.module.css';

// Выезжающее меню мобильной версии (макет burger.png)
export default function MobileMenu({ isOpen, onClose, active }) {
  const closeRef = useRef(null);

  useScrollLock(isOpen);
  useEscape(isOpen, onClose);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus({ preventScroll: true });
  }, [isOpen]);

  return (
    <div
      id="mobile-menu"
      className={cx(styles.menu, isOpen && styles.menu_open)}
      role="dialog"
      aria-modal="true"
      aria-label="Меню"
      aria-hidden={!isOpen}
      inert={isOpen ? undefined : ''}
    >
      <Logo className={styles.menu__logo} onClick={onClose} />
      <button ref={closeRef} type="button" className={styles.menu__close} aria-label="Закрыть меню" onClick={onClose}>
        <img src={asset('images/icons/close.svg')} alt="" width="25" height="25" />
      </button>

      <nav className={styles.menu__nav} aria-label="Разделы страницы">
        <ul className={styles.menu__list}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={cx(styles.menu__link, active === item.id && styles.menu__link_active)}
                href={`#${item.id}`}
                onClick={onClose}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
