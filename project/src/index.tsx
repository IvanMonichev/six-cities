import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers, city } from './mock/offers';
import { HelmetProvider } from 'react-helmet-async';
import { comments } from './mock/comments';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HelmetProvider >
      <App offers={offers} city={city} reviews={comments} />
    </HelmetProvider>
  </React.StrictMode>,
);
