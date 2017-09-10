import React from 'react';

import { parseDateFull } from './../../../../helpers/parseDate';
import { parseTime } from './../../../../helpers/parseTime';


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { date, to, location, price } = this.props.appointment;
    const From = this.props.appointment.from;

    return (

      <div className="col-lg-8 col-sm-8" style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#BEBAB9',
        padding: '0'
      }}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '15px'
        }}>
          {
            date === undefined ? 
              'Select an appointment' :
              <span style={{fontSize: '20px'}}>{`Date: ${parseDateFull(date)}`}</span>
          }
          <span style={{color: 'gray'}}>{`From: ${From === undefined ? '--' : parseTime(From)} To: ${to === undefined ? '--' : parseTime(to)}`}</span>
        </div>

        <div style={{
          height: '200px',
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px 0 30px 0'
        }}>
          {
            this.props.appointment.date === undefined ?
              <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/658625-200.png' style={{height: '100%'}}/> :
              <img src='https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg' style={{height: '100%'}}/>
          }
        </div>
        <span style={{paddingBottom: '15px'}}>Rating:</span>

        <span>another thing!?!?</span>

      </div>

    );

  }
}

export default Preview;