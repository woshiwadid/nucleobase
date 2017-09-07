import React from 'react';

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return (

      <div style={{
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        Control panel
        <br/>
        This is where
        <br/>
        We can have a bunch
        <br/>
        of options to choose from
      </div>

    );

  }
}

export default ControlPanel;