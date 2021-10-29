import React, { Fragment } from "react";

import "./Navbar.css";

function Navbar() {
  return (
    /* Write you HTML components/tags here. */
      <div className='navbar'>
      <div className='logo navbar__left'>Elixir</div>
      <div className='navbar_right'>
      <div className='navbar__right__box__left'>
        <div className='link'>Home</div>
        <div className='link'>Event</div>
        <div className='link'>Blogs</div>
        <div className='link'>About</div>
        <div className='link'>Contact</div>
      </div>
       <div className='navbar__right__box__right'>
        <input type="search" placeholder='search'/>
       </div>
      </div>
      </div>
  );
}

export default Navbar;
