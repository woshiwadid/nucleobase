import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import DropDownMenu from 'material-ui/DropDownMenu';
import AJAX from '../../ajax.js';
import MenuItem from 'material-ui/MenuItem';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SmileFace from 'material-ui/svg-icons/social/mood';
import Star from 'material-ui/svg-icons/toggle/star';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StarRatingComponent from 'react-star-rating-component';
import EmailDialog from 'material-ui/Dialog';

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
  },
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      starBorder: 0,
      star: 0,
      starHalf: 0,
      open: false,
      rating: 1,
      text: '',
      openEmail: false
    };
    this.countStar.bind(this);
  }

  componentWillMount() {
    this.setState({
      star: parseInt(this.props.profile.rating),
      starHalf: this.props.profile.rating % 1 > 0 ? 1 : 0,
    });

    AJAX.get('/session', {}, (session) => {
      this.setState({session: session});
    });

  }

  handleClick() {
    this.props.handleClick();
  }

  handleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  handleClose() {
    this.setState({
      open: !this.state.open
    });
  }

  handleRating(x) {
    //console.log('hahaha', x);
  }

  handleOpenEmail() {
    this.setState({openEmail: true, text: ''});
  }

  // semd email
  handleCloseEmail() {
    this.setState({openEmail: false});

    AJAX.post('/messages', {

      // user 
      sender: this.state.session.id, 
      senderDisplay: this.state.session.first, 
      senderEmail: this.state.session.email,

      // trainer
      receiver: this.props.profile.id, 
      receiverDisplay: this.props.profile.first, 
      receiverEmail: this.props.profile.email, 

      // message
      message: this.state.text

    }, (data) =>{
      console.log(data);
    });

  }

  // email 
  handleChange(e) {
    this.setState({text: e.target.value});
  }  

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  countStar() {
    var result = [];
    var i = 0;
    while (i < this.state.star) {
      result.push(<Star key={Math.random()}/>);
      i ++;
    }
    this.state.starHalf > 0 ? result.push(<StarHalf key={Math.random()}/>) : result;
    while (result.length < 5) {
      result.push(<StarBorder key={Math.random()}/>);
    }
    return result;
  }

  render() {
    const action = [
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
    ];

    const sendEmail = [
      <FlatButton
        label="Send"
        primary={true}
        onClick={this.handleCloseEmail.bind(this)}
      />,
    ];

    return (
    <div>
      <div style={styles.layout}>
        <div>
          <Avatar size={150} src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1444253482/DG2015-san-francisco.jpg?itok=MdRJm2Zo" height={150} width={150}/>
        </div>
        <div>
          <h1>{this.props.profile.first + ' ' + this.props.profile.last}</h1>
          <h4>{this.props.profile.biography}</h4>
          <span>{this.countStar()}{' ' + this.props.profile.rating}</span>
        </div>
        <div>
          <List style={{backgroundColor: 'white', width: 150}}>
            <ListItem primaryText='Chat me'/>
            <ListItem primaryText='Email me' onClick={this.handleOpenEmail.bind(this)}/>
              <EmailDialog
                actions={sendEmail}
                modal={true}
                open={this.state.openEmail}
              >
                <h4>Message</h4>
                <TextField hintText='your message'
                  floatingLabelText="Email"
                  multiLine={true}
                  onChange={this.handleChange.bind(this)}
                  value={this.state.text}
                />
              </EmailDialog>
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
              <TableRow><TableHeaderColumn style={{fontSize: 30}}>Current course teaching</TableHeaderColumn></TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow selectable={false}>
                <TableRowColumn>Course name </TableRowColumn>
                <TableRowColumn>Description</TableRowColumn>
              </TableRow>
              <TableRow selectable={false}>
                <TableRowColumn>Course name</TableRowColumn>
                <TableRowColumn>Description</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>  
          <br/>
          <Table>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn style={{fontSize: 30}}>
                  Trainee Review/Trainer Review
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow selectable={false}>
                <TableRowColumn>name</TableRowColumn>
                <TableRowColumn>rating</TableRowColumn>
                <TableRowColumn>review super longggggggggggggggg rrrrr</TableRowColumn>
              </TableRow>
              <TableRow selectable={false}>
                <TableRowColumn>name2</TableRowColumn>
                <TableRowColumn>rating2</TableRowColumn>
                <TableRowColumn>review2</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
          <FlatButton hoverColor='red' label='add review' onClick={this.handleOpen.bind(this)} fullWidth={true}></FlatButton>
            <Dialog
              actions={action}
              modal={true}
              open={this.state.open}
            >
              <h4>Your review</h4><br/>
              <div>
                <StarRatingComponent 
                    name='star'
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
                <h4>
                  {this.state.rating < 5 ? this.state.rating < 4 ? this.state.rating < 3 ? this.state.rating < 2 ? 'Meh, I experienced better.' : 'I may not book the second one with this trainer.' : 'A-Ok.' : 'Yay! I am a fan.' : 'Woohoo! This tranier is awsome!'}
                </h4>
              </div>
              <TextField hintText='Please write a review'
                floatingLabelText="Your review"
                fullWidth={true}
                multiLine={true}
              /><br/>
            </Dialog>
        </div>
        <div style={styles.left}>
          <DropDownMenu value={this.state.value} style={{backgroundColor: 'white'}} iconButton={<SmileFace style={{Color: 'black'}}/>}>
            <MenuItem value={1} leftIcon={<SmileFace/>} primaryText="More about me"/>
            <MenuItem value={2} primaryText="Gyms I go to" />
            <MenuItem value={3} primaryText="Qualification" />
            <MenuItem value={4} primaryText="Total view" />
            <MenuItem value={5} primaryText="Avg rating" />
          </DropDownMenu>
        </div>    
        </div>
      </div>
    );
  }
}

export default Profile;