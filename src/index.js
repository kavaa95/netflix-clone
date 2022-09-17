import React from 'react';
import App from './Components/App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
