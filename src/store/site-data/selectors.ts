import { Comparator, MAX_COMMENTS, StoreSlice, SubmitStatus } from '../../constant';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { Comment } from '../../types/comment';
import { getCity, getSorting } from '../site-process/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const getIsOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isOffersLoading;
export const getOffers = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.offers;
export const getIsOfferLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isOfferLoading;
export const getIsFavoriteOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFavoriteOffersLoading;
export const getFavoriteOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] => SITE_DATA.favoriteOffers;
export const getOffer = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer | null => SITE_DATA.offer;
export const getNearbyOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] => SITE_DATA.nearbyOffers;
export const getComments = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Comment[] => SITE_DATA.comments;
export const getCommentStatus = ({ [StoreSlice.SiteData]: SITE_DATA }: State): SubmitStatus => SITE_DATA.commentStatus;
export const selectOffers = createSelector(
  [getOffers, getCity, getSorting],
  (offers, city, sorting) => offers.filter((offer) => offer.city.name === city.name).sort(Comparator[sorting])
);

export const selectComments = createSelector(
  [getComments],
  (comments) => [...comments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, MAX_COMMENTS)
);
