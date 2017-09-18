import Affiliations from './components/Affiliations.js';
import AJAX from '../../../ajax.js';
import React from 'react';

class Trainers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trainers: [],
      trainees: [],
      session: {}
    };
  }

  componentWillMount() {

    var trainees = [];
    var present = false;

    AJAX.get('/session', {}, (session)=>{
      this.setState({
        session: session
      }, () => {
        
        // if trainer get a list of all my users => appointmemts table
        if ( this.state.session.type === 'trainer' ) {
          
          // appointments sender = trainer
          AJAX.get('/appointments', {sender: this.state.session.id}, (appointments) => {
            
            // for each appointement get profile of the receiver
            appointments.forEach((appointment, i) => {
              


              // Check if trainee not allready in trainees array
              present = false;

              for (var i = 0; i < this.state.trainees.length; i++){
                if (appointment.receiver.id === this.state.trainees.id){
                  present = true;
                }
              }

              if (present === false){
                this.state.trainees.push(appointment.receiver);
                this.forceUpdate();
              }

            });  
          });

        // if user get a list of all my trainer  
        } else {

          // appointments receiver = trainee
          AJAX.get('/appointments', {receiver: this.state.session.id}, (appointments) => {
            
            // for each appointement get profile of the sender
            appointments.forEach((appointment, i) => {
              

              // Check if trainee not allready in trainees array
              present = false;

              for (var i = 0; i < this.state.trainers.length; i++){
                if (appointment.sender.id === this.state.trainers.id){
                  present = true;
                }
              }

              if (present === false){
                this.state.trainers.push(appointment.sender);
                this.forceUpdate();
              }


            });  
          });
        }
      });
    });
  }


  render() {
    return (
      <div>
        <Affiliations trainers={this.state.trainers} trainees={this.state.trainees}/>
      </div>
    );
  }
}

export default Trainers;