import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Finder from './pages/finder';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/dashboard';


const path = window.location.pathname.split('/');

const pages = {
  '': <Finder path={path}/>,
  'login': <Login path={path}/>,
  'signup': <Signup path={path}/>,
  'dashboard': <Dashboard path={path}/>
};

ReactDOM.render(
  <MuiThemeProvider>
    {pages[path[1]]}
  </MuiThemeProvider>, 
  document.getElementById('root')
);
