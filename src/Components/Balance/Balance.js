import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import notifier from '../../services/notify/notify';
import balanceSlice from '../../redux/balance';

// import BalanceModal from './BalanceModal';
import s from './Balance.module.css';

const BALANCELIMIT = {
  min: 0,
  max: 1000000
};
export default function Balance({ balanceValue = null }) {
  const [balance, setBalance] = useState(null);
  const dispatch = useDispatch();

  const balanceInputHandler = (e) => {
    const { value } = e.target;
    if (Number(value) < BALANCELIMIT.min || Number(value) > BALANCELIMIT.max) {
      notifier.info(`Значення балансу має бути не менше ${BALANCELIMIT.min} і не більше ${BALANCELIMIT.max}`);
      return;
    }
    setBalance(Number(value));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(balanceSlice.balanceOperations.balanceRequest(balance));
  };

  return (
    <div className={s.balanceContainer}>
      <form className={s.balanceForm} onSubmit={submitHandler}>
        <div className={s.text}>
          <label htmlFor="balance" className={s.balanceLabel}>
            Баланс:
          </label>
        </div>
        {balanceValue === null ? (
          <>
            <input
              onInput={balanceInputHandler}
              type="number"
              value={balance}
              id="balance"
              className={s.balanceInput}
              placeholder="00.00 UAH"
              pattern="^[0-9]+$"
            />
            <button type="submit" className={s.balanceBtn}>
              підтвердити
            </button>
            {/* <BalanceModal /> */}
          </>
        ) : (
          <input
            type="number"
            value={balanceValue}
            id="balance"
            className={s.balanceInput}
            placeholder="00.00 UAH"
            pattern="^[0-9]+$"
            disabled
          />
        )}
      </form>
    </div>
  );
}

Balance.propTypes = {
  balanceValue: PropTypes.oneOfType([null, PropTypes.number]).isRequired
};
