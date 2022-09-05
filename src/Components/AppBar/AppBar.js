import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserMenuHeader from '../UserMenuHeader';
import Header from '../Header';

export default function AppBar() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true;

  return <> <div>{isLoggedIn ? <UserMenuHeader /> : <Header />}</div> </>;
}
