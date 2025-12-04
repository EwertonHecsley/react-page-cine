import { useState } from 'react';
import s from './Header.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={s.header}>
      <section className={s.boxLogo}>
        <h2>CineFlix</h2>
      </section>

      <section className={s.boxNav}>
        <button
          className={`${s.menuToggle} ${isOpen ? s.menuToggleOpen : ''}`}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={handleToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={isOpen ? s.navOpen : ''}>
          <ul>
            <li><img src="src/assets/nav/button-search.png" alt="search" /></li>
            <li><a href="#">Início</a></li>
            <li><a href="#">Minha Lista</a></li>
            <li><img src="src/assets/nav/notification.png" alt="notification" /></li>
            <li><img src="src/assets/nav/button-user.png" alt="user profile" /></li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
