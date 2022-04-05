import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/404-page-not-found.jpg";
const NotFounded = () => {
  return (
    <div style={{ marginTop: "100px" }} className="text-center">
      <img src={img} className="img-fluid w-75" />
      <div>
        <Link
          className="bg-primary text-light p-2 text-decoration-none rounded"
          to="/"
        >
          Go to back
        </Link>
      </div>
    </div>
  );
};

export default NotFounded;
