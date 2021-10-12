import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    /* Write you HTML components/tags here. */
    <div className="flex navbar">
      <div className="Nav__left">
        <div className="logo flex">
          <img src="https://codechefvit.com/assets/images/logos/ccwhite.png" alt="logo" />
        </div>
      </div>
      <div class="Nav__Right">
        <ul className="List flex">
          <li>Home</li>
          <li>Event</li>
          <li>Webinars</li>
          <li>Projects</li>
          <li>Teams</li>
          <li>Sponsors</li>
          <li>Updates</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
