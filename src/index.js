import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers';

import './styles/main-styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore({
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: {
        warnAfter: 150
      },
      serializableCheck: {
        warnAfter: 150
      }
    })
  ],
  reducer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
