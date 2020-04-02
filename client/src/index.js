import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from "./app";

const routing = (
    <Router>
    <div>
      <App/>
    </div>
  </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))