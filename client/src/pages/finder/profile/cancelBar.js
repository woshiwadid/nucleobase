import React from 'react';

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';


const CancelBar = (props) => (

  <div style={{
    height: '38px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#b0bec5'
  }}>
    <IconButton
      tooltip="Close"
      tooltipPosition="bottom-center"
      onClick={props.toggle}
      iconStyle={{color: '#607d8b'}}
    >
      <ClearIcon />
    </IconButton>
  </div>

);

export default CancelBar;