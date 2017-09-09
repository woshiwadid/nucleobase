import React from 'react';

import Entry from './entry';

import appointments from './dummy';


class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="col-lg-4 col-sm-4" style={{
        height: '100%',
        backgroundColor: '#DCD8D7'
      }}>
        <div style={{
          height: '600px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflow: 'scroll'
        }}>
          {
            appointments.map((appointment, i) => (
              <Entry key={i} appointment={appointment} />
            ))
          }
        </div>
      </div>

    );

  }
}

export default List;