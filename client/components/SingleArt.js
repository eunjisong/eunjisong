import React from 'react';
import { connect } from 'react-redux';

const SingleArt = (props) => {
  return (
    <div>

      {
        props.artwork &&
        <div>
          <h2>{props.artwork.description}</h2>
          <img src={props.artwork.imageUrl} width='500px'/>
        </div>
      }

    </div>
  )
}

const mapState = (state, ownProps) => {
  return {
    artwork: state.artwork.find( site => site.id === +ownProps.match.params.id)
  }
}

export default connect(mapState)(SingleArt)
