import { useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale, } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import CustomInput from '../CustomInput';
import transactionSlice from '../../redux/transaction/transaction-slice';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import { ReactComponent as Calendar } from '../../images/svg/calendar.svg';
import './Data.css';
import 'react-datepicker/dist/react-datepicker.css';
import s from './CalendarForm.module.css';

registerLocale('ru', ru);

function CalendarForm() {
  const dateNow = useSelector(transactionSelectors.getDate);
  const [startDate, setStartDate] = useState(
    dateNow.day ? new Date(dateNow.year, dateNow.month, dateNow.day) : new Date()
  );
  const dispatch = useDispatch();
  const { addDate } = transactionSlice.actions;
  useEffect(() => {
    dispatch(addDate({
      year: `${startDate.getFullYear()}`,
      month: `${startDate.getMonth()}`,
      day: `${startDate.getDate()}`
    }));
  }, [startDate, setStartDate, dispatch, addDate]);
  return (
    <div className={s.calendarFormWrapp}>
      <Calendar />
      <DatePicker
        customInput={<CustomInput value="" onClick={() => { }} />}
        minDate={new Date('01-01-2021')}
        maxDate={new Date()}
        selected={dateNow.day ? startDate : new Date()}
        onChange={(date) => { setStartDate(date); }}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
}
export default CalendarForm;
