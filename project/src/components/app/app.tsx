import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constant';
import Layout from '../layout/Layout';
import AuthPage from '../../pages/auth-page/auth-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';

type AppProps = {
  offersCount: number;
};

function App ({offersCount}: AppProps): JSX.Element {

  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={
              <MainPage
                offersCount={offersCount}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <AuthPage />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <FavoritesPage />
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <OfferPage />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
