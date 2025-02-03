import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { useRef, useState } from "react";
import {
  testimonalImg1,
  testimonalImg2,
  testimonallogo,
} from "../assets/assests";
import StarRating from "./StarRating";

const Testimonial = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonals = [
    {
      logo: testimonallogo,
      name: "Chris",
      title: "President and CEO, PrintReach, USA",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      image: testimonalImg1,
    },
    {
      logo: testimonallogo,
      name: "Chris",
      title: "President and CEO, PrintReach, USA",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      image: testimonalImg2,
    },
    {
      logo: testimonallogo,
      name: "Chris",
      title: "President and CEO, PrintReach, USA",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      image: testimonalImg1,
    },
    {
      logo: testimonallogo,
      name: "Chris",
      title: "President and CEO, PrintReach, USA",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      image: testimonalImg2,
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Adjust scroll speed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      updateActiveIndex(direction);
    }
  };

  const updateActiveIndex = (direction) => {
    setActiveIndex((prev) => {
      if (direction === "left") return prev > 0 ? prev - 1 : 0;
      if (direction === "right")
        return prev < testimonals.length - 1 ? prev + 1 : prev;
      return prev;
    });
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-section">
        <div className="top-testimonal-section-1">
          <h2>What people say about us</h2>
          <span>
            <FaCircleArrowLeft
              className="btn-left"
              onClick={() => scroll("left")}
            />
            <FaCircleArrowRight
              className="btn-right"
              onClick={() => scroll("right")}
            />
          </span>
        </div>

        {/* Testimonial Cards */}
        <div ref={scrollRef} className="testimonial-card">
          {testimonals.map((testimonal, index) => (
            <div key={index} className="testimonial-text">
              <div className="logo">
                <img src={testimonal.logo} alt="Logo" />
                <StarRating rating={5} className="rating-testimonial" />
              </div>
              <p>{testimonal.content}</p>
              <div className="testimonial-author">
                <div className="testimonal-img-section">
                  <img src={testimonal.image} alt="author" />
                </div>
                <div className="author-name">
                  <span className="name">{testimonal.name}</span>
                  <span className="author-company">{testimonal.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="testimonial-dots">
          {testimonals.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => {
                scrollRef.current.scrollTo({
                  left: index * 320,
                  behavior: "smooth",
                });
                setActiveIndex(index);
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
