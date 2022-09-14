import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({ children, redirectTo = '/', restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = restricted && isLoggedIn;
  const reloadFrom = useSelector(authSelectors.getReloadFrom);
  console.log('reloadFrom', reloadFrom);
  return !shouldRedirect
    ? (children)
    : (<Navigate replace to={redirectTo} />);
  // : (<Navigate replace to={reloadFrom} />);
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
