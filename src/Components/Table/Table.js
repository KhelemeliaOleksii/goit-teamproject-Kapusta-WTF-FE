import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTableDate from '../../helpers/getTableDate/getTableDate';
import Summary from '../Summary';
import useWindowDimensions from '../Hooks';
import s from './Table.module.css';
import transactionOperations from '../../redux/transaction/transaction-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import summaryOperations from '../../redux/summary/summary-operations';
import balanceOperations from '../../redux/balance/balance-operations';
import { ReactComponent as Delete } from '../../images/svg/delete.svg';
import Modal from '../Modal/Modal';
import getDate from '../../helpers/getData/getDate';
import expensesOptions from './expenses.json';
import incomeOptions from './income.json';

function Table() {
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);

  const [idTransaction, setIdTransaction] = useState(false);
  const transactions = useSelector(transactionSelectors.getTransactionList);
  const type = useSelector(transactionSelectors.getType);
  const calendarDate = useSelector(transactionSelectors.getDate);

  const { year, month, day } = calendarDate;
  const startDay = getDate(year, month, day);

  const filtertransactions = transactions.filter(({ transactionType }) => transactionType === type);
  const categories = type === 'expenses' ? expensesOptions : incomeOptions;

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
    toggleModalIncome();
    await dispatch(transactionOperations.deleteTransaction(idTransaction));
    await dispatch(transactionOperations.getTransaction(startDay));
    await dispatch(balanceOperations.getBalance());
    await dispatch(summaryOperations.getTransactionPerMouth(type));
    toast.success('Операцiя пройшла успiшно', { theme: 'dark' });
    setisOpen('');
  };
  const viewPort = useWindowDimensions();
  return (
    <>
      {isOpen && (
        <Modal
          modalTitle="Ви впевненi?"
          handleClickYes={onSubmit}
          onClose={toggleModalIncome}
          handleClickNo={toggleModalIncome}
          message="Ви впевнені?"
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
            {filtertransactions.reverse().map(({
              _id, amount, description, categoryId, transactionType,
            }) => (
              <tr key={_id} className={s.trBody}>
                <td>{getTableDate(startDay)}</td>
                <td>{description.descriptionName}</td>
                <td>{categories.map((category) => category.id === categoryId && category.value)}
                </td>
                <td className={s.sumtable} style={transactionType === 'expenses' ? { color: '#E7192E' } : { color: '#407946' }}>{transactionType === 'expenses' ? `-${amount}.00 ₴.` : `+${amount}.00 ₴.`}</td>
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
