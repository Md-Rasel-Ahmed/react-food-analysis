import React from "react";
import useCutomerReview from "../../hooks/useCutomerReview";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useCutomerReview([]);
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-primary fw-bold">
              CUSTOMER REVIEWS
            </h2>
            <div className="reviews">
              {reviews.map((review) => (
                <Review review={review}></Review>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
