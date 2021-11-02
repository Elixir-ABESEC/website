import React from "react";
import "./Footer.css";

function Footer() {
  const Icon = require("simple-icons/icons/github");
  console.log(Icon);
  return (
    <div className="Footer">
      <div className="Footer_Left">
        <div className="Footer_Box">
          <h2 className="Heading">Pages</h2>
          <div className="Sub_heading">Home</div>
          <div className="Sub_heading">Events</div>
          <div className="Sub_heading">Blogs</div>
          <div className="Sub_heading">About</div>
          <div className="Sub_heading">Contact</div>
        </div>
        <div className="Footer_Box">
          <h2 className="Heading">Tomothy</h2>
          <div className="Sub_heading">Eleanor Edwards</div>
          <div className="Sub_heading">Ted Robertson</div>
          <div className="Sub_heading">Annette Russell</div>
          <div className="Sub_heading">Jennie Mckinney</div>
          <div className="Sub_heading">Gloria Richards</div>
        </div>
        <div className="Footer_Box">
          <h2 className="Heading">Jane Black</h2>
          <div className="Sub_heading">Philip Jones</div>
          <div className="Sub_heading">Product</div>
          <div className="Sub_heading">Colleen Russell</div>
          <div className="Sub_heading">Marvin Hawkins</div>
          <div className="Sub_heading">Bruce Simmmons</div>
        </div>
      </div>
      <div className="Footer_Right">
        <div>
          <span className="Footer_Icon">
            <i class="fab fa-twitter"></i>
          </span>
          <span className="Footer_Icon">
            <i class="fab fa-facebook-square"></i>
          </span>
          <span className="Footer_Icon">
            <i class="fab fa-linkedin"></i>
          </span>
        </div>
        <h3 className="Heading">Subscribe to our Newsletter</h3>
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <form className="Footer_Form">
          <input
            type="text"
            className="Newsletter_Input"
            placeholder="Your Email"
          />
          <button className="Newsletter_Button">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
