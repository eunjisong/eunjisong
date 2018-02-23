import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const Artwork = (props) => {
  return (
    <div>
      <div><h2>Artwork</h2></div>

      <div className='all-arts'>

        {
          props.artwork && props.artwork.map(art => {
            return <div key={art.id}>
              <Link to={`/artwork/${art.id}`}><img src='http://dogsaholic.com/wp-content/uploads/2015/05/Puppy-exercise-and-play-with-ball-810x487.jpg' width="200px" /></Link></div>
          })
        }

      </div>


    </div>

  )
}

const mapState = (state) => {
  //console.log(state)
  return {
    artwork: state.artwork,
    coding: state.coding
  }
}

export default connect(mapState)(Artwork)
