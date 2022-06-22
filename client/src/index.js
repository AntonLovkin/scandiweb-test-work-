import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { configureStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

import 'modern-normalize/modern-normalize.css';
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
