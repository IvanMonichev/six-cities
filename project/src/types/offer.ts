export type Offer = {
  id: number;
  price: number;
  rating: number;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  city: {
    name: string;
  };
}
