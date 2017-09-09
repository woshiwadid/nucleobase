import React from 'react';

const Entry = (props) => (

  <div key={props.key} style={{
    height: '300px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  }}>
    {props.appointment.location}
  </div>

);

export default Entry;