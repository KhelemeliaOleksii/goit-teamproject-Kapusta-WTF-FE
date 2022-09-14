import {
  Routes, Route, Navigate, useSearchParams
} from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import PrivateRoute from '../routes/PrivatRoute/PrivatRoute';
import PublicRoute from '../routes/PublicRoute/PublicRoute';
import Loader from './Loader/Loader';
import { googleLogIn } from '../redux/auth/auth-slice';

import Layout from './Layout';

const AuthView = lazy(() => import(
  '../Views/AuthView/AuthView' /* webpackChunkName: 'authView' */
),);
const HomeView = lazy(() => import(
  '../Views/HomeView/HomeView' /* webpackChunkName: 'homeView' */
),);
const ReportView = lazy(() => import(
  '../Views/ReportView/Report' /* webpackChunkName: 'reportView' */
),);

function App() {
  const dispatch = useDispatch();

  // to do: check if user have used googleauth
  const [searchParams] = useSearchParams();
  const googleToken = searchParams.get('token');
  useEffect(() => {
    if (googleToken) {
      dispatch(googleLogIn(googleToken));
    }
  }, [dispatch, googleToken]);

  // to do: check is current user available
  useEffect(() => { dispatch(authOperations.fetchCurrentUser()); }, [dispatch]);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
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
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
