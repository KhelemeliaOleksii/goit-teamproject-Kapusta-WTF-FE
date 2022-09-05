import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Summary from '../Summary';
import useWindowDimensions from '../Hooks';
import s from './Table.module.css';
import transactionOperations from '../../redux/transaction/transaction-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import { ReactComponent as Delete } from '../../images/svg/delete.svg';
import Modal from '../Modal/Modal';
import getDate from '../../helpers/getData/getDate';

function Table() {
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  const [idTransaction, setIdTransaction] = useState(false);

  const type = useSelector(transactionSelectors.getType);
  const calendarDate = useSelector(transactionSelectors.getDate);

  const { year, month, day } = calendarDate;
  const startDay = getDate(year, month, day);
  const transactions = useSelector(transactionSelectors.getTransactionList);
  const filtertransactions = transactions.filter(({ transactionType }) => transactionType === type);

  useEffect(() => {
    dispatch(transactionOperations.getTransaction(startDay));
  }, [dispatch, startDay,]);

  const toggleModalIncome = () => {
    setisOpen(!isOpen);
  };
  const handleDeteteClick = (id) => {
    toggleModalIncome();
    setIdTransaction(id);
  };
  const onSubmit = async () => {
    await dispatch(transactionOperations.deleteTransaction(idTransaction));
    await dispatch(transactionOperations.getTransaction(startDay));
    await dispatch(transactionOperations.getBalance());
    setisOpen('');
  };
  const viewPort = useWindowDimensions();
  return (
    <>
      {isOpen && (
      <Modal
        handleClickYes={onSubmit}
        onClose={toggleModalIncome}
        handleClickNo={toggleModalIncome}
      />
      )}
      <div className={s.tableContainer}>
        <table className={s.table}>
          <thead>
            <tr className={s.tableHeder}>
              <th>Дата</th>
              <th>Опис</th>
              <th>Категория</th>
              <th>Сумма</th>
              <th> </th>
            </tr>
          </thead>
          <tbody className={s.tbodyTable}>
            {filtertransactions.map(({
              _id, amount, description, categoryId, transactionType,
            }) => (
              <tr key={_id} className={s.trBody}>
                <td>{startDay}</td>
                <td>{description.descriptionName}</td>
                <td> </td>
                <td className={s.sumtable} style={transactionType === 'expenses' ? { color: '#E7192E' } : { color: 'gren' }}>{amount}</td>
                <td><Delete
                  onClick={() => handleDeteteClick(_id)}
                  className={s.deleteIcon}
                />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {viewPort.width >= 1280 && <Summary />}
      </div>
    </>
  );
}

export default Table;
