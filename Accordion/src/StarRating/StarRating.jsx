import { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";
export default function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseHover = (index) => {
    setHover(index);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="stars">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "deactive"}
            size={40}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}
