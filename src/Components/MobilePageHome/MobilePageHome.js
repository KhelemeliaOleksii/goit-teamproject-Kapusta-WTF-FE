import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './MobilePageHome.module.css';
import CalendarForm from '../CalendarForm';
import ModalMobileHome from '../ModalMobileHome';
import Container from '../Containter';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import useWindowDimensions from '../Hooks';
import Balance from '../Balance';
import MobileTable from '../MobileTable';
import { ReactComponent as Vector } from '../../images/svg/Vector.svg';

function MobilePageHome() {
  const [modalExpenenses, setModalExpenenses] = useState(false);
  const [modalIncome, setModalIncome] = useState(false);
  const [calendarValue] = useState(new Date());
  const balance = useSelector(transactionSelectors.getBalance);
  const viewPort = useWindowDimensions();
  const toggleModalExpenenses = () => {
    setModalExpenenses(!modalExpenenses);
  };
  const toggleModalIncome = () => {
    setModalIncome(!modalIncome);
  };
  return (
    <section>
      {!modalExpenenses && !modalIncome && (
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
              type="button"
              className={s.buttonMobile}
              onClick={toggleModalExpenenses}
            >
              Expenses
            </button>
            <button
              type="button"
              className={s.buttonMobile}
              onClick={toggleModalIncome}
            >
              income
            </button>
          </div>
        </div>
      )}
      {modalExpenenses && viewPort.width < 768 && (
        <ModalMobileHome
          closeModal={toggleModalExpenenses}
          category="expenses"
          text="товару"
        />
      )}
      {modalIncome && (
        <ModalMobileHome closeModal={toggleModalIncome} category="income" text="доходу" />
      )}
    </section>
  );
}

export default MobilePageHome;
