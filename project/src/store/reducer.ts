import { City } from '../types/city';
import { Offer } from '../types/offer';
import { cities, CityLocation } from '../constant';
import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';

type State = {
  city: City;
  offers: Offer[];
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: []
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
    });
});
