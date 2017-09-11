import React from 'react';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';
import Toggle from 'material-ui/Toggle';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';


const Table = styled.div`
   border: 4px double #a7aaaf;
   width: 100%
`;

const Head = styled.h2`
  text-align: center;
  color: red;
`;

const Button = styled.button`
   color: red;
   float: right;
`;

class Edit extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			firstName: '',
			lastName: '',
			phone: '',
			gyms: '',
			qualifications: '',
			biography: '',
			goals: '',
			trainer: false,
			trainee: false
		}
	}

	handleFirstNameChange(event) {
		this.setState({
			firstName: event.target.value
		});
	};

	handleLastNameChange(event) {
		this.setState({
			lastName: event.target.value
		});
	};

	handlePhoneChange(event) {
		this.setState({
			phone: event.target.value
		});
	};

	handleGymsChange(event) {
		this.setState({
			gyms: event.target.value
		});
	};

	handleQualificationChange(event) {
		this.setState({
			qualifications: event.target.value
		});
	};

	handleBiographyChange(event) {
		this.setState({
			biography: event.target.value
		});
	};

	handleGoalsChange(event) {
		this.setState({
			goals: event.target.value
		});
	};

	handleClick() {
		// console.log(11111, this.state);
		console.log('save button got clicked')
	};

	updateStatusOfTrainer() {
		this.setState({
			trainer: !this.state.trainer
		})
	};

	updateStatusOfTrainee() {
		this.setState({
			trainee: !this.state.trainee
		})
	}

	render () {
		return (
			<div>
		    <Head>Updateeeeed profiles</Head>
	      <div>
    	    <Toggle label='Want to be a trainer' labelStyle={{color: '#432072', fontSize: '24px'}} onClick={this.updateStatusOfTrainer.bind(this)}/>
    	    <Toggle label='Want to be a trainee' labelStyle={{color: '#432072', fontSize: '24px'}} onClick={this.updateStatusOfTrainee.bind(this)}/>
     		</div>
		    <Table>
		      <h4>Personal information</h4>
	       		<TextField hintText='first name'
	       			floatingLabelText="first name"
	       			onChange={this.handleFirstNameChange.bind(this)}
	          />
	       		<TextField hintText='last name'
	       			floatingLabelText="last name"
	       			onChange={this.handleLastNameChange.bind(this)}
	  			   /><br/>
	       		<TextField hintText='phone'
		       		floatingLabelText="phone"
		       		onChange={this.handlePhoneChange.bind(this)}
		  			/><br/>
		  		</Table>
		  		<Table>	
		  			<h4>Extra profile information</h4>
		       	<TextField hintText='gyms'
		       		floatingLabelText="gyms"
		       		onChange={this.handleGymsChange.bind(this)}
					  /><br/>
					  <TextField hintText='qualifications'
		       		floatingLabelText="qualifications"
		       		multiLine={true}
		       		onChange={this.handleQualificationChange.bind(this)}
					  /><br/>
					  <TextField hintText='biography'
		       		floatingLabelText="biography"
		       		multiLine={true}
		       		onChange={this.handleBiographyChange.bind(this)}
					  /><br/>
					  <TextField hintText='goals'
		       		floatingLabelText="goals"
		       		multiLine={true}
		     			onChange={this.handleGoalsChange.bind(this)}
				  	/><br/>
		  			<Button onClick={this.handleClick.bind(this)}>save changes</Button>
		     </Table>
	    </div>
		)
	}
}
export default Edit;