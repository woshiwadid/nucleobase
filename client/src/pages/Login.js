import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/navbar';

class Login extends React.Component {
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

        <Navbar />

        <div className="col-sm-8 col-sm-offset-2" style={{
          height: '100%',
          backgroundColor: '#DCD8D7'
        }}>

          <h1><span className="fa fa-sign-in"></span> Login</h1>

          <form action="/login" method="post">
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" />
            </div>

            <button type="submit" className="btn btn-lg" style={{backgroundColor: '#FDED01'}}>Login</button>
          </form>

          <hr />
          <div>
            {/* All of these buttons will have to be re-made */}
            Or login with any of the following services:<br />
            <a style={{marginRight: '15px'}} href="/auth/facebook">Facebook</a>
            <a style={{marginLeft: '15px', marginRight: '15px'}} href="/auth/google">Google</a>
            <a style={{marginLeft: '15px'}} href="/auth/twitter">Twitter</a>
          </div>
          <hr />

          <p>Need to sign up for an account? <Link to="/signup">Signup</Link></p>
          <p><Link to="/">home</Link></p>

        </div>      

      </div>

    );

  }

}

export default Login;