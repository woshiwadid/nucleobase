import React from 'react';


const TrainerInfo = (props) => (

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
        <span style={{fontWeight: 'bold'}}>Qualifications:&nbsp;</span>
        {`${props.qualification}`}
      </p>
    </div>

    <div style={{
      height: '50%'
    }}>
      <p style={{paddingLeft: '10px', overflow: 'hidden', whiteSpace: 'nowrap'}}>
        <span style={{fontWeight: 'bold'}}>Services:&nbsp;</span>
        {`${props.goals}`}
      </p>
    </div> 

  </div>

);

export default TrainerInfo;