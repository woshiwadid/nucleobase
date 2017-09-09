import React from 'react';

import TextField from 'material-ui/TextField';


class SearchAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apptSearch: ''
    };
    this.searchUpdate = this.searchUpdate.bind(this);
  }

  searchUpdate(event) {
    this.setState({
      apptSearch: event.target.value
    });
  }

  render() {

    return (

      <TextField 
        hintText="Search appointments..."
        value={this.state.apptSearch}
        onChange={this.searchUpdate}
      />

    );

  }
}

export default SearchAppointment;