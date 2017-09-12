import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class StepThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qualifications: '',
      qualTextCount: 255,
      goals: '',
      goalTextCount: 255,
    };
    this.qualUpdater = this.qualUpdater.bind(this);
    this.goalUpdater = this.goalUpdater.bind(this);
    this.stepThreeUpdater = this.stepThreeUpdater.bind(this);
  }

  qualUpdater(e) {
    this.setState({
      qualifications: e.target.value,
      qualTextCount: 255 - e.target.value.length
    });
  }

  goalUpdater(e) {
    this.setState({
      goals: e.target.value,
      goalTextCount: 255 - e.target.value.length
    });
  }

  stepThreeUpdater() {
    const { qualifications, goals } = this.state;
    let options = {
      qualifications: qualifications,
      goals: goals
    };
    this.props.updateInfo(options);
  }

  render() {

    const { qualifications, qualTextCount, goals, goalTextCount } = this.state;

    var disabler = false;
    if (qualTextCount < 0 || goalTextCount < 0) {
      disabler = true;
    }
    if (qualifications === '' || goals === '') {
      disabler = true;
    }

    return (
      
      <div style={{
        width: '385px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <span style={{height: '15px'}}></span>
        <h4>Your Qualifications</h4>
        <TextField
          errorText={this.state.qualTextCount <= 0 ? 'You are limited to 255 characters!' : ''}
          rows={3}
          rowsMax={3}
          fullWidth={true}
          multiLine={true}
          underlineShow={false}
          floatingLabelText="Describe your qualifications"
          floatingLabelStyle={{fontSize: '16px'}}
          floatingLabelShrinkStyle={{color: '#6a6462'}}
          textareaStyle={{backgroundColor: '#f3f2f1'}}
          value={this.state.qualifications}
          onChange={this.qualUpdater}
        /><br/>
        <span style={{alignSelf: 'flex-end', color: '#6a6462'}}>Characters remaining: <span style={{color: '#4DC1EA'}}>{this.state.qualTextCount}</span></span>
        <TextField
          errorText={this.state.goalTextCount <= 0 ? 'You are limited to 255 characters!' : ''}
          rows={3}
          rowsMax={3}
          fullWidth={true}
          multiLine={true}
          underlineShow={false}
          floatingLabelText="What services do you provide?"
          floatingLabelStyle={{fontSize: '16px'}}
          floatingLabelShrinkStyle={{color: '#6a6462'}}
          textareaStyle={{backgroundColor: '#f3f2f1'}}
          value={this.state.goals}
          onChange={this.goalUpdater}
        /><br/>
        <span style={{alignSelf: 'flex-end', color: '#6a6462'}}>Characters remaining: <span style={{color: '#4DC1EA'}}>{this.state.goalTextCount}</span></span>
      
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
            onClick={this.stepThreeUpdater}
          />
        </div>

      </div>

    );
  }
}

export default StepThree;