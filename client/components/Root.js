//React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

//Component
import Topbar from './Topbar';
import Main from './Main';
import Artwork from './Artwork';
import Coding from './Coding';
import About from './About'
import SingleCoding from './SingleCoding'
import SingleArt from './SingleArt'


//Thunk
import { thunkAllArts } from '../reducers/artwork'
import { thunkAllCoding } from '../reducers/coding'

// redux
import { connect } from 'react-redux';

class Root extends Component {
  componentDidMount(){
    this.props.thunkAllArts()
    this.props.thunkAllCoding()
  }

  render(){
    return(
      <Router>
          <div>
            <Topbar />
            <Route exact path='/' component={Main} />
            <Route exact path='/about' component={About} />

            <Route exact path='/artwork' component={Artwork} />
            <Route exact path='/artwork/:id' component={SingleArt} />

            <Route exact path='/coding' component={Coding} />
            <Route exact path='/coding/:id' component={SingleCoding} />


          </div>
      </Router>
    )
  }
}

const mapState = state => {
  return {
    sites: state.sites,
    arts: state.arts
  }
}

const mapDispatch = dispatch => {
  return {
    thunkAllArts: () => dispatch(thunkAllArts()),
    thunkAllCoding: () => dispatch(thunkAllCoding())
  }
}

export default connect(mapState, mapDispatch)(Root)


