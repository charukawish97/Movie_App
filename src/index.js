import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceworker from './Serviceworker';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceworker.unregister();


reportWebVitals();
