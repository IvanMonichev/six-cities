import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthorizationStatus, cities, CityLocation, Sorting } from '../constant';
import { createReducer } from '@reduxjs/toolkit';
import { fetchOffers, fetchUserStatus, loginUser, setCity, setSorting } from './action';
import { SortName } from '../types/common';
import { User } from '../types/user';

type State = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
  sorting: SortName;
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  isOffersLoading: false,
  sorting: Sorting.Popular,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: ''
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload.email;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});
