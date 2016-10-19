import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css';
import './reset.css';

// Register service worker
var reg;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js').then(() => {
      return navigator.serviceWorker.ready;
    })
    .then((serviceWorkerRegistration) => {
      reg = serviceWorkerRegistration;
      console.log('Service Worker is ready :', reg);
    })
    .catch((error) => {
      console.log('Service Worker Error :', error);
    });
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
