import React from "react";
import {
  monday,
  morpheus,
  oracle,
  samsung,
  segment,
} from "../assets/assests.js";

const CompanyLogo = () => {
  return (
    <>
      <div className="companies">
        <div className="section-realted-compamnies">
          <div className="heading-container">
            <div>Trusted By Over 100+ Startups and freelance business</div>
          </div>
          <div className="logos">
            <img src={oracle} alt="" width={"137.15px"} height={"17.83px"} />
            <img src={morpheus} alt="" width={"137.15px"} height={"28.33px"} />
            <img src={morpheus} alt="" width={"137.15px"} height={"28.33px"} />
            <img src={samsung} alt="" width={"137.15px"} height={"21.01px"} />
            <img src={monday} alt="" width={"137.15px"} height={"17.83"} />
            <img src={segment} alt="" width={"137.15px"} height={"17.83"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyLogo;
