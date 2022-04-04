import { useState } from "react";
import img from "../img/155-1550391_faces-in-circle-png-transparent-png.png";
let review = [
  {
    name: "Santa aysa",
    reviews:
      "This was one of the best restaurant I have had any meal in Maldives. Place is big with both indoor and outdoor seating. Since I went here in afternoon, indoor seating was well air-conditioned.",
    img: img,
  },
  {
    name: "Meheraj",
    reviews:
      "Very nice food and ambiance. Try the Lebanese chicken and the local Maldive soup. Good service",
    img: "https://www.pikpng.com/pngl/b/541-5413318_matt-round-png-round-portrait-pic-png-clipart.png",
  },
  {
    name: "Muize",
    reviews:
      "One of the best restaurant in Maldives. Staffs are very obedient and helpful.",
    img: "https://pngset.com/images/download-henry-circle-gentleman-full-size-image-pngkit-person-image-in-circle-human-face-fisheye-transparent-png-2725472.png",
  },
  {
    name: "Hafiz",
    reviews:
      "The food quality is good while the menu is limited with few choices. The service is quite good. The ambiance is fine but they they could definitely improve the seating area which seems clumsy and ordinary",
    img: "https://pngset.com/images/circle-profile-picture-face-person-human-clothing-transparent-png-488441.png",
  },
  {
    name: "Nazim",
    reviews:
      "Good location and cozy atmosphere though not much of Indian choice,no fresh veggies used(not their fault because of depended on other country)",
    img: "https://cdn.icon-icons.com/icons2/1860/PNG/512/man9_117995.png",
  },
  {
    name: "Nahida akter",
    reviews:
      "Had a great time with my friends, there’s variety of food for different diets, the view was stunning and serviced was excellent",
    img: img,
  },
  {
    name: "Rakib",
    reviews:
      "This was one of the best restaurant I have had any meal in Maldives. Place is big with both indoor and outdoor seating. Since I went here in afternoon, indoor seating was well air-conditioned.",
    img: "https://pngset.com/images/download-henry-circle-gentleman-full-size-image-pngkit-person-image-in-circle-human-face-fisheye-transparent-png-2725472.png",
  },
];
const useCutomerReview = (products) => {
  const [reviews, setRviews] = useState(review);

  return [reviews, setRviews];
};

export default useCutomerReview;
