import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider >
        <ToastContainer />
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
