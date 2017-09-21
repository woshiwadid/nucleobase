import AJAX from '../../../../ajax.js';
import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      message: ''
    };
  };

  updateMessage(event) {
    this.props.updateMessage(event)
    this.setState({message: event.target.value})
  };

  submitMessage(event) {
    this.setState({message: ''})
    this.props.submitMessage(event)
  };

  render() {
    console.log(1111, this.state.message)

    const messageElement = (message, index) => {
      if (this.props.session.id === message.sender.id) {
        return  <ListItem 
          key={index}
          rightAvatar={<Avatar src={message.sender.image_url} />}
          primaryText={
            <Card 
              style= {{ width: 300, height: 50, background: '#75a8f9',display: 'inline-block'}} 
              zDepth={5}
            >
              <CardText>{message.message}</CardText>
            </Card>} 
          disabled={true}
          rounded={false}
          style={{marginLeft: '100px'}}
        >
        </ListItem>
      } else {
        return <ListItem 
          key={index}
          leftAvatar={<Avatar src={message.sender.image_url} />}
          primaryText={<Paper style= {{width: 300, height: 50}} zDepth={5}>{message.message}</Paper>}
          disabled={true}
        >
        </ListItem>
    
      }
    };

    return (
      <div style={{width: '80%'}}>
        <List>
        {this.props.messages.map((message, index) => messageElement(message, index))}
        </List>
        <div style={{marginLeft:'300px'}}>
          <TextField
            onChange={this.updateMessage.bind(this)}
            value={this.state.message}
            multiLine={true}
          />
          <button onClick={this.submitMessage.bind(this)}>Send</button>
        </div>
      </div>
    )
  }
}

export default Messages;