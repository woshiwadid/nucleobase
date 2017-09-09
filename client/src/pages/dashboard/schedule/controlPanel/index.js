import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import AddCircle from 'material-ui/svg-icons/content/add-circle';

import SearchAppointment from './searchAppt';
import AddAppointment from './addAppt';


class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addOpen: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }


  handleToggle(option) {
    const toggles = {
      'addOpen': this.setState({addOpen: !this.state.addOpen})
    };
    toggles[option.type];
  }
  
  render() {

    return (

      <div className="row">
        <div className="col-lg-12 col-sm-4" style={{
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <SearchAppointment />
        </div>

        <div className="col-lg-12 col-sm-4" style={{
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <RaisedButton
            label="Create"
            labelPosition="before"
            labelColor="#ffffff"
            backgroundColor="#4DC1EA"
            icon={<AddCircle />}
            onClick={() => this.handleToggle({type: 'addApp'})}
          />
          <AddAppointment 
            handleToggle={this.handleToggle}
            addOpen={this.state.addOpen}
          />
        </div>
      </div>

    );

  }
}

export default ControlPanel;