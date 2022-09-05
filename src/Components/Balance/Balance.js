import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import notifier from '../../services/notify/notify';
import balanceSlice from '../../redux/balance';
import BalanceModal from './BalanceModal';
import s from './Balance.module.css';

const BALANCELIMIT = {
  min: 0,
  max: 1000000
};
export default function Balance({ balanceValue = null }) {
  const [balance, setBalance] = useState(null);
  const isBalanceSubmited = useRef(false);
  const [isBalanceActivated, setIsBalanceActivated] = useState(
    isBalanceSubmited.current || (balanceValue !== null)
  );
  const dispatch = useDispatch();
  // const isBalanceActivated = isBalanceSubmited.current || (balanceValue !== null);

  const balanceInputHandler = (e) => {
    const { value } = e.target;
    const valueToNumber = Number.parseFloat(value);
    const isBalanceValide = valueToNumber < BALANCELIMIT.min || valueToNumber > BALANCELIMIT.max;
    if (isBalanceValide) {
      notifier.info(`Значення балансу має бути не менше ${BALANCELIMIT.min} і не більше ${BALANCELIMIT.max}`);
      return;
    }
    setBalance(valueToNumber);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(balanceSlice.balanceOperations.balanceRequest({ currentBalance: balance }));
    isBalanceSubmited.current = true;
    setIsBalanceActivated(isBalanceSubmited.current || (balanceValue !== null));
    // console.log('Значення балансу при сабміті', isBalanceActivated);
  };
  // console.log('Значення балансу', isBalanceActivated);
  return (
    <div className={s.balanceContainer}>
      <form className={s.balanceForm} onSubmit={submitHandler}>
        <div className={s.text}>
          <label htmlFor="balance" className={s.balanceLabel}>
            Баланс:
          </label>
        </div>
        { !isBalanceActivated ? (
          <>
            <NumberFormat
              className={s.balanceInput}
              onChange={balanceInputHandler}
              name="balance"
              thousandSeparator=" "
              decimalSeparator="."
              decimalScale={2}
              fixedDecimalScale
              suffix=" UAH"
              type="text"
              placeholder="00.00 UAH"
              minLength={1}
              maxLength={1000000}
            />
            <button type="submit" className={s.balanceBtn}>
              підтвердити
            </button>
            <BalanceModal />
          </>
        ) : (
          <NumberFormat
            className={s.balanceInput}
            name="balance"
            value={balanceValue}
            thousandSeparator=" "
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale
            suffix=" UAH"
            type="text"
            placeholder="00.00 UAH"
            minLength={1}
            maxLength={1000000}
          />
        )}
      </form>
    </div>
  );
}

Balance.propTypes = {
  balanceValue: PropTypes.oneOfType([null, PropTypes.number]).isRequired
};
