import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CalendarForm from '../CalendarForm';
import ModalMobileHome from '../ModalMobileHome';
import Container from '../Containter';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import useWindowDimensions from '../Hooks';
import Balance from '../Balance';
import MobileTable from '../MobileTable';
import { ReactComponent as Vector } from '../../images/svg/Vector.svg';
import s from './MobilePageHome.module.css';

function MobilePageHome() {
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  const [type, setType] = useState('');
  const [calendarValue] = useState(new Date());

  const balance = useSelector(authSelectors.getBalance);
  const viewPort = useWindowDimensions();

  useEffect(() => {
    dispatch(authOperations.getBalance());
  }, [dispatch]);

  const toggleModal = (e) => {
    if (e) {
      setType(e.currentTarget.value);
    }
    setisOpen(!isOpen);
  };
  return (
    <section>
      {!isOpen && (
        <div className={s.wrapperMobileSection}>
          <Container>
            <div className={s.boxMobileBalanse}>
              <Link to="/reports" className={s.linkReport}>
                Звіти
                <Vector className={s.vector} />
              </Link>
            </div>
            <Balance balanceValue={balance} />
            <CalendarForm data={calendarValue} />
            {balance && <MobileTable />}
          </Container>
          <div className={s.wrapperMobileButton}>
            <button
              value="expenses"
              type="button"
              className={s.buttonMobile}
              onClick={toggleModal}
            >
              витрати
            </button>
            <button
              value="income"
              type="button"
              className={s.buttonMobile}
              onClick={toggleModal}
            >
              доходи
            </button>
          </div>
        </div>
      )}
      {isOpen && viewPort.width < 768 && (
        <ModalMobileHome
          closeModal={toggleModal}
          category={type}
        />
      )}
    </section>
  );
}

export default MobilePageHome;
