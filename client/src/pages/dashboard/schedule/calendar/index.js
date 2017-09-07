import React from 'react';

import Calendar from './calendar.js';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        <div id="schedule nav" style={{
          height: '10%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#4DC1EA'
        }}> 
          <span style={{paddingLeft: '15px'}}>{'<'}</span>
          <span style={{paddingRight: '15px'}}>{'>'}</span>
        </div>

        <div>
          This will be a results list
        </div>

      </div>

    );

  }
}

export default Schedule;