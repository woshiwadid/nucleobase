import React from 'react';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import SmileFace from 'material-ui/svg-icons/social/mood';

class SearchEntry extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		};

	};
  
  handleClick() {
  	this.props.handleProfileClick(this.props.profile);
  	// console.log(this.props.profile)
  };

	render() {
		this.props.profile.rating = 3.9
		return (
   		<div>
   			<ListItem
						leftAvatar={
	       			<Avatar 
	       				icon={<SmileFace/>} 
	       				color={'red'}
	       				size={90}
	       			/>
      			}
      			onClick={
      				this.handleClick.bind(this)
      			}
				>
				  <div style={{paddingLeft: '100px'}}>
						<h3>{this.props.profile.first + ' ' + this.props.profile.last}</h3>
						<span><h5>{this.props.profile.rating ? this.props.profile.rating : 'rating 4.9'}</h5></span>
					</div> 	
					<p>{this.props.profile.biography}</p>
				</ListItem>
   		</div>	
		)
	};
};

export default SearchEntry;