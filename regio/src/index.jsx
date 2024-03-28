import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
const Root = ReactDOM.createRoot(document.getElementById("Root"));

Root.render(
  <Provider store={Store}>
    <App/>
  </Provider>
);
