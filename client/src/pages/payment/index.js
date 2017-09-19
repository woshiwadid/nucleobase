import React from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import $ from 'jquery';
 
export default class Payment extends React.Component {
  constructor(props) {  
    super(props);
    this.state ={
      paid: false,
      paymentFailed: false
    };

  };

  onToken (token) {
    var payment = this;
    $.ajax({
      url: '/charge',
      method: 'POST',
      data: {token:token},
      success: () => {
        console.log('success')
        payment.setState({
          paid: !payment.state.paid,
          paymentFailed: true 
        })
      },
      error: () => {
        console.log('error')
        Payment.setState({
          paymentFailed: true
        })
      }
    });
  };
 
  render() {
    if (this.state.paid) {
      return <span>Thank you for you payment</span>
    } else {
      return (
        <div>
          {this.state.paymentFailed ? <span>Please try again</span> : <span></span>}
          <StripeCheckout
            name='Trainer Finder'
            description='Looking forward to meet you!'
            token={this.onToken.bind(this)}
            amount={100}
            currency="USD"
            stripeKey="pk_test_qFuSdzDsL4hRDxF1tFzQq3bR"
            // billingAddress={true}
          />
          
        </div>
      );
    }
  };
};