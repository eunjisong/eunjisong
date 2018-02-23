import React from 'react';
import { connect } from 'react-redux';

const SingleCoding = (props) => {
  return (

    <div>

     { props.coding &&
     <div>
     <h3>{props.coding.id}</h3>
     <h3>{props.coding.description}</h3>
     <img src="https://2static.fjcdn.com/large/pictures/c3/1e/c31e9d_5929666.jpg" />
     </div>
    }


    </div>

  )
}

const mapState = (state, ownProps) => {
  return {
    coding: state.coding.find( site => site.id === +ownProps.match.params.id)
  }
}

export default connect(mapState)(SingleCoding)
