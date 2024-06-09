import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'
import { BrowserRouter as Router } from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
