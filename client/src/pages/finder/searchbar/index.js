import React from 'react';

import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Hamburger from 'material-ui/svg-icons/image/dehaze';
import Clear from 'material-ui/svg-icons/content/clear';

import FilterRating from './filterRating';
import FilterPrice from './filterPrice';

import AJAX from '../../../ajax';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        rating: {
          toggled: false,
          param: ''
        },
        price: {
          toggled: false,
          param: ''
        },
      },
      drawerOpen: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {

    const { filters } = this.state;

    return (

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}>
        <span style={{width: '100%', height: '2px', backgroundColor: '#f44336'}}></span>
        <div style={{
          width: '100%',
          height: '36px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#263238'
        }}>
          <IconButton onClick={this.handleToggle} iconStyle={{color: '#FFFFFF'}}>
            <Hamburger />
          </IconButton>

          <Drawer open={this.state.drawerOpen} style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{
              height: '50px',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              backgroundColor: '#263238'
            }}>
              <IconButton onClick={this.handleToggle} iconStyle={{color: '#FFFFFF'}}>
                <Clear />
              </IconButton>
            </div>

            <FilterRating handleFilter={this.props.handleFilter} status={filters.rating.toggled} />

            <FilterPrice handleFilter={this.props.handleFilter} status={filters.price.toggled} />

          </Drawer>

          <span style={{color: '#ffffff'}}>Filters</span>

        </div>
      </div>
    );

  }
}

export default SearchBar;