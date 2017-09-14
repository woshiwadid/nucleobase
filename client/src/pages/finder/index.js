import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import SearchBar from './searchbar';

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: '',
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

      <div className=".col-lg-12" style={{
        height: '100%',
        width: '100%'
      }}>

        <Navbar session={session}/>

        <div className="col-sm-8 col-sm-offset-2" style={{
          height: '94.8%',
          backgroundColor: '#FFFFFF'
        }}>
          
          <SearchBar />
          <Link to="/dashboard">Dashboard View</Link>

          {
            typeof this.state.session === 'string' ?
              <span>YOU HAVE NO SESSION</span> :
              <span>YOU HAVE A SESSION</span>
          }

        </div>


      </div>
      
    );

  }

}

export default Finder;