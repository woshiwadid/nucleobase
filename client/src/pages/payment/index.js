import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';

import AJAX from '../../ajax';
 
export default class Payment extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      paid: false,
      paymentFailed: false
    };
  }

  onToken (token) {
    var payment = this;
    $.ajax({
      url: '/charge',
      method: 'POST',
      data: {token: token, price: this.props.appointment.price * 100},
      success: () => {
        let options = {
          id: this.props.appointment.id,
          receiver: this.props.sessionID
        };
        AJAX.put('/appointments', options, (appointment) => {
          console.log('appointment updated: ', appointment);
          payment.setState({
            paid: !payment.state.paid,
            paymentFailed: true 
          }, this.props.book());
        });
      },
      error: () => {
        console.log('error');
        Payment.setState({
          paymentFailed: true
        });
      }
    });
  }
 
  render() {

    console.log('props on payment', this.props);

    if (this.state.paid) {
      return <span>Thank you for you payment</span>;
    } else {
      return (
        <div>
          {this.state.paymentFailed ? <span>Please try again</span> : <span></span>}
          <StripeCheckout
            name='Trainer Finder'
            description='Looking forward to meet you!'
            token={this.onToken.bind(this)}
            amount={this.props.appointment.price * 100}
            currency="USD"
            stripeKey="pk_test_qFuSdzDsL4hRDxF1tFzQq3bR"
            billingAddress={true}
          />
          
        </div>
      );
    }
  }
}