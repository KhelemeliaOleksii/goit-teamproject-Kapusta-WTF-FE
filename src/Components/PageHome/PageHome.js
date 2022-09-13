import { useEffect, useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import authOperations from '../../redux/auth/auth-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import transactionSlice from '../../redux/transaction/transaction-slice';
import authSelectors from '../../redux/auth/auth-selectors';
import Balance from '../Balance';
import Summary from '../Summary';
import WindowTransaction from '../WindowTransaction';
import useWindowDimensions from '../Hooks';
import Container from '../Containter';
import { ReactComponent as Vector } from '../../images/svg/Vector.svg';
import s from './PageHome.module.css';

function PageHome() {
  const dispatch = useDispatch();
  const currentBalance = useSelector(authSelectors.getBalance);
  const [balance, setBalance] = useState(currentBalance);

  const viewPort = useWindowDimensions();
  const type = useSelector(transactionSelectors.getType);
  const { addType } = transactionSlice.actions;

  useEffect(() => {
    dispatch(authOperations.getBalance());
    setBalance(currentBalance);
  }, [dispatch, currentBalance]);
  const toggletype = (e) => {
    dispatch(addType(`${e.target.name}`));
  };
  const onBalanceSubmit = (firstBallance) => {
    setBalance(firstBallance);
    dispatch(authOperations.addBalance({ currentBalance: firstBallance }));
  };
  return (
    <section className={s.PageHomeSaction}>
      <div className={s.PageHomeBackground} />
      <Container>
        <div className={s.PageHomeWrapper}>
          <div className={s.BalanseWrapper}>
            <Balance balanceValue={balance} onBalanceSubmit={onBalanceSubmit} />
            <div className={s.wrapperlinkReport}>
              <Link to="/reports" className={s.linkReport}>
                Звіти
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
              > Доходи
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
