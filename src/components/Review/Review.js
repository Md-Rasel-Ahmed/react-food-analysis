import React from "react";
import useCutomerReview from "../../hooks/useCutomerReview";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = () => {
  const [reviews, setReviews] = useCutomerReview([]);
  return (
    <div>
      <div className="container">
        <h2 className="fw-bold text-center mt-3 text-primary">
          Our custom reviews
        </h2>
        <div className="reviews">
          {reviews.map((review) => {
            return (
              <div className="container">
                <div className="d-flex gap-5 mb-3 align-items-center justify-content-center">
                  <img
                    style={{ width: "100px", height: "100px" }}
                    className="img-fluid"
                    src={review.img}
                    alt=""
                  />
                  <div className="w-50">
                    <h2>{review.name}</h2>
                    <p>{review.reviews}</p>
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon
                      className="text-warning"
                      icon={faStarHalf}
                    />
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
