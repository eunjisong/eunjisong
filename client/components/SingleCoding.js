import React from 'react';
import { connect } from 'react-redux';

const SingleCoding = (props) => {
  return (

    <div>

     { props.coding &&
     <div>
     <h3>{props.coding.description}</h3>
     <img src={props.coding.imageUrl} width='400px' />
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
