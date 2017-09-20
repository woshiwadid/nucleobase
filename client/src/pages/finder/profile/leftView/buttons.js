import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';


class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleContact = this.handleContact.bind(this);
  }

  handleContact() {
    console.log('handled click');
  }

  render() {

    return (

      <div style={{
        height: '100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <RaisedButton 
          label='Contact Me'
          labelColor="#ffffff"
          backgroundColor="#f44336"
          onClick={this.handleContact}
        />
      </div>

    );

  }
}

export default Buttons;