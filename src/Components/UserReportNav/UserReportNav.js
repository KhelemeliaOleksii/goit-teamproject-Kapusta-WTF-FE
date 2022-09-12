import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reportOperations from '../../redux/report/report-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import authSelectors from '../../redux/auth/auth-selectors';
import reportSelectors from '../../redux/report/report-selectors';
import GoBack from '../GoBack/GoBack';
import Balance from '../Balance';
import SwitchMonth from '../SwitchMonth/SwitchMonth';
import useWindowDimensions from '../Hooks';
import s from './UserReportNav.module.css';

export default function UserReportNav() {
  const dispatch = useDispatch();
  const viewPort = useWindowDimensions();
  const type = useSelector(transactionSelectors.getType);
  const normalizedDate = useSelector(reportSelectors.getReportDate);
  const balance = useSelector(authSelectors.getBalance);

  useEffect(() => {
    dispatch(reportOperations.transactionType({ normalizedDate, type }));
  }, [dispatch, normalizedDate, type]);

  return (
    <div className={s.container}>
      {viewPort.width < 768 && (
        <>
          <GoBack />
          <SwitchMonth />
          <Balance balanceValue={balance} />
        </>
      )}
      {viewPort.width >= 768 && (
        <>
          <GoBack />
          <Balance balanceValue={balance} />
          <SwitchMonth />
        </>
      )}
    </div>
  );
}
