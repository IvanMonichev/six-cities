import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CityName } from '../types/city';
import { Offer } from '../types/offer';
import { SortName } from '../types/common';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../constant';
import { User, UserAuth } from '../types/user';
import ApiToken from '../services/api-token';

type Extra = {
  api: AxiosInstance,
  history: History,
}

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_SORTING: 'sorting/set',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  FETCH_OFFER: 'offer/fetch'
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
export const fetchOffers = createAsyncThunk<Offer[], undefined, { extra: Extra }>(
  Action.FETCH_OFFERS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  });

export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra: api }) => {
    const { data } = await api.get<User>(ApiRoute.Login);

    return data;
  }
);

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { extra: Extra }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<User>(ApiRoute.Login, { email, password });
    const { token } = data;

    ApiToken.save(token);
    window.history.back();
    return email;
  }
);


