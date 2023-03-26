import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Comment } from '../types/comment';
import { AuthorizationStatus, cities, CityLocation, Sorting } from '../constant';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchComments,
  fetchNearbyOffers,
  fetchOffer,
  fetchOffers,
  fetchUserStatus,
  loginUser, postComment,
  setCity,
  setSorting
} from './action';
import { SortName } from '../types/common';
import { User } from '../types/user';

type State = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
  offer: Offer | null;
  sorting: SortName;
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
  nearbyOffers: Offer[];
  comments: Comment[];
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  offer: null,
  isOffersLoading: false,
  sorting: Sorting.Popular,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
  nearbyOffers: [],
  comments: [],
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
    .addCase(fetchOffer.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
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
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
});
