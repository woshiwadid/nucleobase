import React from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';

import ReactFilestack from 'filestack-react';

import AJAX from '../../../ajax';

class StepFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: 'https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg',
      gymText: '', 
      gyms: []
    };
    this.gymNameHandler = this.gymNameHandler.bind(this);
    this.updateGymList = this.updateGymList.bind(this);
    this.removeGymEntry = this.removeGymEntry.bind(this);
    this.fileHandler = this.fileHandler.bind(this);
    this.stepFourUpdater = this.stepFourUpdater.bind(this);
  }

  gymNameHandler(e) {
    this.setState({
      gymText: e.target.value
    });
  }

  updateGymList() {
    const { gyms, gymText } = this.state;
    var updated = [...gyms];
    updated.push(gymText);
    this.setState({
      gymText: '',
      gyms: updated
    });
  }

  removeGymEntry(index) {
    const { gyms } = this.state;
    var updated = [...gyms];
    updated.splice(index, 1);
    this.setState({
      gyms: updated
    });
  }

  fileHandler(e) {
    this.setState({
      imgSrc: e.filesUploaded[0].url
    });
  }

  stepFourUpdater() {
    const { gyms, imgSrc } = this.state;
    let options = {
      gyms: JSON.stringify(gyms),
      image_url: imgSrc
    };
    this.props.updateInfo(options);
  }

  render() {


    return (

      <div style={{
        minWidth: '450px',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <h3>Upload Profile Picture</h3>
      
        <div style={{
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
          <img src={this.state.imgSrc} style={{height: '100%'}}/>
        </div>
        
        <ReactFilestack 
          apikey='ACFzyErjLQxgqOcEOISADz'
          onSuccess={this.fileHandler}
        />
        <span style={{height: '30px'}}></span>
        <div style={{
          height: '275px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h3>Gym Memberships</h3>
          <div style={{
            height: '150px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            backgroundColor: '#f3f2f1'
          }}>
            {
              this.state.gyms.map((gym, i) => (
                <div key={i} style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0px 15px'
                }}>
                  &bull;&nbsp;{gym}
                  <IconButton 
                    style={{height: '30px', width: '30px', padding: '0'}}
                    onClick={() => this.removeGymEntry(i)}
                  >
                    <Clear />
                  </IconButton>
                </div>
              ))
            }
          </div>
          <div style={{
            width: '96%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <TextField
              hintText="Gym name..."
              value={this.state.gymText}
              onChange={this.gymNameHandler}
            />
            <FlatButton 
              label="Add Gym"
              onClick={this.updateGymList}
            />
          </div>
        </div>

        <div style={{
          width: '100%',
          height: '60px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <RaisedButton 
            label='Create Profile'
            labelColor="#ffffff"
            backgroundColor="#78909c"
            onClick={this.stepFourUpdater}
          />
        </div>


      </div>

    );

  }
}

export default StepFour;