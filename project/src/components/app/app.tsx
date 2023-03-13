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
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import { Comment } from '../../types/comment';

type AppProps = {
  offers: Offer[];
  city: City;
  reviews: Comment[];
};

function App({ offers, city, reviews }: AppProps): JSX.Element {

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
              <Main
                offers={offers}
                city={city}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <Login />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={
              <Property
                offers={offers}
                reviews={reviews}
              />
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
