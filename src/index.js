import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appWithHelmet = (
  <React.StrictMode>
    <Helmet>
    <meta name="description" content="Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment.
    The restaurant features a locally-sourced menu with daily specials"/>
    <meta property="og:title" content="Little Lemon Restaurant"/>
    <meta property="og:description" content="Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment.
    The restaurant features a locally-sourced menu with daily specials"/>
    <meta property="og:image" content="./assets/Logo.png"/>
    </Helmet>
    <App />
  </React.StrictMode>



)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
