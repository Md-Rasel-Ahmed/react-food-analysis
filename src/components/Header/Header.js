import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <Link to="/home">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
