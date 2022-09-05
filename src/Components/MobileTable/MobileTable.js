// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import transactionOperations from '../../redux/transaction/transaction-operations';
// import transactionSelectors from '../../redux/transaction/transaction-selectors';
// import getDate from '../../helpers/getData/getDate';
// import Modal from '../Modal';
// import Section from '../Section';
// import { ReactComponent as Delete } from '../../images/svg/delete.svg';
// import s from './MobileTable.module.css';

// function MobileTable() {
//   const dispatch = useDispatch();
//   const { year, month, day } = useSelector(transactionSelectors.getDate);
//   const date = getDate(year, month, day);
//   const transactions = useSelector(transactionSelectors.getTransactionList);
//   const [transaction, setTransaction] = useState('');
//   const [deletionModal, setDeletionModal] = useState(false);

//   console.log(transactions);

//   useEffect(() => {
//     dispatch(transactionOperations.getTransaction(date));
//   }, [date, dispatch]);

//   const onToggleDeletion = (transactionArg) => {
//     const { _id: transId } = transactionArg;
//     setDeletionModal((prevDeletionModal) => !prevDeletionModal);
//     setTransaction(transId);
//   };

//   const onCancelDeletion = () => {
//     setTransaction('');
//     setDeletionModal(false);
//   };

//   const onConfirmDeletion = () => {
//     setDeletionModal(false);
//     const transactionToDelete = transactions.find(
//       ({ _id }) => _id === transaction
//     );
//     dispatch(transactionOperations.deleteTransaction(transactionToDelete));
//     setTransaction('');
//   };

//   return (
//     <Section>
//       {deletionModal && (
//         <Modal
//           handleClickYes={onConfirmDeletion}
//           handleClickNo={onCancelDeletion}
//           onClose={onToggleDeletion}
//           message="Ви впевнені?"
//         />
//       )}
//       <ul className={s.list}>
//         {
//           transactions.map((item) => {
//             const { _id } = item;
//             return (
//               <div key={_id} className={s.wrapper}>
//                 <li className={s.item}>
//                   <div className={s.item__wrapper}>
//                     <p className={s.item__description}>
//                       {item.description.descriptionName}
//                     </p>
//                     <div className={s.item__subwrapper}>
//                       <p className={s.item__date}>{date}</p>
//                       <p className={s.item__category}>{item.transactionType}</p>
//                     </div>
//                   </div>
//                   <div className={s.item__amountWrapper}>
//                     <p
//                       className={s.item__amount}
//                       style={
//                         item.transactionType === 'expenses'
//                           ? { color: '#E7192E' }
//                           : { color: '#407946' }
//                       }
//                     >
//                       {item.transactionType === 'expenses'
//                         ? `-${item.amount}.00 грн.`
//                         : `${item.amount}.00 грн.`}
//                     </p>
//                   </div>
//                   <Delete
//                     onClick={() => onToggleDeletion(item)}
//                     className={s.icon}
//                   />
//                 </li>
//               </div>
//             );
//           })
//         }
//       </ul>
//     </Section>
//   );
// }

// export default MobileTable;
