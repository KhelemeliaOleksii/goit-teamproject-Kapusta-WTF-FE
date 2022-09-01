import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './PageHome.module.css';
import Summary from '../Summary';
import WindowTransaction from '../WindowTransaction';
import useWindowDimensions from '../Hooks';
import Container from '../Containter';

function PageHome() {
  const [tableExpenenses, setTableExpenenses] = useState(true);
  const [tableIncome, setTableIncome] = useState(false);
  const viewPort = useWindowDimensions();
  const toggleTableExpenenses = () => {
    setTableExpenenses(!tableExpenenses);
    setTableIncome(!tableIncome);
  };
  const toggleTableIncome = () => {
    setTableIncome(!tableIncome);
    setTableExpenenses(!tableExpenenses);
  };
  return (
    <section className={s.PageHomeSection}>
      <div className={s.PageHomeBackground} />
      <Container>
        <div className={s.PageHomeWrapper}>
          <div className={s.BalanseWrapper}>
            <button type="button" className={s.button}> Балас</button>
            <Link to="/reports" className={s.linkReport}>
              Reports
            </Link>
          </div>
          <ul className={s.PageHomelistButton}>
            <li>
              <button type="button" className={s.PageHomebutton} onClick={toggleTableExpenenses}>espenses</button>
            </li>
            <li>
              <button type="button" className={s.PageHomebutton} onClick={toggleTableIncome}>income</button>
            </li>
          </ul>
          <WindowTransaction tableExpenenses={tableExpenenses} tableIncome={tableIncome} />
        </div>
        <div className={s.containerSummary}>
          {viewPort.width >= 768 && viewPort.width < 1280 && <Summary />}
        </div>
      </Container>
    </section>
  );
}
export default PageHome;
