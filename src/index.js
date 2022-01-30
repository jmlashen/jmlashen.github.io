import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "./styles/custom.scss"
// {deconstrucing the object} around main import bypasses the default
// deconstructing App from this one piece
// if we have five other exports in App.js we can target specific ones here


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  // where in the html to place this react component
);


