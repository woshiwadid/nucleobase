import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import SearchBar from './searchbar';
import ResultsList from './resultsList';

import AJAX from '../../ajax';


class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: '',
      profiles: []
    };
    this.fetchProfiles = this.fetchProfiles.bind(this);
  }

  componentDidMount() {
    AJAX.get('/session', {}, (data) => {
      this.setState({
        session: data
      }, this.fetchProfiles);
    });
  }

  fetchProfiles() {
    let options = {};
    // this.state.session.type === 'trainer' || typeof this.state.session !== 'string' ?
    //   options.filter = 'trainee' :
    //   options.filter = 'trainer';
    if (this.state.session.type === 'trainer') {
      options.filter = 'trainee';
    } else {
      options.filter = 'trainer';
    }
    AJAX.get('/profilesByFilter', options, (profiles) => {
      this.setState({
        profiles
      });
    });
  }

  render() {

    const { session, profiles } = this.state;

    return (

      <div style={{
        height: '100%',
        width: '100%'
      }}>

        <Navbar session={session}/>

        <div className="col-sm-8 col-sm-offset-2" style={{
          height: '94.8%',
          backgroundColor: '#FFFFFF',
          padding: '0'
        }}>
          
          <SearchBar session={session}/>

          <ResultsList profiles={profiles}/>

        </div>


      </div>
      
    );

  }

}

export default Finder;