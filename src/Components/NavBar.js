import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top ms-3 me-3"
              alt=""
            />
            <span style={{ color: "#fff" }}>Online Shopping Application</span>
          </a>
          <div className="myNamvigationLinks">
            <Link className="myLink" to="/">
              Home
            </Link>

            <Link className="myLink" to="/about">
              About Us
            </Link>
            <Link className="myLink" to="/services">
              Services
            </Link>
            <Link className="myLink" to="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
