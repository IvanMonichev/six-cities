import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createApi } from '../services/api';
import { fetchOffers, fetchUserStatus } from './action';
import history from '../history';

const api = createApi();

const store = configureStore({
  reducer,
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
