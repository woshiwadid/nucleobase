import React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '25%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'gray'
      }}>
        <GridList style={{margin: '0'}}>
          {
            this.props.reviews.map((review, i) => (
              <GridTile
                key={i}
              >
                <div id={'Tile' + i} style={{height: '100%', minWidth: '200px'}}>
                  Some Content
                </div>
              </GridTile>
            ))
          }
        </GridList>
      </div>

    );

  }
}

export default Reviews;