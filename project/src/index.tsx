import React from 'react';
import ReactDOM from 'react-dom/index';
import App from './components/app/app';
import { offers, city } from './mock/offers';

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} city={city} />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement,
);
