import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>TodoList</h1>
      <Link className = "linkStyle" to="/">Home</Link> | 
      <Link className = "linkStyle" to ="/about">About</Link>
    </header>
  )
}

export default Header;