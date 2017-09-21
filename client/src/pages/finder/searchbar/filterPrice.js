import React from 'react';

import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


class FilterPrice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '75px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <span style={{height: '30px'}}>Filter by Price</span>
        <Toggle
          label='Price'
          thumbStyle={{backgroundColor: '#78909c'}}
          trackStyle={{backgroundColor: '#a7c0cd'}}
          thumbSwitchedStyle={{backgroundColor: '#f44336'}}
          trackSwitchedStyle={{backgroundColor: '#ff867c'}}
          labelStyle={{color: '#4f5b62'}}
          style={{width: '150px'}}
          onToggle={() => { this.props.handleFilter({action: 'toggle', filter: 'price'}); }}
        />
      </div>

    );

  }
}

export default FilterPrice;