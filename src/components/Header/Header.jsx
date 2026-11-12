import { useCallback, useState } from 'react';
import { navItems } from '../../data/nav';
import { useActiveSection, useScrolled } from '../../hooks/useActiveSection';
import { asset } from '../../utils/asset';
import { cx } from '../../utils/cx';
import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './Header.module.css';

const sectionIds = navItems.map((item) => item.id);

// Шапка: логотип, меню-якоря (с 1024 px) или бургер (мобильная)
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const scrolled = useScrolled();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className={cx(styles.header, scrolled && styles.header_scrolled)}>
      <div className={styles.header__inner}>
        <Logo />

        <nav className={styles.header__nav} aria-label="Разделы страницы">
          <ul className={styles.header__list}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={cx(styles.header__link, active === item.id && styles.header__link_active)}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.header__burger}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <img src={asset('images/icons/burger.svg')} alt="" width="25" height="17" />
        </button>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={closeMenu} active={active} />
    </header>
  );
}
