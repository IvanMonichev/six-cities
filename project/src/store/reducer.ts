import { City } from '../types/city';
import { Offer } from '../types/offer';
import { cities, CityLocation, Sorting } from '../constant';
import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setSorting } from './action';
import { SortName } from '../types/common';

type State = {
  city: City;
  offers: Offer[];
  sorting: SortName;
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
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
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
