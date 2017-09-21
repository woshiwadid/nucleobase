import React from 'react';

import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


class FilterRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 4
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({
      value
    }, this.props.handleFilter({
      action: 'update',
      filter: 'rating',
      param: value
    }));
  }

  render() {

    return (

      <div style={{
        height: '150px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <span style={{height: '30px'}}>Filter by Rating</span>
        <Toggle
          label='Rating'
          thumbStyle={{backgroundColor: '#78909c'}}
          trackStyle={{backgroundColor: '#a7c0cd'}}
          thumbSwitchedStyle={{backgroundColor: '#f44336'}}
          trackSwitchedStyle={{backgroundColor: '#ff867c'}}
          labelStyle={{color: '#4f5b62'}}
          style={{width: '150px'}}
          onToggle={() => { this.props.handleFilter({action: 'toggle', filter: 'rating', param: this.state.value}); }}
        />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <span style={{paddingTop: '10px'}}>Select Rating:</span>
          <DropDownMenu
            value={this.state.value}
            onChange={this.handleChange}
            selectedMenuItemStyle={{color: '#f44336'}}
          >
            <MenuItem value={5} primaryText='5 Stars' />
            <MenuItem value={4} primaryText='4 Stars' />
            <MenuItem value={3} primaryText='3 Stars' />
            <MenuItem value={2} primaryText='2 Stars' />
            <MenuItem value={1} primaryText='1 Star' />
            <MenuItem value={0} primaryText='No Rating' />
          </DropDownMenu>
        </div>
      </div>

    );

  }
}

export default FilterRating;