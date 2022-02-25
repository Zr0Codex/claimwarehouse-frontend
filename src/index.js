import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
// import '../node_modules/antd/dist/antd.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss'
import AppRouter from './Route';
import './index.css'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  , 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
