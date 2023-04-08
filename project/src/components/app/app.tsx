import Main from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constant';
import Layout from '../layout/layout';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../../pages/not-found/not-found';
import Head from '../head/head';

function App(): JSX.Element {

  return(
    <BrowserRouter>
      <Head />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={
              <Main />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute restrictedFor={AuthorizationStatus.Auth} redirectTo={AppRoute.Root}>
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute restrictedFor={AuthorizationStatus.Auth} redirectTo={AppRoute.Root}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={
              <Property />
            }
          />
          <Route
            path="*"
            element={
              <NotFound/>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
