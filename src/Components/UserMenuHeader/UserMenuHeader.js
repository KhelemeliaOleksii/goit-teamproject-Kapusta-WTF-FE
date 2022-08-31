import { Link } from 'react-router-dom';
import LogoHeader from '../LogoHeader';
import UserLogOut from './UserLogOut/UserLogOut';

import styles from '../Header/Header.module.css';

export default function UserMenuHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" alt="homepage">
          <LogoHeader />
        </Link>
        <UserLogOut />
      </div>
    </header>
  );
}
