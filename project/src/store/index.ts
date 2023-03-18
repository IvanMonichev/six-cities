import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { setOffers } from './action';
import { offers } from '../mock/offers';


export const store = configureStore({ reducer });

store.dispatch(setOffers(offers));
