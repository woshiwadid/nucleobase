import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import SearchBar from './searchbar';
import Profile from './profile';
import ResultsList from './resultsList';

import AJAX from '../../ajax';


class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: '',
      profiles: [],
      selected: false,
      selectedProfile: {}
    };
    this.toggleSelected = this.toggleSelected.bind(this);
    this.fetchProfiles = this.fetchProfiles.bind(this);
    this.selectionHandler = this.selectionHandler.bind(this);
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

  selectionHandler(profile) {
    console.log('profile received from click: ', profile);
    this.setState({
      selected: true,
      selectedProfile: profile
    });
  }

  toggleSelected() {
    this.setState({
      selected: false
    });
  }

  render() {

    const { session, profiles, selected, selectedProfile } = this.state;

    return (

      <div style={{
        height: '100%',
        width: '100%'
      }}>

        <Navbar session={session}/>

        <div className="col-sm-8 col-sm-offset-2" style={{
          height: '94.7%',
          backgroundColor: '#FFFFFF',
          padding: '0'
        }}>
          
          <SearchBar session={session}/>

          {
            selected === true ? 
              <Profile toggle={this.toggleSelected} profile={selectedProfile}/> :
              <ResultsList profiles={profiles} select={this.selectionHandler}/>
          }

        </div>


      </div>
      
    );
  }

}

export default Finder;