import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './MobilePageHome.module.css';
import CalendarForm from '../CalendarForm';
import ModalMobileHome from '../ModalMobileHome';
import Container from '../Containter';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import transactionOperations from '../../redux/transaction/transaction-operations';
import useWindowDimensions from '../Hooks';
import Balance from '../Balance';
import MobileTable from '../MobileTable';
import { ReactComponent as Vector } from '../../images/svg/Vector.svg';

function MobilePageHome() {
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  const [type, setType] = useState('');
  const [calendarValue] = useState(new Date());

  const balance = useSelector(transactionSelectors.getBalance);
  const viewPort = useWindowDimensions();

  useEffect(() => {
    dispatch(transactionOperations.getBalance());
  }, [dispatch]);
  const toggleModal = (e) => {
    setType(e.currentTarget.value);
    setisOpen(!isOpen);
  };
  return (
    <section>
      {!isOpen && (
        <div className={s.wrapperMobileSection}>
          <Container>
            <div className={s.boxMobileBalanse}>
              <Link to="/reports" className={s.linkReport}>
                Reports
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
              expenses
            </button>
            <button
              value="income"
              type="button"
              className={s.buttonMobile}
              onClick={toggleModal}
            >
              income
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
