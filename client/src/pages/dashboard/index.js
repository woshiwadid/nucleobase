import React from 'react';
import $ from 'jquery';

import Navbar from '../../components/navbar';
import DashNav from './dashnav';

import Main from './main';
import Schedule from './schedule';
import Trainers from './trainers';
import Clients from './clients';

import { buildYear } from '../../helpers/buildYear';

const pages = {
  'profile': <h1>Edit Profile View</h1>,
  'schedule': <Schedule year={buildYear(0)}/>,
  'trainers': <Trainers />,
  'clients': <h1>Clients View</h1> 
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: buildYear(0)
    };
  }

  render() {

    return (

      <div style={{
        height: '100%',
        width: '100%'
      }}>

        <Navbar loggedIn={this.props.loggedIn}/>

        <div className="col-sm-8 col-sm-offset-2" style={{
          height: '94.8%',
          backgroundColor: '#DCD8D7',
          padding: 0
        }}>

          <DashNav />

          {
            this.props.path[2] ?
              pages[this.props.path[2]] :
              <Main />
          }
        

        </div>

      </div>
    );

  }
}

export default Dashboard;