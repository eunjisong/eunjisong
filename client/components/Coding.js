import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Coding = (props) => {
  return (
    <div>
      <div><h2>Coding</h2></div>

      <div className='itemBox'>

        {
          props.coding && props.coding.map(site => {
            return <div className="item" key={site.id}>
              <Link to={`/coding/${site.id}`}>
                <img src={site.imageUrl} width="300px" />
              </Link></div>
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

export default connect(mapState)(Coding)

