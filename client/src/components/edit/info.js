import React from 'react';
import Edit from './edit';
import AJAX from '../../ajax.js';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import PeopleIcon from 'material-ui/svg-icons/social/people';
import RatingIcon from 'material-ui/svg-icons/toggle/star';
import RatingCountIcon from 'material-ui/svg-icons/notification/confirmation-number';
import ViewIcon from 'material-ui/svg-icons/image/remove-red-eye';
import GoalIcon from 'material-ui/svg-icons/image/adjust';
import QualificationIcon from 'material-ui/svg-icons/social/school';
import BiographIcon from 'material-ui/svg-icons/social/whatshot';
import Divider from 'material-ui/Divider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const style ={
	// border: '2px solid'
	marginTop: '20px',
	marginBotton: '20px'
};

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
			session: {}
		};
	};
 	
 	componentWillMount() {
     AJAX.get('/session', {}, (data) =>{
     		this.setState({
     			session: data
     		});
     });
 	};

	handleClick(){
		this.setState({
			toggle: !this.state.toggle
		});
	};

	render() {
		if(this.state.toggle) {
			return <Edit handleClick={this.handleClick.bind(this)}/>
		} else {
			return (
				<div>
					<div style={style}>
					  <h4>Basic information</h4>
					  <Table>
					    <TableBody displayRowCheckbox={false}>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn><PeopleIcon/>Full Name: {this.state.session.display}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><PhoneIcon/>Phone number: {this.state.session.phone ? this.state.session.phone : 'not filled yet'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><EmailIcon/>Email: {this.state.session.email ? this.state.session.email : 'not filled yet'}</TableRowColumn>
					      </TableRow>
					    </TableBody>
					  </Table>
					</div>
					<Divider/>
					<div style={style}>
					  <h4>My reviews</h4>
					  <Table>
					    <TableBody displayRowCheckbox={false}>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><RatingIcon/>Rating: {this.state.session.rating ? this.state.session.rating : 'You do not have any rating yet'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><RatingCountIcon/>Rating counts: {this.state.session.rating_count ? this.state.session.rating_count : '0'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn><ViewIcon/>Total view: {this.state.session.total_view ? this.state.session.total_view : '0'}</TableRowColumn>
					      </TableRow>
					    </TableBody>
					  </Table>
					</div>
					<Divider/>
					<div style={style}>
						<h4>Other information</h4>
					  <Table>
					    <TableBody displayRowCheckbox={false}>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><GoalIcon/>My Goal is: {this.state.session.goals ? this.state.session.goals : 'Not filled'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn><BiographIcon/>Biography: {this.state.session.biography ? this.state.session.biography : 'Not filled'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn><QualificationIcon/>My qualification: {this.state.session.qualification ? this.state.session.qualification : 'Not filled'}</TableRowColumn>
					      </TableRow>
					    </TableBody>
					  </Table>
					</div>
					<Divider/>
          <button style={{float: 'right'}}onClick={this.handleClick.bind(this)}>update my info</button>
				</div>
			)
		};
	};
};

export default Info;