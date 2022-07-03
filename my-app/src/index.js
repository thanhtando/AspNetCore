import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import App from './App';
// import RootProvider from './provider';
// import FullApp from './FullApp/index';
import FullAppUi from './FullAppUi/index';
import FsCRUD from './FullAppUi/firestoreCRUD';
import CRUD from './FullAppUi/CRUD';
import MyApp from './FullAppUi/MTRRFirestore';
import RootProvider from './root/provider';

ReactDOM.render(

  <RootProvider>
    <MyApp/>
  </RootProvider>
  

  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
