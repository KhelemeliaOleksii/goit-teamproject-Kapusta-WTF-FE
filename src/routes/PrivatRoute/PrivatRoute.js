import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function PrivateRoute({ children, redirectTo = '/login' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // useSelector(authSelectors.getIsLoggedIn);
  // const isLoggedIn = true;
  return isLoggedIn
    ? (children)
    : (<Navigate replace to={redirectTo} />);
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
