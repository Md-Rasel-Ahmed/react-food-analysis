import React from "react";
import useCutomerReview from "../../hooks/useCutomerReview";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useCutomerReview([]);

  // console.log(reviews);
  // console.log(reviews);
  return (
    <div>
      <div className="container mt-4">
        <div className="row ">
          <div className="col-lg-6">
            <h1 className="fw-bold text-primary">ETHICAL MEATS</h1>
            <p>
              At Amilla Maldives we are committed to providing quality meat
              products and ingredients. Our meats come from farmers who raise
              their animals with humane protocols. Animals that are allowed to
              roam freely and eat foods that are natural to them. To do this we
              have partnered with the following suppliers.
            </p>
            <button className="btn btn-primary">View more</button>
          </div>
          <div className="col-lg-6 mt-4">
            <img
              src="https://www.amilla.com/uploads/amilla-fushi/eat-drink/16-bread-street-kitchen/Amilla%20Maldives%20-%20Lamb%20Chops.jpg"
              alt=""
              className="img-fluid h-75"
            />
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-primary fw-bold">
              CUSTOMER REVIEWS(3)
            </h2>
            <div className="reviews">
              {reviews.slice(0, 3).map((review) => {
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
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={faStar}
                        />
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
            <div className="show-reviews-btn text-center">
              <Link to="/review" className="btn btn-primary">
                Show all Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
