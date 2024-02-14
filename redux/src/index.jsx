import React from 'react';
import ReactDOM from 'react-dom';
import Reducer from './reducer';
import { Provider } from 'react-redux';
import App from './App';
import { legacy_createStore } from 'redux';

const Store = legacy_createStore(Reducer);
const Root = ReactDOM.createRoot(document.getElementById("Root"));

Root.render(
  <Provider store={Store}>
    <App/>
  </Provider>
);
