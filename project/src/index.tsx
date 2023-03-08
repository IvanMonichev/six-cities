// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mock/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers={offers} />
  </React.StrictMode>,
);
