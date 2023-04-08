import type { History } from 'history';
import type { AxiosInstance, AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { ApiRoute, AppRoute, HttpCode } from '../constant';
import { User, UserAuth } from '../types/user';
import ApiToken from '../services/api-token';
import { Comment, CommentAuth } from '../types/comment';
import { FavoriteAuth } from '../types/state';

type Extra = {
  api: AxiosInstance;
  history: History;
}

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  FETCH_FAVORITE_OFFERS: 'offers/fetch-favorites',
  FETCH_USER_STATUS: 'user/fetch-status',
  FETCH_OFFER: 'offer/fetch',
  FETCH_NEARBY_OFFERS: 'offers/fetch-nearby',
  FETCH_COMMENTS: 'offer/fetch-comments',
  SET_SORTING: 'sorting/set',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
  POST_COMMENT: 'offer/post-comment',
  POST_FAVORITE: 'offer/post-favorite',
};

export const fetchOffers = createAsyncThunk<Offer[], undefined, { extra: Extra }>(
  Action.FETCH_OFFERS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  });

export const fetchUserStatus = createAsyncThunk<UserAuth['email'], undefined, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    const { api } = extra;

    try {
      const { data } = await api.get<User>(ApiRoute.Login);
      return data.email;

    } catch (err) {
      const axiosError = err as AxiosError;

      if (axiosError.response?.status === HttpCode.NoAuth) {
        ApiToken.drop();
      }

      return Promise.reject(err);
    }
  }
);

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { extra: Extra }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post<User & { token: string }>(ApiRoute.Login, { email, password });
    const { token } = data;

    ApiToken.save(token);
    history.back();

    return email;
  }
);

export const logoutUser = createAsyncThunk<void, undefined, { extra: Extra }>(
  Action.LOGOUT_USER,
  async (_, { extra }) => {
    const { api } = extra;
    await api.delete(ApiRoute.Logout);

    ApiToken.drop();
  }
);

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], { extra: Extra }>(
  Action.FETCH_OFFER,
  async (id, { extra }) => {
    const { api, history } = extra;

    try {
      const { data } = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);

      return data;
    } catch (err) {
      const axiosError = err as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }

      return Promise.reject(err);
    }
  }
);

export const fetchFavoriteOffers = createAsyncThunk<Offer[], undefined, { extra: Extra }>(
  Action.FETCH_FAVORITE_OFFERS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Offer[]>(ApiRoute.Favorite);

    return data;
  }
);

export const fetchNearbyOffers = createAsyncThunk<Offer[], Offer['id'], { extra: Extra }>(
  Action.FETCH_NEARBY_OFFERS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Offer[]>(`${ApiRoute.Offers}/${id}/nearby`);

    return data;
  }
);

export const fetchComments = createAsyncThunk<Comment[], Offer['id'], { extra: Extra }>(
  Action.FETCH_COMMENTS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Comment[]>(`${ApiRoute.Comments}/${id}`);

    return data;
  }
);

export const postComment = createAsyncThunk<Comment[], CommentAuth, { extra: Extra }>(
  Action.POST_COMMENT,
  async ({ id, comment, rating }, { extra }) => {
    const { api } = extra;
    const { data } = await api.post<Comment[]>(`${ApiRoute.Comments}/${id}`, { comment, rating });

    return data;
  }
);

export const postFavorite = createAsyncThunk<Offer, FavoriteAuth, { extra: Extra}>(
  Action.POST_FAVORITE,
  async ({ id, status }, { extra }) => {
    const { api, history } = extra;

    try {
      const { data } = await api.post<Offer>(`${ApiRoute.Favorite}/${id}/${status}`);

      return data;
    } catch (err) {
      const axiosError = err as AxiosError;

      if (axiosError.response?.status === HttpCode.NoAuth) {
        history.push(AppRoute.Login);
      }

      return Promise.reject(err);
    }
  });
