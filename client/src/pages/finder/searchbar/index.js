import React from 'react';

import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Hamburger from 'material-ui/svg-icons/image/dehaze';
import Clear from 'material-ui/svg-icons/content/clear';

import AJAX from '../../../ajax';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    return (

      <div style={{
        width: '100%',
        height: '38px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4DC1EA'
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
            backgroundColor: '#111822'
          }}>
            <IconButton onClick={this.handleToggle} iconStyle={{color: '#FFFFFF'}}>
              <Clear />
            </IconButton>
          </div>
          <div style={{
            height: '100px',
            width: '100%',
          }}>
            This is a place for a filter
          </div>
        </Drawer>

        <TextField 
          hintText="Search..."
          hintStyle={{color: '#137aa0'}}
          multiLine={true}
          rowsMax={1}
          style={{paddingLeft: '30px'}}
          underlineStyle={{
            borderColor: '#464d00'
          }}
          underlineFocusStyle={{
            borderColor: '#C3D600'
          }}
        />

      </div>

    );

  }
}

export default SearchBar;