import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserMenuHeader from '../UserMenuHeader';
import Header from '../Header';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <> <div>{isLoggedIn ? <UserMenuHeader /> : <Header />}</div> </>;
}
