import React from 'react';

import Dialog from 'material-ui/Dialog';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

class AddAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addLocation: '',
      addDate: {},
      addPrice: '$',
      addFromTime: '',
      addToTime: ''
    };
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.addDateUpdater = this.addDateUpdater.bind(this);
    this.addFromTimeUpdater = this.addFromTimeUpdater.bind(this);
    this.addToTimeUpdater = this.addToTimeUpdater.bind(this);
  }

  addUpdater(event, option) {
    const options = {
      'location': () => this.setState({addLocation: event.target.value}),
      'price': () => this.setState({addPrice: event.target.value})
    };
    options[option.type]();
  }

  addDateUpdater(e, date) {
    this.setState({
      addDate: date
    });
  }

  addFromTimeUpdater(e, date) {
    this.setState({
      addFromTime: date
    });
  }

  addToTimeUpdater(e, date) {
    this.setState({
      addToTime: date
    });
  }

  handleAddSubmit() {
    const { addLocation, addDate, addPrice, addFromTime, addToTime} = this.state;
    console.log('submitted! ', 'location: ', addLocation, 'date: ', addDate, 'price: ', addPrice, 'from: ', addFromTime, 'to: ', addToTime);
    this.props.handleToggle({type: 'addOpen'});
  }

  render() {

    const addActions = [
      <FlatButton 
        label="Cancel"
        onClick={() => this.props.handleToggle({type: 'addOpen'})}
      />,
      <RaisedButton
        label="Create Appointment"
        onClick={this.handleAddSubmit}
      />
    ];

    return (

      <Dialog
        actions={addActions}
        modal={false}
        open={this.props.addOpen}
        onRequestClose={() => this.props.handleToggle({type: 'addOpen'})}
        contentStyle={{
          height: '400px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>

          <span style={{height: '30px'}}>Choose Appointment Date:</span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center'
          }}>
            <DatePicker 
              hintText="Date"
              value={this.state.addDate}
              onChange={this.addDateUpdater}
            />
          </div>
          <span style={{height: '30px'}}></span>

          <span style={{height: '30px'}}>Choose Appointment Times:</span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center'
          }}>
            <TimePicker
              textFieldStyle={{width: '100px'}}
              hintText="From"
              onChange={this.addFromTimeUpdater}
            />
            <span style={{width: '30px'}}></span>
            <TimePicker
              textFieldStyle={{width: '100px'}}
              hintText="To"
              onChange={this.addToTimeUpdater}
            />
          </div>
          <span style={{height: '30px'}}></span>


          <span style={{height: '30px'}}>Choose a Location:</span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center'
          }}>
            <TextField 
              hintText="Location..."
              value={this.state.addLocation}
              onChange={(e) => this.addUpdater(e, {type: 'location'})}
            />
          </div>
          <span style={{height: '30px'}}></span>


          <span style={{height: '30px'}}>Set Your Price:</span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center'
          }}>
            <TextField 
              value={this.state.addPrice}
              onChange={(e) => this.addUpdater(e, {type: 'price'})}
            />
          </div>

        </div>
      </Dialog>

    );

  }
}

export default AddAppointment;