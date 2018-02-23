import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Coding = (props) => {
  return (
    <div>
      <div><h2>Coding</h2></div>

      <div className='all-coding'>

        {
          props.coding && props.coding.map(site => {
            return <div key={site.id}>
              <Link to={`/coding/${site.id}`}>
                <img src='https://2static.fjcdn.com/large/pictures/c3/1e/c31e9d_5929666.jpg' width="200px" />
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

