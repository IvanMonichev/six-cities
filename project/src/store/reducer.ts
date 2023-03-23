import { City } from '../types/city';
import { Offer } from '../types/offer';
import { cities, CityLocation, Sorting } from '../constant';
import { createReducer } from '@reduxjs/toolkit';
import { fetchOffers, setCity, setSorting } from './action';
import { SortName } from '../types/common';

type State = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
  sorting: SortName;
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  isOffersLoading: false,
  sorting: Sorting.Popular,
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
    });
});
