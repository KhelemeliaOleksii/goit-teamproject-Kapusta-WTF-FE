import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import Avatar from 'react-avatar';
import { authSelectors, authOperations } from '../../../redux/auth';
import transactionSlice from '../../../redux/transaction/transaction-slice';
import Modal from '../../Modal';
import useWindowDimensions from '../../../helpers/WindowDimensions';

import styles from './UserLogOut.module.css';

function UserLogOut() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const [setModalOpen, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const logoutModal = () => {
    dispatch(authOperations.logOut());
    toggleModal();
    dispatch(transactionSlice.actions.addDate({
      year: '',
      month: '',
      day: ''
    }));
  };

  const viewPort = useWindowDimensions();

  return (
    <div className={styles.userWrapper}>
      <Avatar
        name={name}
        size="32"
        color={Avatar.getRandomColor('sitebase', [
          'red',
          'green',
          'blue',
          'orange',
          'violete',
          'rose',
          'yellow',
        ])}
        className={styles.userIcon}
      />
      {viewPort.width >= 768 && (
        <>
          <p className={styles.userName}>{name}</p>
          <button
            type="button"
            onClick={toggleModal}
            className={styles.logOutButton}
          >
            Exit
          </button>
        </>
      )}
      {viewPort.width < 768 && (
        <div className={styles.logOutIcon}>
          <RiLogoutBoxRLine onClick={toggleModal} size="16px" />
        </div>
      )}
      {setModalOpen && (
        <Modal
          handleClickYes={logoutModal}
          handleClickNo={toggleModal}
          onClose={toggleModal}
          modalTitle="Ви впевнені, що хочете вийти?"
        />
      )}
    </div>
  );
}

export default UserLogOut;
