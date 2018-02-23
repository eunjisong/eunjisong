import React from 'react';
import { connect } from 'react-redux';

const SingleArt = (props) => {
  return (
    <div>

      {
        props.artwork &&
        <div>
          <h2>{props.artwork.id}</h2>
          <img src="http://dogsaholic.com/wp-content/uploads/2015/05/Puppy-exercise-and-play-with-ball-810x487.jpg" />
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
