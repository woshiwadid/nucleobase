import React from 'react';

import Avatar from 'material-ui/Avatar';


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

        <div style={{
          height: '60%',
          display: 'flex',
          flexDirection: 'column',

        }}>

          {/* REMOVE THIS INTO IT'S OWN COMPONENT, AND MAKE ANOTHER ONE DEPENDING ON THE PROFILE TYPE OF THE SESSION */}

          <div style={{
            height: '50%',
          }}>
            <p style={{paddingLeft: '10px', overflow: 'hidden', whiteSpace: 'nowrap'}}>
              <span style={{fontWeight: 'bold'}}>Biography:&nbsp;</span>
              {`${props.profile.biography}`}
            </p>
          </div>

          <div style={{
            height: '50%'
          }}>
            <p style={{paddingLeft: '10px', overflow: 'hidden', whiteSpace: 'nowrap'}}>
              <span style={{fontWeight: 'bold'}}>Goals:&nbsp;</span>
              {`${props.profile.goals}`}
            </p>
          </div> 

        </div>

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