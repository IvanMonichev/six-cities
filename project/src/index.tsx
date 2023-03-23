import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { city } from './mock/offers';
import { HelmetProvider } from 'react-helmet-async';
import { comments } from './mock/comments';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider >
        <App city={city} reviews={comments} />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
