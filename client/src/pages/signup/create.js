import React from 'react';

import { Step, Stepper, StepLabel, StepButton, StepContent } from 'material-ui/Stepper';

import StepOne from './steps/stepOne';
import StepTwo from './steps/stepTwo';
import StepThree from './steps/stepThree';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      type: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      biography: '',
      qualifications: '',
      goals: '',
    };
    this.selectProfileType = this.selectProfileType.bind(this);
    this.stepTwoUpdater = this.stepTwoUpdater.bind(this);
    this.stepThreeUpdater = this.stepThreeUpdater.bind(this);
  }

  selectProfileType(type) {
    this.setState({
      type,
      stepIndex: 1
    });
  }

  stepTwoUpdater(options) {
    const { firstName, lastName, biography, phoneNumber } = options;
    let stepIndex = 3;
    if (this.state.type === 'trainer') {
      stepIndex = 2;
    }
    this.setState({
      firstName,
      lastName,
      biography,
      phoneNumber,
      stepIndex: stepIndex
    });
  }

  stepThreeUpdater(options) {
    const { qualifications, goals } = options;
    this.setState({
      qualifications,
      goals,
      stepIndex: 3
    });
  }

  render() {

    const { stepIndex, type } = this.state;

    return (

      <div className="col-sm-8 col-sm-offset-2" style={{
        height: '94.8%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      }}>

        <div style={{maxWidth: '800px', maxHeight: '800px'}}>
          <Stepper
            activeStep={stepIndex}
            linear={false}
            orientation="vertical"
          >
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 0})}>
                Choose account type
              </StepButton>
              <StepContent>
                <StepOne select={this.selectProfileType}/>
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 1})}>
                Build profile
              </StepButton>
              <StepContent>
                <StepTwo updateInfo={this.stepTwoUpdater} profileType={type}/>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <span style={{fontStyle: 'italic'}}>Trainers Only</span>
              </StepLabel>
              <StepContent>
                <StepThree updateInfo={this.stepThreeUpdater}/>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                Final Submission
              </StepLabel>
              <StepContent>
                Hi
                {console.log(this.state)}
              </StepContent>
            </Step>
          </Stepper>
        </div>

      </div>

    );

  }
}

export default Create;