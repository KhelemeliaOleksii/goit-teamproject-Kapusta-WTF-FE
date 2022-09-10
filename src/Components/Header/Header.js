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
        </Link>
        <button className={styles.button} type="button" onClick={openModal}>WTF Team</button>
        {showModal && <TeamModal closeModal={closeModal} />}
      </div>
    </header>
  );
}
