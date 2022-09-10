import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import PrivateRoute from '../routes/PrivatRoute/PrivatRoute';
import PublicRoute from '../routes/PublicRoute/PublicRoute';
import Loader from './Loader/Loader';

import Layout from './Layout';

const GoogleRedirectView = lazy(() => import(
  '../Views/GoogleRedirectView/GoogleRedirectView' /* webpackChunkName: 'googleRedirectView' */
),);
const AuthView = lazy(() => import(
  '../Views/AuthView/AuthView' /* webpackChunkName: 'authView' */
),);
const HomeView = lazy(() => import(
  '../Views/HomeView/HomeView' /* webpackChunkName: 'homeView' */
),);
const ReportView = lazy(() => import(
  './Report/Report' /* webpackChunkName: 'reportView' */
),);

function App() {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(authOperations.fetchCurrentUser()); }, [dispatch]);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  // useSelector(authSelectors.getIsFetchingCurrent);
  // const isFetchingCurrentUser = false;
  console.log('App');
  return !isFetchingCurrentUser && (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Navigate replace to="/home" />
          }
          />
          <Route
            path="/home"
            element={(
              <PrivateRoute redirectTo="/login">
                <HomeView />
              </PrivateRoute>
          )}
          />
          <Route
            path="/reports"
            element={(
              <PrivateRoute redirectTo="/login">
                <ReportView />
              </PrivateRoute>
          )}
          />
          <Route
            path="/login"
            element={(
              <PublicRoute restricted redirectTo="/home">
                <AuthView />
              </PublicRoute>
          )}
          />
          <Route
            path="/google-redirect"
            element={(
              <PublicRoute restricted redirectTo="/home">
                <GoogleRedirectView />
              </PublicRoute>
          )}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

// import { lazy, useEffect } from 'react';
// import { useDispatch, /* useSelector */ } from 'react-redux';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { authOperations } from '../redux/auth';
// import PublicRoute from '../routes/PublicRoute/PublicRoute';
// // import PrivateRoute from '../routes/PrivatRoute/PrivatRoute';
// import ExampleView from '../Views/ExampleView';
// import ChartReportView from '../Views/ChartReportView';
// import AuthView from '../Views/AuthView';
// import Layout from './Layout';
// import Report from './Report/Report';
// import HomeView from '../Views/HomeView/HomeView';

// const GoogleRedirectView = lazy(() => import(
//   '../Views/GoogleRedirectView'
// ),);

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);

//   return (
//     <>
//       <Layout />
//       <Routes>
//         <PublicRoute
//           path="/google-redirect"
//           restricted
//           redirectTo="/home"
//         >
//           <GoogleRedirectView />
//         </PublicRoute>
//         <PublicRoute exact path="/login" restricted redirectTo="/home">
//           <AuthView />
//         </PublicRoute>
//         <Route path="/home" element={<HomeView />} />
//         <Route path="example" element={<ExampleView />} />
//         <Route path="chart-report" element={<ChartReportView />} />
//         <Route path="*" element={<Navigate replace to="/" />} />
//         <Route path="report" element={<Report />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
