import React from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';


class DashNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}>
        <span style={{width: '100%', height: '2px', backgroundColor: '#cee61f'}}></span>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#4DC1EA'
        }}>
          <Link to="/dashboard/"><FlatButton label="Dashboard" style={{color: 'white'}} hoverColor="#2b3c55"/></Link>
          <Link to="/dashboard/schedule"><FlatButton label="Schedule" style={{color: 'white'}} hoverColor="#2b3c55"/></Link>
          <Link to="/dashboard/trainers"><FlatButton label="Trainers" style={{color: 'white'}} hoverColor="#2b3c55"/></Link>
          <Link to="/dashboard/profile"><FlatButton label="Profile" style={{color: 'white'}} hoverColor="#2b3c55"/></Link>
        </div>
      </div>
    );

  }
}

export default DashNav;