import React from 'react';

import ControlPanel from './controlPanel';
import ApptList from './appointmentList';


class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{height: '96%', width: '100%'}}>
        
        <div className="col-lg-3 col-xsm-6" style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <ControlPanel />
        </div>

        <div className="col-lg-9 col-xsm-6" style={{
          height: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly', 
          padding: '0'
        }}>
          <ApptList />
        </div>

        <div className="row" style={{
          margin: '0',
          minHeight: '295px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#111822'
        }}>
          Some content down here
        </div>
      </div>

    );

  }
}

export default Schedule;