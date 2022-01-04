import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import "./styles/custom.scss"
// {deconstrucing the object} around main import bypasses the default
// deconstructing App from this one piece
// if we have five other exports in App.js we can target specific ones here


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  // where in the html to place this react component
);


