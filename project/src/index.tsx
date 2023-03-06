// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const CARDS_COUNT = 7;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersCount={CARDS_COUNT} />
  </React.StrictMode>,
);
