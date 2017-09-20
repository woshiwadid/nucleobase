import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class StepTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      biography: '',
      bioTextCount: 255,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      location: ''
    };
    this.infoUpdater = this.infoUpdater.bind(this);
    this.stepTwoUpdater = this.stepTwoUpdater.bind(this);
  }

  infoUpdater(type, e) {
    if (type === 'first') {
      this.setState({firstName: e.target.value});
    }
    if (type === 'last') {
      this.setState({lastName: e.target.value});
    }
    if (type === 'number') {
      this.setState({phoneNumber: e.target.value});
    }
    if (type === 'bio') {
      this.setState({biography: e.target.value, bioTextCount: 255 - e.target.value.length});
    }
    if (type === 'location') {
      this.setState({location: e.target.value});
    }
  }

  stepTwoUpdater() {
    const { firstName, lastName, phoneNumber, biography, location } = this.state; 
    let options = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      biography: biography,
      location: location
    };
    this.props.updateInfo(options);
  }

  render() {

    const { firstName, lastName, phoneNumber, biography, bioTextCount } = this.state; 
    var disabler = false;
    if (bioTextCount < 0) {
      disabler = true;
    }
    if (this.props.profileType === 'trainer') {
      if (firstName === '' || lastName === '' || phoneNumber === '' || bioTextCount === 255 || location === '') {
        disabler = true;
      }
    }

    return (

      <div style={{
        minWidth: '450px',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0'
      }}>

        <div style={{
          width: '385px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <span style={{height: '15px'}}></span>
          {
            this.props.profileType === 'trainer' ?
              <h3>About You</h3> : 
              <h3>(Optional) About You</h3>
          }

          <div style={{
            width: '96%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <TextField
              floatingLabelText="First Name"
              floatingLabelStyle={{fontSize: '16px'}}
              floatingLabelShrinkStyle={{color: '#ff7961'}}
              underlineFocusStyle={{borderColor: '#ff7961'}}
              value={this.state.firstName}
              onChange={(e) => this.infoUpdater('first', e)}
            />
            <TextField
              floatingLabelText="Last Name"
              floatingLabelStyle={{fontSize: '16px'}}
              floatingLabelShrinkStyle={{color: '#ff7961'}}
              underlineFocusStyle={{borderColor: '#ff7961'}}
              value={this.state.lastName}
              onChange={(e) => this.infoUpdater('last', e)}
            />
          </div>

          <TextField
            floatingLabelText="Location"
            floatingLabelStyle={{fontSize: '16px'}}
            floatingLabelShrinkStyle={{color: '#ff7961'}}
            underlineFocusStyle={{borderColor: '#ff7961'}}
            hintText="San Francisco, CA"
            value={this.state.location}
            onChange={(e) => this.infoUpdater('location', e)}
          />

          <TextField
            floatingLabelText="Phone Number"
            floatingLabelStyle={{fontSize: '16px'}}
            floatingLabelShrinkStyle={{color: '#ff7961'}}
            underlineFocusStyle={{borderColor: '#ff7961'}}
            hintText="(123) 456-7890"
            value={this.state.phoneNumber}
            onChange={(e) => this.infoUpdater('number', e)}
          />

          <TextField
            errorText={this.state.bioTextCount <= 0 ? 'You are limited to 255 characters!' : ''}
            rows={4}
            rowsMax={4}
            fullWidth={true}
            multiLine={true}
            underlineShow={false}
            floatingLabelText="Describe yourself"
            floatingLabelStyle={{fontSize: '16px'}}
            floatingLabelShrinkStyle={{color: '#ff7961'}}
            textareaStyle={bioTextCount < 0 ? {backgroundColor: '#ffcccc'} : {backgroundColor: '#f3f2f1'}}
            value={this.state.biography}
            onChange={(e) => this.infoUpdater('bio', e)}
            style={{height: '140px'}}
          /><br/>
          <span style={{alignSelf: 'flex-end', color: '#6a6462'}}>Characters remaining: <span style={{color: '#f44336'}}>{this.state.bioTextCount}</span></span>
        </div>

        <div style={{
          width: '100%',
          height: '60px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <RaisedButton 
            label='Next'
            labelColor="#ffffff"
            backgroundColor="#4DC1EA"
            disabled={disabler}
            onClick={this.stepTwoUpdater}
          />
        </div>

      </div>

    );

  }
}

export default StepTwo;