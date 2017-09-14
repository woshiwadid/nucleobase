import React from 'react';
import $ from 'jquery';
import { Route, Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Main from './main';
import Create from './create';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: ''
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/session',
      type: 'GET',
      success: (data) => {
        this.setState({
          session: data
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  render() {

    const { session } = this.state;

    return (

      <div style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#DCD8D7'
      }}>

        <Navbar session={session}/>

        <Route path={`${this.props.match.url}/create`} component={Create}/>
        <Route exact path={`${this.props.match.url}`} component={Main}/>

      </div>
      
    );

  }

}

export default Signup;