import store from '../store';
import { Offer } from './offer';
import { City } from './city';
import { SortName } from './common';
import { Comment } from './comment';
import { User } from './user';
import { AuthorizationStatus } from '../constant';

export type SiteData = {
  offers: Offer[];
  favoriteOffers: Offer[];
  isOffersLoading: boolean;
  isOfferLoading: boolean;
  isFavoriteOffersLoading: boolean;
  offer: Offer | null;
  nearbyOffers: Offer[];
  comments: Comment[];
};

export type SiteProcess = {
  city: City;
  sorting: SortName;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
}


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type FavoriteAuth = Pick<Offer, 'id'> & { status: 1 | 0 };
