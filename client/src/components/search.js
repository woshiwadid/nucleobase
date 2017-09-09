import React from 'react';

<<<<<<< HEAD
=======
import styled from 'styled-components';
>>>>>>> Created trainer profile search and edit pages
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import SearchIcon from 'material-ui/svg-icons/Action/search';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import SmileFace from 'material-ui/svg-icons/Social/mood';



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
		width: '25%'
	},
	right: {
    width: '75%',
    border: '2px solid',
    marginTop: '50px'

	},
	list: {
		border: '1px solid',
		marginTop: '10px',
		marginRight: '30px',
		height: '35px'
	},
	input: {

	}
}

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			rating: 1,
			view: 1,
			price: 1,
			search: ''
		};
	};

	handleRatingChange(event, index, value) {
		this.setState({
			rating: value
		});
  };

  handleViewChange(event, index, value) {
		this.setState({
			view: value
		});
  };

  handlePriceChange(event, index, value) {
		this.setState({
			price: value
		});
  };

  handleSearchInput(event) {
  	this.setState({
  		search: event.target.value
  	});
  };

  handleSearch() {
  	console.log('i got clicked')
  };

  handleProfileClick() {
  	console.log('profile got clicked')
  }


	render() {
		console.log(this.state.search)
		return (
			    <div>
<<<<<<< HEAD
       	 	<span style={{marginLeft: '20%'}}>
       	 		<TextField hintText="Seach" style={{width: '300px', Height: '200px'}} onChange={this.handleSearchInput.bind(this)}/>
=======
       	 	<span style={{paddingLeft: '200px'}}>
       	 		<TextField hintText="Seach" style={{width: '300px'}} onChange={this.handleSearchInput.bind(this)}/>
>>>>>>> Created trainer profile search and edit pages
       	 	</span>
          <span><SearchIcon onClick={this.handleSearch.bind(this)}/></span>
       	 	<br/>
			    <div style = {styles.layout}>
            <div style = {styles.left}>
           	 	<ul>
           	 	  <li style={{marginTop: '30px'}}>
		           	 	<div>Filter by rating</div>
		           	 	<div style={styles.list}>
		           	 			<DropDownMenu value={this.state.rating} style={{width: 50, autoWidth:false}} onChange={this.handleRatingChange.bind(this)}>
		           	 				<MenuItem  value={1} label="default" primaryText="default" />
		           	 				<MenuItem  value={2} label="option1" primaryText="option1" />
		           	 				<MenuItem  value={3} label="option2" primaryText="option2" />
		           	 			</DropDownMenu>
		           	 	</div>
           	 	  </li>
           	 	  <li style={{marginTop: '30px'}}>
		           	 	<div>Filter by View</div>
		           	 	<div style={styles.list}>
		           	 			<DropDownMenu value={this.state.view} style={{width: 50, autoWidth:false}} onChange={this.handleViewChange.bind(this)}>
		           	 				<MenuItem  value={1} label="default" primaryText="default" />
		           	 				<MenuItem  value={2} label="option1" primaryText="option1" />
		           	 				<MenuItem  value={3} label="option2" primaryText="option2" />
		           	 			</DropDownMenu>
		           	 	</div>
           	 	  </li>
           	 	  <li style={{marginTop: '30px'}}>
		           	 	<div>Filter by Price</div>
		           	 	<div style={styles.list}>
		           	 			<DropDownMenu value={this.state.price} style={{width: 50, autoWidth:false}} onChange={this.handlePriceChange.bind(this)}>
		           	 				<MenuItem  value={1} label="default" primaryText="default" />
		           	 				<MenuItem  value={2} label="option1" primaryText="option1" />
		           	 				<MenuItem  value={3} label="option2" primaryText="option2" />
		           	 			</DropDownMenu>
		           	 	</div>
           	 	  </li>
           	 	</ul>
						</div>
						<br/>
						<div style={styles.right}>
							<h3 style={{textAlign: 'center',backgroundColor: '#ffff02'}}>Result List</h3>
							<List>
								<ListItem
									leftAvatar={
       							<Avatar 
       								icon={<SmileFace/>} 
       								color={'red'}
       								size={90}
       							/>
      						}
      						onClick={
      							this.handleProfileClick.bind(this)
      						}
								>
								<div style={{paddingLeft: '100px'}}>
								 	<h3>Chao Zeng</h3>
								 	<span><h5>rating 4.9</h5></span>
								</div> 	
								<p>He is a very handsome boy who just gets his lol account back</p>
								</ListItem>
								<ListItem
									leftAvatar={
       							<Avatar 
       								icon={<SmileFace/>} 
       								color={'red'}
       								size={90}
       							/>
      						}
								>
								  <div style={{paddingLeft: '100px'}}>
										<span><h3>Andy Lien</h3></span>
										<span><h5>rating 4.9</h5></span>
								  </div>
									<p>He saves money from lunch to give away to homeless which is stupid</p>
								</ListItem>
							</List>
						</div>
          </div> 
          </div>
		);
	};

}







export default Search