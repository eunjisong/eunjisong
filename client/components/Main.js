import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Artwork from './Artwork';
import Coding from './Coding';


const Main = (props) => {

  return (
    <div>
      <div>
      <h3>ALL WORK</h3>
      <Artwork artwork={props.artwork} />
      <Coding coding={props.coding} />
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

export default connect(mapState)(Main)
