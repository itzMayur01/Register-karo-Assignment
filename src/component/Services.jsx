import React from "react";
import ServiceCard from "./Card";
import {
  serviceIcon1,
  serviceIcon2,
  serviceIcon3,
  serviceIcon4,
  serviceIcon5,
  serviceIcon6,
} from "../assets/assests";

const Services = () => {
  const serviceCardContent = [
    {
      cardTitle: "Company Formation",
      cardDescription:
        "Build web-based solutions that enhance customer experience.",
      cardIcon: serviceIcon1,
    },
    {
      cardTitle: "Company Secretarial Services",
      cardDescription:
        "Make data-driven decisions and utilize technology to reach business goals.",
      cardIcon: serviceIcon2,
    },

    {
      cardTitle: "Virtual Office Address",
      cardDescription:
        "Foster customer relationships by effectively serving your market.",
      cardIcon: serviceIcon3,
    },

    {
      cardTitle: "Annual Compliance Services",
      cardDescription:
        "Turn your ideas into modern products with our design experts.",
      cardIcon: serviceIcon4,
    },

    {
      cardTitle: "Payroll Services",
      cardDescription:
        "Expand your business across the globe with minimal effort.",
      cardIcon: serviceIcon5,
    },

    {
      cardTitle: "Bookkeeping Services",
      cardDescription:
        "Steering user behaviours with creative design, data insights &technology.",
      cardIcon: serviceIcon6,
    },
  ];

  return (
    <>
      <div id="services" className="services-container">
        <div className="service-container">
          <h2 className="heading-1">WELCOME TO REGISTERKARO.IN</h2>
          <h2 className="heading-2">Explore Our Services</h2>
          <div className="service-card-container">
            {serviceCardContent.map((service, index) => (
              <ServiceCard
                key={index}
                cardTitle={service.cardTitle}
                cardDes={service.cardDescription}
                cardIcon={service.cardIcon}
                cardBtn="Learn More"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="see-all-services-btn-container">
        <button className="see-all-services-btn">See All Services</button>
      </div>
    </>
  );
};

export default Services;
