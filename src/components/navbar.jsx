import React from 'react';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="logo">
        <h1>Company Logo</h1>
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Products</a>
      </div>
    </nav>
  );
}

export default Navbar;