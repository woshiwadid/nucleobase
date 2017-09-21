import React from 'react';

import AppointmentsList from './appointmentsList';
import Reviews from './reviews';

import AJAX from '../../../../ajax';


class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      booked: false,
      reviews: [],
      loading: false
    };
    this.bookAppointment = this.bookAppointment.bind(this);
  }

  componentWillMount() {
    let optionsA = {
      sender: this.props.profile.id
    };
    let optionsB = {
      trainer_id: this.props.profile.id
    };
    
    AJAX.get('/appointments', optionsA, (appointments) => {
      appointments.sort(function(a, b) {
        return Date.parse(a.date) - Date.parse(b.date);
      });
      this.setState({
        appointments,
        loading: false
      });
    });
    AJAX.get('/reviews', optionsB, (reviews) => {
      reviews.forEach(review => {
        let reviewOption = {
          user_id: review.user_id,
          trainer_id: review.trainer_id
        };
        AJAX.get('/ratings', reviewOption, (rating) => {
          console.log('rating per review', review, rating);
        });
      });
      // this.setState({
      //   reviews
      // }, console.log('reviews found and set: ', reviews));
    });
  }

  bookAppointment() {
    let optionsA = {
      sender: this.props.profile.id
    };
    this.setState({
      loading: true
    });
    AJAX.get('/appointments', optionsA, (appointments) => {
      appointments.sort(function(a, b) {
        return Date.parse(a.date) - Date.parse(b.date);
      });
      this.setState({
        appointments,
        loading: false
      });
    });
  }

  render() {

    const { loading, appointments, reviews } = this.state;

    return (

      <div className="col-lg-6 col-sm-12" style={{height: '100%', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

        <div style={{
          height: '50px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <span style={{fontSize: '20px'}}>TRAINER APPOINTMENTS</span>
        </div>

        {
          loading ?
            <h1>Loading</h1> :
            <AppointmentsList appointments={appointments} session={this.props.session} book={this.bookAppointment}/>
        }

        <span style={{height: '30px'}}></span>

        <Reviews reviews={reviews} />

      </div>

    );

  }
}

export default Appointments;