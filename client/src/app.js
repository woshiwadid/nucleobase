import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Finder from './pages/finder';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/dashboard';


const path = window.location.pathname.split('/');

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentWillMount() {
    $.ajax({
      type: 'GET',
      url: '/verify',
      success: (data) => {
        console.log('logged in: ', data.message);
        this.setState({
          loggedIn: data.message
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {

    const pages = {
      '': <Finder path={path} loggedIn={this.state.loggedIn}/>,
      'login': <Login path={path} loggedIn={this.state.loggedIn}/>,
      'signup': <Signup path={path} loggedIn={this.state.loggedIn}/>,
      'dashboard': <Dashboard path={path} loggedIn={this.state.loggedIn}/>
    };

    return (
      <div style={{
        height: '100%',
        width: '100%'
      }}>
        {pages[path[1]]}
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <Root />
  </MuiThemeProvider>, 
  document.getElementById('root')
);
