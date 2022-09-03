import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './MobilePageHome.module.css';
import CalendarForm from '../CalendarForm';
import ModalMobileHome from '../ModalMobileHome';
import Container from '../Containter';
import useWindowDimensions from '../Hooks';
import Balance from '../Balance';

function MobilePageHome() {
  const [modalExpenenses, setModalExpenenses] = useState(false);
  const [modalIncome, setModalIncome] = useState(false);
  const [calendarValue] = useState(new Date());
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
            </Link>
            <CalendarForm data={calendarValue} />
          </div>
          <Balance balanceValue={null} />
          <ul />
        </Container>
        <div className={s.wrapperMobileButton}>
          <button
            type="button"
            className={s.buttonMobile}
            onClick={toggleModalExpenenses}
          >Expenses
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
        category="Product "
      />
      )}
      {modalIncome && (
      <ModalMobileHome
        closeModal={toggleModalIncome}
        category="Income "
      />
      )}
    </section>
  );
}

export default MobilePageHome;
