import { Offer } from '../types/offer';


export const offers: Offer[] = [
  {
    id: 1,
    price: 200,
    rating: 4.4,
    title: 'Beautiful & luxurious apartment at great location',
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/apartment-01.jpg',
    type: 'apartment',
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 2,
    price: 20,
    rating: 3.4,
    title: 'A apartment at great location beautiful',
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-02.jpg',
    type: 'room',
    city: {
      name: 'Paris'
    }
  },
  {
    id: 3,
    price: 100,
    rating: 5.0,
    title: 'Great location apartment at great location',
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-03.jpg',
    type: 'house',
    city: {
      name: 'Paris'
    }
  },
  {
    id: 4,
    price: 100,
    rating: 3.2,
    title: 'Luxurious & beautiful apartment at great location',
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/apartment-01.jpg',
    type: 'hotel',
    city: {
      name: 'Amsterdam'
    }
  },
];
