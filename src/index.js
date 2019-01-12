import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/Container';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
