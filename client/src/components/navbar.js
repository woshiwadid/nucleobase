import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';


const Navbar = (props) => (

  <Paper zDepth={2} style={{
    height: '50px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4986A2'
  }}>
    
    <div className="col-sm-8 col-sm-offset-2" style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>

      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        overflowX: 'visible',
        fontSize: '20px',
        color: 'white'
      }}>
        TRAINER FINDER
      </div>

      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        
        {
          !props.loggedIn ?
            <span></span>
            :
            <div>
              <FlatButton href="/" label="Search" style={{color: 'white'}} hoverColor="#4DC1EA"/>
              <span style={{width: '30px'}}></span>
              <FlatButton href="/dashboard" label="Dashboard" style={{color: 'white'}} hoverColor="#4DC1EA"/>
            </div>
        }

        

      </div>

      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        {
          props.loggedIn ?
            <FlatButton href="/logout" label="Logout" style={{color: 'white'}} hoverColor="#4DC1EA"/>
            :
            <div>
              <FlatButton href="/signup" label="Signup" style={{color: 'white'}} hoverColor="#4DC1EA"/>
              <span style={{width: '30px'}}></span>
              <FlatButton href="/login" label="Login" style={{color: 'white'}} hoverColor="#4DC1EA"/>
            </div>
        }

        
      </div>

    </div>

  </Paper>

);

export default Navbar;