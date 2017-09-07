import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div style={{height: '96%', width: '100%'}}>
        
        <div className="col-lg-3 col-sm-12" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff'
        }}>
          <div className="row">
            <div className="col-lg-12 col-sm-4" style={{
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}>
              <img src="https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg" style={{height: '100%'}}/>
            </div>

            <div className="col-lg-12 col-sm-4" style={{
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              Some other stuff
              <br/>
              This can be a settings mini-tab
              <br/>
              or some sort of messaging center?
            </div>

            <div className="col-lg-12 col-sm-4" style={{
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              Some other stuff
              <br/>
              This can be a settings mini-tab
              <br/>
              or some sort of messaging center?
            </div>
          </div>
        </div>

        <div className="col-lg-9 col-sm-12" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
          <div className="row">
            <div className="col-lg-12 col-sm-6 col-6" style={{
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              Notification board?
            </div>

            <div className="col-lg-12 col-sm-6 col-6" style={{
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              Upcoming things?
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Main; 