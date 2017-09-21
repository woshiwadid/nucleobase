import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Star from 'material-ui/svg-icons/toggle/star';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import StarRatingComponent from 'react-star-rating-component';
import AJAX from '../../../../ajax.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AffiliationsEntry from './AffiliationsEntry'


class Affiliations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.session.type === 'trainer' ? <h3>My trainee</h3> : <h3>My trainer</h3>}
        {this.props.trainers.length > 0 ? 
          this.props.trainers.map((trainer, i) => <AffiliationsEntry info={trainer} session={this.props.session} key={i}/>) :
          this.props.trainees.map((trainee, i) => <AffiliationsEntry info={trainee} session={this.props.session} key={i}/>)
        } 
      </div>
    );
  }
}

export default Affiliations;