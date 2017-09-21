import React from 'react';

const Category = (props) => (

  <div style={{
    height: '125px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <span style={{fontStyle: 'italic', color: '#999999', padding: '10px 0 0 10px'}}>{props.type}</span>
      <p style={{padding: '10px 0 0 30px'}}>
        {props.text}
      </p>
    </div>
  </div>

);

export default Category;