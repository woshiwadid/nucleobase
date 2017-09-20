import React from 'react';

import Avatar from 'material-ui/Avatar';
import Star from 'material-ui/svg-icons/toggle/star';

import TrainerInfo from './trainerInfo';
import TraineeInfo from './traineeInfo';


const ResultsEntry = (props) => (


  <div style={{
    height: '150px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '7.5px 0'
  }}
  onClick={() => props.select(props.profile)}
  >

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

        <div style={{
          height: '25%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <span style={{fontSize: '24px', paddingLeft: '10px'}}>{`${props.profile.first} ${props.profile.last}`.toUpperCase()}</span>
          <span style={{width: '10px'}}></span>
          <Star style={{color: '#333333'}}/>&nbsp;{props.profile.rating === null ? 'No Ratings' : props.profile.rating.toFixed(2)}
        </div>

        <div style={{height: '15%'}}>
          <span style={{fontStyle: 'italic', color: '#999999', paddingLeft: '10px'}}>{props.profile.location === '' ? 'No Location Specified' : props.profile.location}</span>
        </div>

        {
          props.profile.type === 'trainer' ?
            <TrainerInfo qualification={props.profile.qualification} goals={props.profile.goals} /> :
            <TraineeInfo biography={props.profile.biography} goals={goals.profile.goals} />
        }

      </div>

    </div>

  </div>

);

export default ResultsEntry;