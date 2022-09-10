/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './UserReportNav.module.css';
import GoBack from '../GoBack/GoBack';
import reportOperations from '../../redux/report/report-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import reportSelectors from '../../redux/report/report-selectors';
import authOperations from '../../redux/auth/auth-operations';
import Balance from '../Balance';
import authSelectors from '../../redux/auth/auth-selectors';
import SwitchMonth from '../SwitchMonth/SwitchMonth';
import useWindowDimensions from '../Hooks';

export default function UserReportNav() {
  const viewPort = useWindowDimensions();
  const type = useSelector(transactionSelectors.getType);
  const normalizedDate = useSelector(reportSelectors.getReportDate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getBalance());
  }, [dispatch]);

  useEffect(() => {
    dispatch(reportOperations.transactionType({ normalizedDate, type }));
  }, [normalizedDate, type]);

  const balance = useSelector(authSelectors.getBalance);

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
