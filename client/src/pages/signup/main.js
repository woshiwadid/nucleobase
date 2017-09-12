import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => (

  <div className="col-sm-8 col-sm-offset-2" style={{
    height: '94.8%',
    backgroundColor: '#FFFFFF'
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
      <a style={{marginRight: '15px'}} href="/auth/facebook">Facebook</a>
      <a style={{marginLeft: '15px', marginRight: '15px'}} href="/auth/google">Google</a>
      <a style={{marginLeft: '15px'}} href="/auth/twitter">Twitter</a>
    </div>
    <hr />

    <p>Already have an account? <Link to="/login">Login</Link></p>
    <p>Or go <Link to="/">home</Link>.</p>

  </div>

);

export default Main;