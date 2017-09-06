import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div style={{
        minHeight: '800px',
        height: '96%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>

        <div id="left-side" style={{
          minHeight: '400px',
          height: '96%',
          width: '21.333%',
          minWidth: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#DCD8D7'
        }}>

          <div style={{
            height: '20%',
            width: '96%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: '4%',
            backgroundColor: '#BEBAB9'
          }}>
            Profile Picture
          </div>

          <div style={{
            height: '48%',
            width: '96%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginBottom: '4%',
            backgroundColor: '#BEBAB9'
          }}>
            Settings Box
          </div>

        </div>

        <div id="right-side" style={{
          minHeight: '400px',
          height: '96%',
          minWidth: '250px',
          width: '74.667%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#0B5258'
        }}>

          <div style={{
            minHeight: '400px',
            height: '48%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#DCD8D7'
          }}>
            Things You've got to do
          </div>

          <div style={{
            minHeight: '400px',
            height: '48%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#DCD8D7'
          }}>
            Analytics Window?
          </div>
          
        </div>

      </div>

    );

  }
}

export default Main; 