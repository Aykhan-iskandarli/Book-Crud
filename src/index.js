import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/global.scss"
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from "./Redux/store"



ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


