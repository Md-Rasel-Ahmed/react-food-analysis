import React from "react";

const Review = (props) => {
  const { name, img, reviews } = props.review;
  console.log(props);
  return (
    <div>
      <div className="container">
        <div className="d-flex gap-2">
          <img className="img-fluid img-rounded" src={img} alt="" />
          <div>
            <h2>{name}</h2>
            <p>{reviews}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
