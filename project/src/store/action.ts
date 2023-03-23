import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CityName } from '../types/city';
import { Offer } from '../types/offer';
import { SortName } from '../types/common';
import axios, { AxiosInstance } from 'axios';
import { ApiRoute } from '../constant';
import { User, UserAuth } from '../types/user';
import ApiToken from '../services/api-token';

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_SORTING: 'sorting/set',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login'
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
export const fetchOffers = createAsyncThunk<Offer[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_OFFERS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  });

export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: AxiosInstance }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra: api }) => {
    const { data } = await axios.get<User>(ApiRoute.Login);

    return data;
  }
);

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { extra: AxiosInstance }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra: api }) => {
    const { data } = await axios.post<User>(ApiRoute.Login, { email, password });
    const { token } = data;

    ApiToken.save(token);
    window.history.back();
    return email;
});
