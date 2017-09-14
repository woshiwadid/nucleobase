import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class StepThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qualification: '',
      qualTextCount: 255,
      goals: '',
      goalTextCount: 255,
    };
    this.infoUpdater = this.infoUpdater.bind(this);
    this.stepThreeUpdater = this.stepThreeUpdater.bind(this);
  }

  infoUpdater(type, e) {
    if (type === 'qual') {
      this.setState({
        qualification: e.target.value,
        qualTextCount: 255 - e.target.value.length
      });
    }
    if (type === 'goal') {
      this.setState({
        goals: e.target.value,
        goalTextCount: 255 - e.target.value.length
      });
    }
  }

  stepThreeUpdater() {
    const { qualification, goals } = this.state;
    let options = {
      qualification: qualification,
      goals: goals
    };
    this.props.updateInfo(options);
  }

  render() {

    const { qualification, qualTextCount, goals, goalTextCount } = this.state;

    var disabler = false;
    if (qualTextCount < 0 || goalTextCount < 0) {
      disabler = true;
    }
    if (qualification === '' || goals === '') {
      disabler = true;
    }

    return (
      
      <div style={{
        width: '385px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <span style={{height: '15px'}}></span>
        <h3>Your Qualifications</h3>
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
          value={this.state.qualification}
          onChange={(e) => this.infoUpdater('qual', e)}
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
          onChange={(e) => this.infoUpdater('goal', e)}
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