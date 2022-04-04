import { useState } from "react";
import img from "../img/155-1550391_faces-in-circle-png-transparent-png.png";
let review = [
  {
    name: "Santa aysa",
    reviews: "too much tasting and this food is maldives!",
    img: img,
    rating: "4.0",
  },
  {
    name: "Meheraj",
    reviews:
      "Very nice food and ambiance. Try the Lebanese chicken and the local Maldive beef burger.",
    img: "https://www.pikpng.com/pngl/b/541-5413318_matt-round-png-round-portrait-pic-png-clipart.png",
    rating: "5.0",
  },
  {
    name: "Muize",
    reviews:
      "The price is low inside this burger and One of the best restaurant in Maldives. Staffs are very obedient and helpful.",
    img: "https://pngset.com/images/download-henry-circle-gentleman-full-size-image-pngkit-person-image-in-circle-human-face-fisheye-transparent-png-2725472.png",
    rating: "3.4",
  },
  {
    name: "Hafiz",
    reviews:
      "The food quality is good while the menu is limited with few choices. The service is quite good. The ambiance is fine but they they could definitely improve the seating area which seems clumsy and ordinary",
    img: "https://pngset.com/images/circle-profile-picture-face-person-human-clothing-transparent-png-488441.png",
    rating: "5.0",
  },
  {
    name: "Nazim",
    reviews:
      "Good location and cozy atmosphere though not much of Indian choice,no fresh veggies used(not their fault because of depended on other country)",
    img: "https://www.pikpng.com/pngl/b/541-5413318_matt-round-png-round-portrait-pic-png-clipart.png",
    rating: "5",
  },
  {
    name: "Nahida akter",
    reviews:
      "Had a great time with my friends, there’s variety of food for different diets, the view was stunning and serviced was excellent",
    img: img,
    rating: "4.2",
  },
  {
    name: "Rakib",
    reviews:
      "This was one of the best restaurant I have had any meal in Maldives. Place is big with both indoor and outdoor seating. Since I went here in afternoon, indoor seating was well air-conditioned.",
    img: "https://pngset.com/images/download-henry-circle-gentleman-full-size-image-pngkit-person-image-in-circle-human-face-fisheye-transparent-png-2725472.png",
    rating: "4.5",
  },
];
const useCutomerReview = (products) => {
  const [reviews, setRviews] = useState(review);

  return [reviews, setRviews];
};

export default useCutomerReview;
