import React from "react";
import {
  IoArrowForwardCircle,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const ServiceCard = ({ cardIcon, cardTitle, cardDes, cardBtn }) => {
  return (
    <>
      <div className="service-card">
        <div className="service-icon">
          <img src={cardIcon} alt={cardTitle} />
        </div>
        <div className="service-content">
          <h3>{cardTitle}</h3>
          <div className="cardDes">
            <p>{cardDes}</p>
          </div>
        </div>
        <div className="cardBtn">
          <button>
            {cardBtn}
            <IoArrowForwardCircleOutline className="service-btn-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
