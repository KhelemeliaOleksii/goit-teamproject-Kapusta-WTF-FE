import { Link } from 'react-router-dom';
import { useState } from 'react';
import LogoHeader from '../LogoHeader';
import TeamModal from '../TeamModal';

import styles from './Header.module.css';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" alt="homepage">
          <LogoHeader />
          <button className={styles.button} type="button" onClick={openModal}>by WTF</button>
          {showModal && <TeamModal closeModal={closeModal} />}
        </Link>
      </div>
    </header>
  );
}
