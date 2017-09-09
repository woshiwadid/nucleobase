import React from 'react';

import ListComponent from './list';
import Preview from './preview';


class ApptList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '100%',
        minWidth: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div className="row" style={{
          width: '100%',
          height: '600px',
        }}>

          <div className="col-lg-4 col-sm-4" style={{
            height: '100%',
            backgroundColor: '#DCD8D7'
          }}>
            <ListComponent />
          </div>

          <Preview />

        </div>
      </div>

    );

  }
}

export default ApptList;


// Will need a function to be able to lift the currently selected appointment window into the state to pass it down to the preview component