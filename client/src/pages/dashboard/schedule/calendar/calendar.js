import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);

    return (

      <div style={{
        height: '15%',
        display: 'flex',
        flexDirection: 'row'
      }}>
        {
          // this.props.week.map((day, i) => {
          //   return day !== null ?
          //     <div key={i} style={{height: '100%', width: '60px', backgroundColor: 'white'}}>{day.number}</div> :
          //     <div key={i} style={{height: '100%', width: '60px', backgroundColor: 'black'}}></div>
          // })
        }
      </div>

    );

  }
}

export default Calendar;