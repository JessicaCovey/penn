/*
    REACT SYNTAX

    var React = require('react');
    var ReactDOM = require('react-dom');

    var ReactRouter = require('react-router');
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;

    var createBrowserHistory = require('history/lib/createBrowserHistory');

// npm install history - will load required code to do push state. 
// react is set in a way that you call broweser history in function

    var h = require('./helpers'); 

// Firebase
    var Rebase = require('re-base');
    var base = Rebase.createClass('https://catchmarket.firebaseio.com/');

//  Catalyst Communicate between 2 Components that don't have a child/parent relationship
    https://github.com/tungd/react-catalyst

   var Catalyst = require('react-catalyst');
*/


/*
  ES6 Modules using ES6 Classes
*/  
import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';

/*
  Routes
*/
var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App} />
  </Router>
  )

ReactDOM.render(routes, document.querySelector('#main'));