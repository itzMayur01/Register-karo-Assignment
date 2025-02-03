import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const StarRating = ({ rating, className }) => {
  return (
    <div className={`star-5-container ${className} `}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{ color: index < rating ? "#FFC226" : "#ccc" }}
          className="star-5"
        >
          <FaStar />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
