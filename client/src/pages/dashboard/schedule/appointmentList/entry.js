import React from 'react';

const Entry = (props) => (

  <div style={{
    height: '20%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }}>
    {props.appointment.location}
  </div>

);

export default Entry;