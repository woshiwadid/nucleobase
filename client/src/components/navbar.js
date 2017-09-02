import React from 'react';

import FlatButton from 'material-ui/FlatButton';


const Navbar = (props) => (

  <div style={{
    height: '4%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray'
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
        <FlatButton href="/signup" label="Signup" style={{color: 'white'}}/>
        <span style={{width: '30px'}}></span>
        <FlatButton href="/login" label="Login" style={{color: 'white'}}/>
      </div>

    </div>

  </div>

);

export default Navbar;