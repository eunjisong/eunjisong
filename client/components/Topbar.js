import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <nav>
      <Link to='/about' >About</Link>
      <Link to='/artwork'>Artwork</Link>
      <Link to='/coding'>Coding</Link>
    </nav>
  )
}

