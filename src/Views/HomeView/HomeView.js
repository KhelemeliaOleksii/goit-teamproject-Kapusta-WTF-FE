// import { Navigate } from 'react-router-dom';
// import { useSelector, } from 'react-redux';
import useWindowDimensions from '../../Components/Hooks';
import MobilePageHome from '../../Components/MobilePageHome';
import PageHome from '../../Components/PageHome';
// import authSelectors from '../../redux/auth/auth-selectors';

function HomeView() {
  const viewPort = useWindowDimensions();
  // const initialization = useSelector(authSelectors.getIsLoggedIn);
  // console.log(initialization);
  // if (!initialization) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <>
      {viewPort.width < 768 && (
        <MobilePageHome />)}
      {viewPort.width >= 768 && (
        <PageHome />)}
    </>
  );
}

export default HomeView;
