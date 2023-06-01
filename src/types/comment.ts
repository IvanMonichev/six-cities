import { Offer } from './offer';

type User = {
  id: number;
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

export type Comment = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
};

export type CommentAuth = Pick<Comment, 'comment' | 'rating'> & Pick<Offer, 'id'>;
