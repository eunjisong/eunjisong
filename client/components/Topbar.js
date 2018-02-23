import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
        <Link className="navbar-brand" to='/'>Eunji Song</Link>
        </div>

        <ul className="nav navbar-nav">
          <li><Link to='/artwork'>Artwork</Link></li>
          <li><Link to='/coding'>Coding</Link></li>
          <li><Link to='/about' >About</Link></li>
        </ul>

      </div>
    </nav>
  )
}

