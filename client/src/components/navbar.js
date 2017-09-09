import React from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';


const Navbar = (props) => (

  <Paper zDepth={1} style={{
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

      </div>

      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        {
          <div>
            <Link to="/signup"><FlatButton label="Signup" style={{color: 'white'}} hoverColor="#4DC1EA"/></Link>
            <span style={{width: '30px'}}></span>
            <Link to="/login"><FlatButton label="Login" style={{color: 'white'}} hoverColor="#4DC1EA"/></Link>
          </div>
        }

        
      </div>

    </div>

  </Paper>

);

export default Navbar;