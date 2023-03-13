import { Comment } from '../types/comment';

export const comments: Comment[] = [
  {
    'id': 1,
    'user': {
      'id': 13,
      'isPro': false,
      'name': 'Zak',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/4.jpg'
    },
    'rating': 3,
    'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    'date': '2023-02-18T07:31:21.417Z'
  },
  {
    'id': 2,
    'user': {
      'id': 17,
      'isPro': false,
      'name': 'Emely',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/8.jpg'
    },
    'rating': 4,
    'comment': 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    'date': '2023-02-18T07:31:21.417Z'
  },
];
