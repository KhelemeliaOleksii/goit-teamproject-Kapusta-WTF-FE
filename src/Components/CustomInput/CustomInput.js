import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import s from './CustomInput.module.css';

const CustomInput = forwardRef(({ value = '', onClick }, ref) => (
  <button type="button" className={s.customInput} onClick={onClick} ref={ref}>
    {value}
  </button>
));
CustomInput.displayName = 'CustomInput';

export default CustomInput;

CustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
