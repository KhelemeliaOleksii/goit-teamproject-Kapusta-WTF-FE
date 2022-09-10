import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import transactionOperations from '../../redux/transaction/transaction-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import authOperations from '../../redux/auth/auth-operations';
import getDate from '../../helpers/getData/getDate';
import Modal from '../Modal';
import Section from '../Section';
import expensesOptions from '../Dropdown/expenses.json';
import incomeOptions from '../Dropdown/income.json';
import { ReactComponent as Delete } from '../../images/svg/delete.svg';
import s from './MobileTable.module.css';

function MobileTable() {
  const dispatch = useDispatch();
  const { year, month, day } = useSelector(transactionSelectors.getDate);
  const date = getDate(year, month, day);
  const transactions = useSelector(transactionSelectors.getTransactionList);
  const [transaction, setTransaction] = useState('');
  const [deletionModal, setDeletionModal] = useState(false);

  useEffect(() => {
    dispatch(transactionOperations.getTransaction(date));
  }, [date, dispatch]);

  const onDelete = (id) => {
    setDeletionModal(true);
    setTransaction(id);
  };

  const onCancelDeletion = () => {
    setTransaction('');
    setDeletionModal(false);
  };

  const onConfirmDeletion = async () => {
    setDeletionModal(false);
    await dispatch(transactionOperations.deleteTransaction(transaction));
    await dispatch(transactionOperations.getTransaction(date));
    await dispatch(authOperations.getBalance());
    setTransaction('');
  };

  const editedTransactions = transactions.map((item) => {
    const { transactionType, categoryId } = item;
    const value = transactionType === 'expenses'
      ? expensesOptions.find((option) => option.id === categoryId)
      : incomeOptions.find((option) => option.id === categoryId);
    return { ...item, ...value };
  });

  return (
    <Section>
      {deletionModal && (
        <Modal
          handleClickYes={onConfirmDeletion}
          handleClickNo={onCancelDeletion}
          onClose={onCancelDeletion}
          modalTitle="Ви впевнені?"
        />
      )}
      <ul className={s.list}>
        {editedTransactions.slice().reverse().map((item) => {
          const {
            _id, description, transactionType, amount, value
          } = item;
          return (
            <div key={_id} className={s.wrapper}>
              <li className={s.item}>
                <div className={s.item__wrapper}>
                  <p className={s.item__description}>
                    {description.descriptionName}
                  </p>
                  <div className={s.item__subwrapper}>
                    <p className={s.item__date}>{date}</p>
                    <p className={s.item__category}>{value}
                    </p>
                  </div>
                </div>
                <div className={s.item__amountWrapper}>
                  <p
                    className={s.item__amount}
                    style={
                      transactionType === 'expenses'
                        ? { color: '#E7192E' }
                        : { color: '#407946' }
                    }
                  >
                    {transactionType === 'expenses'
                      ? `- ₴${Number(amount).toFixed(2)}`
                      : `₴${Number(amount).toFixed(2)}`}
                  </p>
                </div>
                <Delete onClick={() => onDelete(_id)} className={s.icon} />
              </li>
            </div>
          );
        })}
      </ul>
    </Section>
  );
}

export default MobileTable;
