import { useEffect, } from 'react';
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
import { ReactComponent as Vector } from '../../images/svg/Vector.svg';

function PageHome() {
  const dispatch = useDispatch();
  const viewPort = useWindowDimensions();
  const type = useSelector(transactionSelectors.getType);
  const balance = useSelector(transactionSelectors.getBalance);
  const { addType } = transactionSlice.actions;

  useEffect(() => {
    dispatch(transactionOperations.getBalance());
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
              > Витраты
              </button>
            </li>
            <li>
              <button
                name="income"
                type="button"
                className={`${s.PageHomebutton} ${type === 'income' && s.active
                }`}
                onClick={toggletype}
              > Доходи
              </button>
            </li>
          </ul>
          <WindowTransaction type={type} />
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
