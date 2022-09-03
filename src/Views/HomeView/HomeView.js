import useWindowDimensions from '../../Components/Hooks';
import MobilePageHome from '../../Components/MobilePageHome';
import PageHome from '../../Components/PageHome';

function HomeView() {
  const viewPort = useWindowDimensions();
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
