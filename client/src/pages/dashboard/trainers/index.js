import Affiliations from './components/Affiliations.js';
import Messages from './components/Messages.js';
import AJAX from '../../../ajax.js';
import React from 'react';

class Trainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      trainers: [],
      trainees: [],
      session: {}
    };
  }

  componentWillMount() {
    AJAX.get('/session', {}, (session)=>{
      this.setState({session: session}, () => {
        if ( this.state.session.type === 'trainer' ) {
          AJAX.get('/appointments', {sender: this.state.session.id}, (appointments) => {
            var trainees = {};

            appointments.forEach((appointment) => {
              if (appointment.receiver && !trainees[appointment.receiver.id]) {
                trainees[appointment.receiver.id] = true;

                this.state.trainees.push(appointment.receiver);
              }
            });

            this.setState({
              trainees: this.state.trainees,
            });
          });
        } else {
          AJAX.get('/appointments', {receiver: this.state.session.id}, (appointments) => {
            var trainers = {};

            appointments.forEach((appointment) => {
              if (appointment.sender && !trainers[appointment.sender.id]) {
                trainers[appointment.sender.id] = true;

                this.state.trainers.push(appointment.sender);
              }

              this.setState({
                trainers: this.state.trainers,
              });
            });
          });
        }
      });
    });
  }

  // updateMessage(event) {
  //   this.setState({message: event.target.value});
  // }

  // submitMessage(event) {
  //   if (event.type === 'click' || (event.type === 'keypress' && event.key === 'Enter')) {
  //     AJAX.post('/messages', {
  //       sender: this.state.session.id,
  //       receiver: this.state.selected.id,
  //       message: this.state.message
  //     }, (message) => {
  //       this.setState({message: ''}, () => {
  //         this.getMessages();
  //       });
  //     });
  //   }
  // }

  render() {
    const inputElement = () => (
      <div>
        <input value={this.state.message} onKeyPress={this.submitMessage.bind(this)} onChange={this.updateMessage.bind(this)}/>
        <button onClick={this.submitMessage.bind(this)}>submit</button>
      </div>
    )

    return (
      <div>
        
        <Affiliations
          session={this.state.session}
          trainers={this.state.trainers}
          trainees={this.state.trainees}
        />
      </div>
    );
  }
}

export default Trainers;