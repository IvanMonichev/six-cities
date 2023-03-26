import { SiteData } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../constant';
import {
  fetchComments,
  fetchNearbyOffers,
  fetchOffer,
  fetchOffers,
  postComment,
} from '../action';

const initialState: SiteData = {
  offers: [],
  isOffersLoading: false,
  isOfferLoading: false,
  offer: null,
  nearbyOffers: [],
  comments: [],
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
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
