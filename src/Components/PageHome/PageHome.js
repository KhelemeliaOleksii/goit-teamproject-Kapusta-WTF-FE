import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Summary from '../Summary';
import WindowTransaction from '../WindowTransaction';
import useWindowDimensions from '../Hooks';
import Container from '../Containter';
import balanceOperations from '../../redux/balance/balance-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import transactionSlice from '../../redux/transaction/transaction-slice';
import balanceSelectors from '../../redux/balance/balance-selectors';
import Balance from '../Balance';
import { ReactComponent as Vector } from '../../images/svg/Vector.svg';
import s from './PageHome.module.css';

function PageHome() {
  const dispatch = useDispatch();
  const viewPort = useWindowDimensions();
  const type = useSelector(transactionSelectors.getType);
  const { addType } = transactionSlice.actions;
  const balance = useSelector(balanceSelectors.getBalance);

  useEffect(() => {
    dispatch(balanceOperations.getBalance());
  }, [dispatch]);
  const toggletype = (e) => {
    dispatch(addType(`${e.target.name}`));
  };
  return (
    <section>
      <div className={s.PageHomeBackground} />
      <Container>
        <div className={s.PageHomeWrapper}>
          <div className={s.BalanseWrapper}>
            <Balance balanceValue={balance} />
            <div className={s.wrapperlinkReport}>
              <Link to="/reports" className={s.linkReport}>
                Перейти до звітів
                <Vector className={s.vector} />
              </Link>
            </div>
          </div>
          <ul className={s.PageHomelistButton}>
            <li>
              <button
                name="expenses"
                type="button"
                className={`${s.PageHomebutton} ${type === 'expenses' && s.active
                }`}
                onClick={toggletype}
              > Витрати
              </button>
            </li>
            <li>
              <button
                name="income"
                type="button"
                className={`${s.PageHomebutton} ${type === 'income' && s.active
                }`}
                onClick={toggletype}
              > Доходы
              </button>
            </li>
          </ul>
          <WindowTransaction />
        </div>
        <div className={s.containerSummary}>
          {viewPort.width >= 768 && viewPort.width < 1280 && <Summary />}
        </div>
      </Container>
      <div className={s.PageHomeBackgroundImg} />
    </section>
  );
}
export default PageHome;
