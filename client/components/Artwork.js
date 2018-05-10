import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const Artwork = (props) => {
  return (
    <div>
      <div><h2>Artwork</h2></div>

      <div className='itemBox'>

        {
          props.artwork && props.artwork.map(art => {
            return <div className="item" key={art.id}>
              <Link to={`/artwork/${art.id}`}><img src={art.imageUrl} width="300px" /></Link></div>
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
