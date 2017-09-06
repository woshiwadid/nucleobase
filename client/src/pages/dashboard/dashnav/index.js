import React from 'react';

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
          backgroundColor: '#111822'
        }}>
          <FlatButton href="/dashboard/" label="Dashboard" style={{color: 'white'}} hoverColor="#2b3c55"/>
          <FlatButton href="/dashboard/schedule" label="Schedule" style={{color: 'white'}} hoverColor="#2b3c55"/>
          <FlatButton href="/dashboard/trainers" label="Trainers" style={{color: 'white'}} hoverColor="#2b3c55"/>
          <FlatButton href="/dashboard/profile" label="Profile" style={{color: 'white'}} hoverColor="#2b3c55"/>
        </div>
      </div>
    );

  }
}

export default DashNav;