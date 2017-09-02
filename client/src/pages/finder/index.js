import React from 'react';

import Navbar from '../../components/navbar';
import SearchBar from './searchbar';

class Finder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className=".col-lg-12" style={{
        height: '100%',
        width: '100%'
      }}>

        <Navbar />

        <div className="col-sm-8 col-sm-offset-2" style={{
          height: '96%',
          backgroundColor: '#d9d9d9'
        }}>
          
          <SearchBar />
          <a href="/dashboard">Dashboard View</a>

        </div>

      </div>
    );

  }

}

export default Finder;