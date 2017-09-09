import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, hashHistory } from 'react-router-dom';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Finder from './pages/finder';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/dashboard';

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Switch>
        <Route exact path="/" component={Finder} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </MuiThemeProvider>, 
  document.getElementById('root')
);