import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ name, style }) {
  return (
    <button type="submit" className={s.button} style={style}>
      {name}
    </button>
  );
}
export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.shape({
    color: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
  }).isRequired,
};
