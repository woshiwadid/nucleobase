import React from 'react';

class DashNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <ul>
          <li><a href="/dashboard/">Dashboard</a></li>
          <li><a href="/dashboard/edit">Edit</a></li>
          <li><a href="/dashboard/schedule">Schedule</a></li>
          <li><a href="/dashboard/trainers">Trainers</a></li>
          <li><a href="/dashboard/clients">Clients</a></li>
        </ul>
      </div>
    );

  }
}

export default DashNav;