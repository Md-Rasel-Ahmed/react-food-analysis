import React from "react";
import useCutomerReview from "../../hooks/useCutomerReview";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = () => {
  const [reviews, setReviews] = useCutomerReview([]);
  return (
    <div>
      <div style={{ marginTop: "100px" }} className="container">
        <h2 className="fw-bold text-center mt-3 text-primary">
          Our custom reviews
        </h2>
        <div className="reviews">
          {reviews.map((review) => {
            return (
              <div key={review.id} className="container">
                <div className="d-lg-flex gap-5 mb-3 ">
                  <img
                    style={{ width: "100px", height: "100px" }}
                    className="img-fluid"
                    src={review.img}
                  />
                  <div className="">
                    <h2>{review.name}</h2>
                    <p>{review.reviews}</p>
                    <p>
                      Rating :{" "}
                      <strong className="text-warning">{review.rating}</strong>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
