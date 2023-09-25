import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '@/features/store';

import App from '@/App.tsx';

import './assets/scss/index.scss';

const container = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(container);

const rootEl = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

root.render(rootEl);
