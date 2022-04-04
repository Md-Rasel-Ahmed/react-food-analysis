import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../customLInk/CustomLink";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="d-flex gap-3 mx-auto">
          <CustomLink className="nav-link" to="/">
            Home
          </CustomLink>
          <CustomLink className="nav-link" to="/review">
            Review
          </CustomLink>
          <CustomLink className="nav-link" to="/dashboard">
            Dashboard
          </CustomLink>
          <CustomLink className="nav-link" to="/blog">
            Blog
          </CustomLink>
          {/* <Link className="nav-link" to="/review"> */}
          {/* Review
          </Link>
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-link" to="/blog">
            Blog
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
