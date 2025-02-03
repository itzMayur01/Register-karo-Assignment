import React from "react";
import { handshake1, people, playLogo } from "../assets/assests";
import StarRating from "./StarRating";
import { IoStarSharp } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CiGrid41 } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";

const Home = () => {
  const RatingClientFinancialSection = [
    {
      id: 1,
      label: "Customer  Rating",
      ratingIcon: <CiGrid41 className="rating-icon" />,
      ratingNumber: "4.5+",
    },
    {
      id: 2,
      label: "Clients",
      ratingImg: people,
      ratingNumber: "20,000+",
    },
    {
      id: 3,
      label: "Financial Stability",
      ratingImg: handshake1,
      ratingNumber: "99.8%",
    },
  ];
  return (
    <>
      <div id="home" className="home-container">
        <div className="background-1">
          <div className="home-side-content">
            <ul>
              <li>
                <p>Annual Compliance</p>
              </li>
              <li>
                <p>Payroll Services</p>
              </li>
              <li>
                <p>Company Formation</p>
              </li>
              <li>
                <p>Annual Compliance</p>
              </li>
            </ul>
          </div>
          <div className="background-2">
            <div className="background-3"></div>
          </div>
          <div className="home-content">
            <h3 className="google-rating">
              <span className="star-1">
                <GoStarFill />
              </span>
              Google rating
              <StarRating rating={5} />
            </h3>
            <h1 className="heading-11">
              Your Trusted Partner For <span>Compliance </span>needs
            </h1>
            <div className="line"></div>

            <p className="description-home">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various,{" "}
              <span>registrations, tax filings,</span>
              and other <span>legal matters.</span>
            </p>

            <div className="rating-clients-financial">
              {RatingClientFinancialSection.map((data) => (
                <div className="customer-rating">
                  {data.ratingImg ? (
                    <img
                      className="rating-icon"
                      src={data.ratingImg}
                      alt={data.label}
                    />
                  ) : (
                    data.ratingIcon
                  )}

                  <div className="rating-text">
                    <span className="rating-number">{data.ratingNumber}</span>
                    <p className="rating-label">{data.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="btn-container">
              <button className="button-primary">Talk An Expert</button>
              <button className="button-secondary">
                <span>
                  <img src={playLogo} />
                </span>
                See how it works
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
