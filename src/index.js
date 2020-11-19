import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './state/store';
import reportWebVitals from './reportWebVitals';
import { AppRouter } from './routers/AppRouter';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
