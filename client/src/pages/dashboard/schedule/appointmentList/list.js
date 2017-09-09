import React from 'react';

import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Entry from './entry';

import appointments from './dummy';


class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

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
              <ListItem
                hoverColor="#C3D600"
                primaryText={appointment.location}
                secondaryText={
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                    <span style={{fontWeight: 'bold'}}>{appointment.price} -- </span>
                    <span>{appointment.date}</span>
                  </div>
                }
              />
            ))
          }
        </List>
      </div>

    );

  }
}

export default ListComponent;