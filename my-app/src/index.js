import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';
import MaterialUIProvider from './context/materialprovider/index';

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MaterialUIProvider>
  </BrowserRouter>,

  document.getElementById('root')
);
//TODO: add redux example : check
//TODO: add react-router-dom example


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
