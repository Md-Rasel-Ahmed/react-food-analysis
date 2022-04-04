import { useState } from "react";
let review = [
  {
    name: "Rakib",
    reviews:
      "This was one of the best restaurant I have had any meal in Maldives. Place is big with both indoor and outdoor seating. Since I went here in afternoon, indoor seating was well air-conditioned.",
    img: "https://splendidcleaning.ca/wp-content/uploads/2017/06/person-img-2.jpg",
  },
  {
    name: "Meheraj",
    reviews:
      "Very nice food and ambiance. Try the Lebanese chicken and the local Maldive soup. Good service",
    img: "https://splendidcleaning.ca/wp-content/uploads/2017/06/person-img-2.jpg",
  },
  {
    name: "Muize",
    reviews:
      "One of the best restaurant in Maldives. Staffs are very obedient and helpful.",
    img: "https://splendidcleaning.ca/wp-content/uploads/2017/06/person-img-2.jpg",
  },
  {
    name: "Hafiz",
    reviews:
      "The food quality is good while the menu is limited with few choices. The service is quite good. The ambiance is fine but they they could definitely improve the seating area which seems clumsy and ordinary",
    img: "https://splendidcleaning.ca/wp-content/uploads/2017/06/person-img-2.jpg",
  },
  {
    name: "Nazim",
    reviews:
      "Good location and cozy atmosphere though not much of Indian choice,no fresh veggies used(not their fault because of depended on other country)",
    img: "https://splendidcleaning.ca/wp-content/uploads/2017/06/person-img-2.jpg",
  },
  {
    name: "Rasel",
    reviews:
      "Had a great time with my friends, there’s variety of food for different diets, the view was stunning and serviced was excellent",
    img: "https://splendidcleaning.ca/wp-content/uploads/2017/06/person-img-2.jpg",
  },
  {
    name: "Rakib",
    reviews:
      "This was one of the best restaurant I have had any meal in Maldives. Place is big with both indoor and outdoor seating. Since I went here in afternoon, indoor seating was well air-conditioned.",
    img: "https://splendidcleaning.ca/wp-content/uploads/2017/06/person-img-2.jpg",
  },
];
const useCutomerReview = (products) => {
  const [reviews, setRviews] = useState(review);

  return [reviews, setRviews];
};

export default useCutomerReview;
