// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelectors from '../../../redux/transaction/transaction-selectors';
import transactionSlice from '../../../redux/transaction/transaction-slice';
import s from './UserTypeAmount.module.css';
import sprite from '../../../public/sprite_categories.svg';

export default function UserTypeAmount() {
  const dispatch = useDispatch();
  const type = useSelector(transactionSelectors.getType);
  const toggleType = () => {
    if (type === 'income') {
      dispatch(transactionSlice.actions.addType('expenses'));
    } else {
      dispatch(transactionSlice.actions.addType('income'));
    }
  };
  const typeUA = type === 'income' ? 'Доходи' : 'Витрати';
  return (
    <ul className={s.list}>
      <li>
        <span
          className={s.span}
          onClick={toggleType}
          onKeyPress={toggleType}
          role="button"
          tabIndex={0}
        >
          <svg width="10" height="15" aria-label="clickLeft">
            <use href={`${sprite}#icon-clickLeft`} />
          </svg>
        </span>
      </li>
      <li>
        <p className={s.p}>{typeUA}</p>
      </li>
      <li>
        <span
          className={s.span}
          onClick={toggleType}
          onKeyPress={toggleType}
          role="button"
          tabIndex={0}
        >
          <svg width="10" height="15" aria-label="clickRight">
            <use href={`${sprite}#icon-clickRigth`} />
          </svg>
        </span>
      </li>
    </ul>
  );
}
