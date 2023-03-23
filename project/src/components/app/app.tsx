import Main from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constant';
import Layout from '../layout/layout';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../../pages/not-found/not-found';
import Head from '../head/head';
import { City } from '../../types/city';
import { Comment } from '../../types/comment';

type AppProps = {
  city: City;
  reviews: Comment[];
};

function App({ city, reviews }: AppProps): JSX.Element {

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
              <Login />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={
              <Property
                city={city}
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
