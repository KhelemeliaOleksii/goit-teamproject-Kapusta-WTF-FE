import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './PageHome.module.css';
import Summary from '../Summary';
import WindowTransaction from '../WindowTransaction';
import useWindowDimensions from '../Hooks';
import Container from '../Containter';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import transactionSlice from '../../redux/transaction/transaction-slice';
import transactionOperations from '../../redux/transaction/transaction-operations';
import Balance from '../Balance';

function PageHome() {
  const viewPort = useWindowDimensions();
  const type = useSelector(transactionSelectors.getType);
  const balance = useSelector(transactionSelectors.getBalance);
  const dispatch = useDispatch();
  const { addType } = transactionSlice.actions;
  useEffect(() => {
    dispatch(transactionOperations.getBalance());
  }, [dispatch]);
  const toggletype = (e) => {
    dispatch(addType(`${e.target.name}`));
  };
  return (
    <section className={s.PageHomeSection}>
      <div className={s.PageHomeBackground} />
      <Container>
        <div className={s.PageHomeWrapper}>
          <div className={s.BalanseWrapper}>
            <button type="button" className={s.button}>{balance}</button>
            {/* <button type="button" className={s.button}> Балас</button> */}
            <Balance balanceValue={100} />
            <Link to="/reports" className={s.linkReport}>
              Reports
            </Link>
          </div>
          <ul className={s.PageHomelistButton}>
            <li>
              <button
                name="expenses"
                type="button"
                className={`${s.PageHomebutton} ${type === 'expenses' && s.active
                }`}
                onClick={toggletype}
              > expenses
              </button>
            </li>
            <li>
              <button
                name="income"
                type="button"
                className={`${s.PageHomebutton} ${type === 'income' && s.active
                }`}
                onClick={toggletype}
              > income
              </button>
            </li>
          </ul>
          <WindowTransaction type={type} />
        </div>
        <div className={s.containerSummary}>
          {viewPort.width >= 768 && viewPort.width < 1280 && <Summary />}
        </div>
      </Container>
    </section>
  );
}
export default PageHome;
