import React from "react";
import { about, aboutDesign, aboutDesign2 } from "../assets/assests.js";
import WhyRegisterKaro from "./WhyRegisterKaro.jsx";
import HappyClients from "./HappyClients.jsx";
import VideoIntro from "./VideoIntro.jsx";

const About = () => {
  return (
    <>
      <div id="about" className="about-container-main">
        <div className="about-container">
          <div className="left-container">
            <h2 className="heading-1">WELCOME TO REGISTERKARO.IN</h2>
            <h2 className="heading-2">
              About <span>Register Karo</span>
            </h2>
            <p className="about-desc">
              We have been using Intelegencia as our DevOps vendor for our field
              service applications over the last couple of years and I’m
              extremely pleased with their performance, ability to execute, and
              willingness to adapt in our ever changing environment. Perry is an
              outstanding leader who is fanatical about customer satisfaction.
              He has built a solid team which has consistently delivered on
              projects thereby exceeding everyone’s expectations. <br />
              <br />I would strongly recommend their services to any
              organization that is looking for solid, reliable, and predictable
              outcomes.
            </p>
            <button className="about-btn">Learn More</button>
          </div>

          <div className="right-container">
            <img src={about} alt="about" />
          </div>

          <div className="about-design"></div>
          <div className="about-design2"></div>
        </div>
      </div>

      <WhyRegisterKaro />

      <VideoIntro />

      <HappyClients />
    </>
  );
};

export default About;
