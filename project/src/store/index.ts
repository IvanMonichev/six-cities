import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { fetchOffers, fetchUserStatus } from './action';
import history from '../history';
import { rootReducer } from './root-reducer';

const api = createApi();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
        history
      }
    },
  }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchOffers());

export default store;
