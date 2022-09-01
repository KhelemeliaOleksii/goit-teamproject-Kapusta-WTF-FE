import PropTypes from 'prop-types';
import { GoCalendar } from 'react-icons/go';
import s from './CalendarForm.module.css';

function CalendarForm({ data }) {
  return (
    <div className={s.calendarFormWrapp}>
      <GoCalendar size={20} color="#52555F" />
      <p className={s.text}>
        {data.getDate()}.{data.getMonth()}.{data.getFullYear()}
      </p>
    </div>
  );
}
export default CalendarForm;

CalendarForm.propTypes = {
  data: PropTypes.node.isRequired,
};
