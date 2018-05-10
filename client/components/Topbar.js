import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">

        <div className="navbar-header">
        <Link className="navbar-brand" to='/'>Eunji Song</Link>
        </div>

        <ul className="nav navbar-nav">
          <li><Link to='/coding'>PROJECT</Link></li>
          <li><Link to='/artwork'>ART</Link></li>
          <li><Link to='/about' >CONTACT</Link></li>
        </ul>

      </div>
    </nav>
  )
}

