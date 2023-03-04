import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const rentalOffers = 100;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      rentalOffers={rentalOffers}
    />
  </React.StrictMode>,
);
