import React from 'react';
import AJAX from '../../ajax.js';

import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import SearchIcon from 'material-ui/svg-icons/Action/search';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import SmileFace from 'material-ui/svg-icons/Social/mood';
import NeutralFace from 'material-ui/svg-icons/Social/sentiment-neutral';
import SadFace from 'material-ui/svg-icons/Social/sentiment-very-dissatisfied';
import AppBar from 'material-ui/AppBar';

import Profiles from '../profiles/profiles';
import SearchEntry from './searchEntry';

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'

  },
  left: {
    border: '2px solid',
    // height: '10%',
    marginTop: '50px',
    width: '20%',
    height: '50%'
  },
  right: {
    width: '75%',
    // border: '2px solid',
    // marginTop: '10px'

  },
  list: {
    // border: '1px solid',
    marginTop: '10px',
    marginRight: '30px',
    height: '35px'
  },
  filterbar: {
    // border: '1px solid',
    background: '#d7dee8'
  }
};


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      view: 1,
      price: 1,
      search: '',
      profiles: [],
      toggle: false,
      clickedProfile: {}
    };
  }

  componentWillMount() {
    AJAX.get('/profilesByFilter', {filter: 'trainer'}, (data) =>{
      this.setState({
        profiles: data
      });
    });
  }

  handleRatingChange(event, index, value) {
    this.setState({
      rating: value
    });
  }

  handleViewChange(event, index, value) {
    this.setState({
      view: value
    });
  }

  handlePriceChange(event, index, value) {
    this.setState({
      price: value
    });
  }

  handleSearchInput(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleSearch() {
    console.log('i got clicked');
  }

  handleProfileClick(profile) {
    this.setState({
      toggle: !this.state.toggle,
      clickedProfile: profile
    });
  }


  render() {

    console.log(this.state.profiles);

    if (this.state.toggle) {
      return <Profiles handleClick={this.handleProfileClick.bind(this)} profile={this.state.clickedProfile}/>;
    } else {
      return (
        <div>
          {/* This is where the searching function lives as well as the button for submitting the search */}
          <AppBar>
            <TextField hintText="Seach" style={{width: '300px', Height: '200px'}} onChange={this.handleSearchInput.bind(this)}/>
            <SearchIcon onClick={this.handleSearch.bind(this)}/>
          </AppBar>
          <br/>
          <div style={styles.layout}>
            <div style={styles.left}>
              <ul>

                {/* This is where the 3 drop down menus live */}

                <li style={{marginTop: '30px'}}>
                  <div style={styles.filterbar}>Filter by rating</div>
                  <div style={styles.list}>
                    <DropDownMenu value={this.state.rating} style={{width: 50, autoWidth: false}} onChange={this.handleRatingChange.bind(this)}>
                      <MenuItem value={1} label="default" primaryText="default" />
                      <MenuItem value={2} label="option1" primaryText="option1" />
                      <MenuItem value={3} label="option2" primaryText="option2" />
                    </DropDownMenu>
                  </div>
                </li>
                <li style={{marginTop: '30px'}}>
                  <div style={styles.filterbar}>Filter by View</div>
                  <div style={styles.list}>
                    <DropDownMenu value={this.state.view} style={{width: 50, autoWidth: false}} onChange={this.handleViewChange.bind(this)}>
                      <MenuItem value={1} label="default" primaryText="default" />
                      <MenuItem value={2} label="option1" primaryText="option1" />
                      <MenuItem value={3} label="option2" primaryText="option2" />
                    </DropDownMenu>
                  </div>
                </li>
                <li style={{marginTop: '30px'}}>
                  <div style={styles.filterbar}>Filter by Price</div>
                  <div style={styles.list}>
                    <DropDownMenu value={this.state.price} style={{width: 50, autoWidth: false}} onChange={this.handlePriceChange.bind(this)}>
                      <MenuItem value={1} label="default" primaryText="default" />
                      <MenuItem value={2} label="option1" primaryText="option1" />
                      <MenuItem value={3} label="option2" primaryText="option2" />
                    </DropDownMenu>
                  </div>
                </li>
              </ul>
            </div>
            <br/>

            {/* This is the results list */}

            <div style={styles.right}>
              <h3 style={{textAlign: 'center', backgroundColor: '#ffff02'}}>Result List</h3>
              <List>
                {this.state.profiles.map((profile, i) => <SearchEntry key={i} profile={profile} handleProfileClick={this.handleProfileClick.bind(this)}/>)}
              </List>
            </div>
          </div> 
        </div>
      );
      
    }
  }
}

export default Search;