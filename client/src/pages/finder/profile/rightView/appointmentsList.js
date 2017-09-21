import React from 'react';

import AppointmentEntry from './appointmentEntry';


class AppointmentsList extends React.Component {
  constructor(props) {
    super(props);
    this.purchase = this.purchase.bind(this);
  }

  purchase(e) {
    console.log('launch purchase interface');
  }

  render() {

    return (

      <div style={{height: '50%', width: '100%', backgroundColor: 'white', display: 'list', overflowY: 'scroll'}}>
        {
          this.props.appointments.map((appointment, i) => (
            appointment.receiver === null ?
              <div key={i} onClick={this.purchase}><AppointmentEntry index={i} appointment={appointment} session={this.props.session} book={this.props.book}/></div> :
              <span key={i}></span>
          ))
        }
      </div>

    );

  }
}

export default AppointmentsList;