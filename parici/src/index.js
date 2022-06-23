import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";

import App from './App';
import reportWebVitals from './reportWebVitals';

// L'usage de ReactRouter est nécessaire  (paquet npm => npm i react-router-dom)
// Pour comprendre l'utilisation de React Router et ici de BrowserRouter, lire cette ressource:
// https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation.md 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
