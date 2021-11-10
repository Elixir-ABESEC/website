import React, { Fragment } from "react";
import { Component } from "react";

import "./Navbar.css";
import $ from 'jquery'; 

class Navbar extends Component {
  hideMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav Navbar") {
      x.className = "topnav";
      x.className += " responsive";
      $(".navbar__right__box__right").css({"width": "100%"});
      $(".navbar__right__box__right input").css({"width": "50%"});
    } else {
      x.className = "topnav Navbar";
      $(".navbar__right__box__right").css({"width": "40%"});
      $(".navbar__right__box__right input").css({"width": "80%"});
    }
  }
  render() {
    window.screen.orientation.onchange = function(e) { console.log('hello') }
    return (
      <div className="topnav Navbar" id="myTopnav">
          <div className="logo navbar__left">Elixir</div>
          <a href="#home" className="active link">Home</a>
          <a href="#event" className="link">Event</a>
          <a href="#blogs" className="link">Blogs</a>
          <a href="#about" className="link">About</a>
          <a href="#contact" className="link">Contact</a>
          <a href="#" className="icon" onClick={this.hideMenu}>
            <i className="fa fa-bars"></i>
          </a>
          <div className="navbar__right__box__right">
             <input type="search" placeholder="search" />
          </div>
      </div>
      
    );
  }
  
}

export default Navbar;
