import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './App'
import Appmain from './containers/Appmain';


ReactDOM.render(
  <React.StrictMode>
  <Appmain/>
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
reportWebVitals(console.log);


//If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital/
