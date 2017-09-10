import React from 'react';

import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';

import appointments from './dummy';
import { parseTime } from './../../../../helpers/parseTime';
import { parseDateAbrv } from './../../../../helpers/parseDate';


class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const iconButtonElement = (index) => (
      <IconButton
        key={'k' + index}
        tooltip="Cancel"
        tooltipPosition="bottom-center"
        onClick={this.props.cancel}
      >
        <ClearIcon />
      </IconButton>
    );

    return (

      <div style={{
        height: '100%',
        width: '100%',
        overflowY: 'scroll',
        display: 'list',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <List>
          <Subheader>Appointments</Subheader>
          {
            appointments.map((appointment, i) => (
              <div key={'div' + i}>
                <ListItem
                  key={i}
                  hoverColor="#C3D600"
                  primaryText={`${parseDateAbrv(appointment.date)}`}
                  secondaryText={
                    <div key={'div' + i} style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                      <span key={'s' + i} >{`${parseTime(appointment.from)} - ${parseTime(appointment.to)}`}</span>
                    </div>
                  }
                  rightIconButton={iconButtonElement(i)}
                  style={{padding: '0'}}
                  onClick={() => this.props.updatePreview(appointment)}
                />
                <Divider key={'x' + i} inset={true} />
              </div>
            ))
          }
        </List>
      </div>

    );

  }
}

export default ListComponent;

// something cool we could try to implement is if the appointment is booked, when you hover over it, the hover color would be different
// if the appointment wasn't booked, the hover color would be like, green, or something conveying the message of available.