import React from 'react';
import $ from 'jquery';

import Navbar from '../components/navbar';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#BEBAB9'
      }}>

        <Navbar loggedIn={this.props.loggedIn}/>

        <div className="col-sm-6 col-sm-offset-3" style={{
          height: '100%',
          backgroundColor: '#DCD8D7'
        }}>

          <h1><span className="fa fa-sign-in"></span> Signup</h1>

          <form action="/signup" method="post">
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" />
            </div>

            <button type="submit" className="btn btn-warning btn-lg">Signup</button>
          </form>

          <hr />
          <div>
            Or signup with any of the following services:<br />
            <a style={{marginRight: '15px'}} href="/auth/facebook"><img src="/assets/fb-logo.png" /></a>
            <a style={{marginLeft: '15px', marginRight: '15px'}} href="/auth/google"><img style={{width: '29px'}} src="/assets/google-logo.png" /></a>
            <a style={{marginLeft: '15px'}} href="/auth/twitter"><img style={{width: '48px'}} src="/assets/twitter-logo.png" /></a>
          </div>
          <hr />

          <p>Already have an account? <a href="/login">Login</a></p>
          <p>Or go <a href="/">home</a>.</p>

        </div>

      </div>
      
    );

  }

}

export default Signup;