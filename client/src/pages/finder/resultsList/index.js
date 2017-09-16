import React from 'react';

import Avatar from 'material-ui/Avatar';

import ResultsEntry from '../resultsEntry';


class ResultsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '96%',
        width: '100%',
        display: 'list',
        overflowY: 'scroll'
      }}>
        {
          this.props.profiles.map((profile, i) => (
            <ResultsEntry profile={profile} key={i} />
          ))
        }
      </div>

    );

  }
}

export default ResultsList;