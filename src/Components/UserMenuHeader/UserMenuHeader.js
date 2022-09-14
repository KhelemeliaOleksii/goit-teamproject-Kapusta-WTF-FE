import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import LogoHeader from '../LogoHeader';
import TeamModal from '../TeamModal';
import UserLogOut from './UserLogOut/UserLogOut';

import styles from '../Header/Header.module.css';

export default function UserMenuHeader() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" alt="homepage">
          <LogoHeader />
          <Pulse><button className={styles.button} type="button" onClick={openModal}>by WTF</button></Pulse>
          {showModal && <TeamModal closeModal={closeModal} />}
        </Link>
        <UserLogOut />
      </div>
    </header>
  );
}
