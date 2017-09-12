import React from 'react';
import { Route, Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Main from './main';
import Create from './create';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#DCD8D7'
      }}>

        <Navbar />

        <Route path={`${this.props.match.url}/create`} component={Create}/>
        <Route exact path={`${this.props.match.url}`} component={Main}/>

      </div>
      
    );

  }

}

export default Signup;