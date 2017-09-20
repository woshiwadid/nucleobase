import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';


class StepOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        minWidth: '450px',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: '225px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '15px'
        }}>
          <h3>Trainer</h3>
          <p>
            If you are a personal trainer looking for a 
            platform to build your indepenedant business
            upon, sign up today to be a Trainer!
          </p>
          <RaisedButton 
            label="Join as Trainer"
            labelColor="#ffffff"
            backgroundColor="#78909c"
            onClick={() => this.props.select('trainer')}
          />
        </div>

        <div style={{
          width: '225px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '15px'
        }}>
          <h3>Trainee</h3>
          <p>
            If you find yourself on the search for a personal
            trainer who fits your schedule or training
            goals, sign up and train with TrainerFinder!
          </p>
          <RaisedButton 
            label="Join as Trainee"
            labelColor="#ffffff"
            backgroundColor="#78909c"
            onClick={() => this.props.select('trainee')}
          />
        </div>
      </div>

    ); 

  }
}

export default StepOne;