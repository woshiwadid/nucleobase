import React from 'react';

import ControlPanel from './controlPanel';
import Calendar from './calendar';


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
          backgroundColor: '#e6ffff'
        }}>

          <ControlPanel />

        </div>

        <div className="col-lg-9 col-xsm-6" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          backgroundColor: '#e6ffe6', 
        }}>

          <div style={{
            height: '500px',
            minWidth: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#BEBAB9'
          }}>
            <Calendar year={this.props.year}/>
          </div>

        </div>
      </div>

    );

  }
}

export default Schedule;