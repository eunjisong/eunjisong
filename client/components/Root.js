//React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//Component
import Topbar from './Topbar';
import AllWorks from './AllWorks';
import ArtWork from './Artwork';
import Coding from './Coding';

//Thunk

// redux
import { connect } from 'react-redux';

class Root extends Component {
  componentDidMount(){

  }

  render(){
    return(
      <Router>
          <div>
            <Topbar />
            <Redirect path='/' to='/allworks' />
            <Route path='/allworks' component={AllWorks} />

            <Route path='/artwork' component={ArtWork} />
            <Route path='/coding' component={Coding} />


          </div>
      </Router>


    )
  }
}

const mapState = state => {
  return {

  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default connect(mapState, mapDispatch)(Root)
