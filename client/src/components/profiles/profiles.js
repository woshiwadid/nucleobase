import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import SmileFace from 'material-ui/svg-icons/Social/mood';

const styles = {
  layout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%'
  },
  bottom: {
  	display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%'
  },
  left: {
    width: '25%'
  },
  right: {
  	width: '74%',
  }
};

class Profile extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	value: 1
	  };
	};

	handleClick() {
		this.props.handleClick();
	}; 


  render() {
    return (
	  <div>
	    <div style={styles.layout}>
	      <div className='wrapper'>
		      <img className="image--cover"  src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1444253482/DG2015-san-francisco.jpg?itok=MdRJm2Zo" height={150} width={150}/>
	        	
	      </div>
		    <div>
		    	<h1>full name</h1>
		    	<h2>biography blah blah blah .........</h2>
		    </div>
		    <div>
		    	<List style={{backgroundColor:'white',width: 150, borderBottom:'2px solid'}}>
		    		<ListItem primaryText='Chat me'/>
		    		<ListItem primaryText='Email me'/>
		    		<ListItem primaryText='Go back to search page' onClick={this.handleClick.bind(this)}/>
		    	</List>
		    </div>
	    </div>   
	    <Divider />
	    <br/>
	    <div style={styles.bottom}>
        <div style={styles.right}>
		    	<Table>
		    		<TableHeader displaySelectAll={false}>
		    			<TableRow><TableHeaderColumn>Current course teaching</TableHeaderColumn></TableRow>
		    		</TableHeader>
		    		<TableBody displayRowCheckbox={false}>
		    			<TableRow>
		    				<TableRowColumn>Course name </TableRowColumn>
		    				<TableRowColumn>Description</TableRowColumn>
		    			</TableRow>
		    			<TableRow>
		    				<TableRowColumn>Course name</TableRowColumn>
		    				<TableRowColumn>Description</TableRowColumn>
		    			</TableRow>
		    		</TableBody>
		    	</Table>	
		    	<br/>
		    	<Table>
		    		<TableHeader displaySelectAll={false}>
		    			<TableRow><TableHeaderColumn>Trainee Review/Trainer Review</TableHeaderColumn></TableRow>
		    		</TableHeader>
		    		<TableBody displayRowCheckbox={false}>
		    			<TableRow>
		    				<TableRowColumn>name</TableRowColumn>
		    				<TableRowColumn>rating</TableRowColumn>
		    				<TableRowColumn>review super longggggggggggggggg rrrrr</TableRowColumn>
		    			</TableRow>
		    			<TableRow>
		    				<TableRowColumn>name2</TableRowColumn>
		    				<TableRowColumn>rating2</TableRowColumn>
		    				<TableRowColumn>review2</TableRowColumn>
		    			</TableRow>
		    		</TableBody>
		    	</Table>
		    </div>
		    <div style={styles.left}>
        	<DropDownMenu value={this.state.value} style={{backgroundColor:'white'}} iconButton={<SmileFace style={{Color:'black'}}/>}>
	          <MenuItem value={1} leftIcon={<SmileFace/>} primaryText="More about me"/>
	          <MenuItem value={2} primaryText="Gyms I go to" />
	          <MenuItem value={3} primaryText="Qualification" />
	          <MenuItem value={4} primaryText="Total view" />
	          <MenuItem value={5} primaryText="Avg rating" />
          </DropDownMenu>
        </div> 		
        </div>
	    </div>
    )
  };
};
export default Profile;