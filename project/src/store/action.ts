import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CityName } from '../types/city';
import { Offer } from '../types/offer';
import { SortName } from '../types/common';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../constant';

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_SORTING: 'sorting/set',
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
export const fetchOffers = createAsyncThunk(
  Action.FETCH_OFFERS,
  async (_, thunkApi) => {
    const axios = thunkApi.extra as AxiosInstance;
    const { data } = await axios.get<Offer[]>(ApiRoute.Offers);

    return data;
  });
