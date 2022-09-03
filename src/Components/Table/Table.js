import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Summary from '../Summary';
import useWindowDimensions from '../Hooks';
import s from './Table.module.css';
// import transactionOperations from '../../redux/transaction/transaction-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';

// const transactions = [
//   {
//     id: '630aa92d7fbba3001d117dc2',
//     type: 'income',
//     date: '28.8.2022',
//     category: 'Заработная плата',
//     subCategory: 'fdsfds',
//     sum: 12000,
//     month: '8',
//     year: '2022',
//     owner: '6307ccfba7599a001d3cf925',
//   },
//   {
//     id: '630aa92d7fbba3001d117dc',
//     type: 'income',
//     date: '27.7.2021',
//     category: 'Заработная плата',
//     subCategory: 'Биткоин',
//     sum: 11,
//     month: '7',
//     year: '2021',
//     owner: '6307ccfba7599a001d3cf925',
//   },

// ];

function Table({ category }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(transactionOperations.getTransaction());
  }, [dispatch]);
  const transactions = useSelector(transactionSelectors.getTransactionList);
  const viewPort = useWindowDimensions();
  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead>
          <tr className={s.tableHeder}>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Sum</th>
            <th> </th>
          </tr>
        </thead>
        <tbody className={s.tbodyTable}>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className={s.trBody}>
              <td>{transaction.date}</td>
              <td>{transaction.subCategory}</td>
              <td>{transaction.category}</td>
              <td style={transaction.type === 'income' ? { color: '#E7192E' } : { color: 'gren' }}>{transaction.sum}</td>
              <td><AiFillDelete size={20} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      { viewPort.width >= 1280 && <Summary />}
    </div>
  );
}

export default Table;

Table.propTypes = {
  category: PropTypes.string.isRequired,
};
