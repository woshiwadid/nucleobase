import React from 'react';
import AJAX from '../../ajax.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: { },
      received: [],
      sent: [],
    };
  }
  componentWillMount() {
    // // current user
    AJAX.get('/session', {}, (session) => {
      this.state.session = session;
      this.state.star = this.state.session.rating;
      this.state.starHalf = this.state.session.rating % 1 > 0 ? 1 : 0,
    
      // message received
      AJAX.get('/messages', {receiver: this.state.session.id}, (received) => {
        this.state.received = received;
        // for each message find first of the sender
        received.forEach((mess, i) => {
          AJAX.get('/api/profiles/' + mess.sender, {}, (profile) => {
            this.state.received[i].sender = profile;
            this.forceUpdate();
          });
        });  
      });
      // message sent
      AJAX.get('/messages', {sender: this.state.session.id}, (sent) => {
        this.state.sent = sent;
        // for each message find first of the sender
        sent.forEach((mess, i) => {
          AJAX.get('/api/profiles/' + mess.receiver, {}, (profile) => {
            this.state.sent[i].receiver = profile;
            this.forceUpdate();
          });
        });  
      });
    });
  }
  render() {
    return (
      <div className="message">
        <h4>Messages</h4>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan="3" style={{fontSize: 20}}>
                Received
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.received.map((item, i) =>  
              <TableRow key={i}>
                <TableRowColumn style={{width: '20%', fontSize: 15 }}>{'From: ' + item.sender.first}</TableRowColumn>
                <TableRowColumn style={{width: '80%', fontSize: 15 }} >{item.message}</TableRowColumn>
              </TableRow>)
            }
          </TableBody>
        </Table>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan="3" style={{fontSize: 20}}>
                Sent
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.sent.map((item, i) =>  
              <TableRow key={i}>
                <TableRowColumn style={{width: '20%', fontSize: 15 }}>{'To: ' + item.receiver.first}</TableRowColumn>
                <TableRowColumn style={{width: '80%', fontSize: 15 }} >{item.message}</TableRowColumn>
              </TableRow>)
            }
          </TableBody>
        </Table>    
      </div>    
    );
  }
}
export default Message; 