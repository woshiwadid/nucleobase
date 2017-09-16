import React from 'react';

import Avatar from 'material-ui/Avatar';

import TrainerInfo from './trainerInfo';
import TraineeInfo from './traineeInfo';


const ResultsEntry = (props) => (

  console.log(props),

  <div style={{
    height: '150px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '7.5px 0'
  }}>

    <div style={{
      height: '100%',
      minWidth: '425px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      flexGrow: '2'
    }}>

      <div style={{
        height: '100%',
        minWidth: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '0',
      }}>
        <Avatar
          size={125}
          src={
            props.profile.image_url === null ? 
              'https://www.spinninrecords.com/images/img_profile80x80.png' :
              props.profile.image_url
          }
        /> 
      </div>

      <div style={{
        height: '100%',
        minWidth: '275px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '2'
      }}>

        <div style={{height: '25%'}}>
          <span style={{fontSize: '24px', paddingLeft: '10px'}}>{`${props.profile.first} ${props.profile.last}`}</span>
        </div>

        {/* LOCATION IS CURRENTLY MISSING, THE SIGNUP COMPONENT NEEDS TO BE UPDATED PRIOR TO THIS SMALL PORTION WORKING */}

        <div style={{height: '15%'}}>
          <span style={{fontStyle: 'italic', color: '#999999', paddingLeft: '10px'}}>{props.profile.location}</span>
        </div>

        {/* PLACEHOLDER FOR THE BIO / GOALS / QUALS SPACE.  BREAKING OUT TO SEPARATE COMPONENTS */}

        {
          props.profile.type === 'trainer' ?
            <TrainerInfo qualification={props.profile.qualification} goals={props.profile.goals} /> :
            <TraineeInfo biography={props.profile.biography} goals={goals.profile.goals} />
        }


      </div>

    </div>

    <div style={{
      height: '100%',
      minWidth: '75px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '0'
    }}>
      Test 2
    </div>

  </div>

);

export default ResultsEntry;