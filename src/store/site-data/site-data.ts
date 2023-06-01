import { SiteData } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice, SubmitStatus } from '../../constant';
import {
  fetchComments, fetchFavoriteOffers,
  fetchNearbyOffers,
  fetchOffer,
  fetchOffers,
  postComment, postFavorite,
} from '../action';

const initialState: SiteData = {
  offers: [],
  isOffersLoading: false,
  isOfferLoading: false,
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
  offer: null,
  nearbyOffers: [],
  comments: [],
  commentStatus: SubmitStatus.Still,
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoriteOffersLoading = true;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoriteOffers.rejected, (state, action) => {
        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postComment.rejected, (state) => {
        state.commentStatus = SubmitStatus.Rejected;
      })
      .addCase(postFavorite.fulfilled, (state, action) => {
        const updateOffer = action.payload;
        state.offers = state.offers.map((offer) => offer.id === updateOffer.id ? updateOffer : offer);

        if (state.offer && state.offer.id === updateOffer.id) {
          state.offer = updateOffer;
        }

        if (updateOffer.isFavorite) {
          state.favoriteOffers = state.favoriteOffers.concat(updateOffer);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((favoriteOffer) => favoriteOffer.id !== updateOffer.id);
        }
      });
  }
});
