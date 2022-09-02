import PropTypes from 'prop-types';
import { useState } from 'react';
// import BalanceModal from './BalanceModal';
import s from './Balance.module.css';

const BALANCELIMIT = {
  min: 0,
  max: 1000000
};
export default function Balance({ balanceValue = null }) {
  const [balance, setBalance] = useState(null);
  const balanceInputHandler = (e) => {
    const { value } = e.target;
    if (Number(value) < BALANCELIMIT.min || Number(value) > BALANCELIMIT.max) {
      // Значення балансу має бути не менше  0 і не більше 1000000
      return;
    }
    setBalance(Number(value));
  };
  return (
    <div className={s.balanceContainer}>
      <form className={s.balanceForm}>
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
