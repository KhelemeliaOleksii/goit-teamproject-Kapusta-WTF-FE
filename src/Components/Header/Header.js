import { Link } from 'react-router-dom';
import LogoHeader from '../LogoHeader';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" alt="homepage">
          <LogoHeader />
        </Link>
      </div>
    </header>
  );
}
