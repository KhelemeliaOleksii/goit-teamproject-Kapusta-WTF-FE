import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GoCalendar } from 'react-icons/go';
import DatePicker, { registerLocale, } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import s from './CalendarForm.module.css';
import './Data.css';
import CustomInput from '../CustomInput';
import transactionSlice from '../../redux/transaction/transaction-slice';

registerLocale('ru', ru);

function CalendarForm() {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const { addDate } = transactionSlice.actions;
  useEffect(() => {
    dispatch(addDate({
      year: `${startDate.getFullYear()}`,
      month: (`${startDate.getMonth() + 1}`).slice(-2),
      day: (`${startDate.getDate()}`).slice(-2)
    }));
  }, [startDate, setStartDate, dispatch, addDate]);
  return (
    <div className={s.calendarFormWrapp}>
      <GoCalendar size={20} />
      <DatePicker
        customInput={<CustomInput value="" onClick={() => { }} />}
        minDate={new Date('01-01-2021')}
        maxDate={new Date()}
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          // dispatch(addDate({
          //   year: `${startDate.getFullYear()}`,
          //   month: (`${startDate.getMonth() + 1}`).slice(-2),
          //   day: (`${startDate.getDate()}`).slice(-2)
          // }));
        }}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
}
export default CalendarForm;
