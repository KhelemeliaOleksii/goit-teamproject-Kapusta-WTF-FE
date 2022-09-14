import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { setReloadFrom } from '../../redux/auth/auth-slice';

export default function PrivateRoute({ children, redirectTo = '/login' }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  dispatch(setReloadFrom(window.location.pathname));
  return isLoggedIn
    ? (children)
    : (<Navigate replace to={redirectTo} />);
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
