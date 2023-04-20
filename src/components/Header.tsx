import styles from'./Header.module.css'

import icon from '../images/icon.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={icon} alt='logotipo do ignite' />

    </header>
  );
}