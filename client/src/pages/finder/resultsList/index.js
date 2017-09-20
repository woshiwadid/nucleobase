import React from 'react';

import ResultsEntry from '../resultsEntry';


const ResultsList = (props) => (

  <div style={{
    height: '95.4%',
    width: '100%',
    display: 'list',
    overflowY: 'scroll'
  }}>
    {
      props.profiles.map((profile, i) => (
        <ResultsEntry select={props.select} profile={profile} key={i} />
      ))
    }
  </div>

);

export default ResultsList;