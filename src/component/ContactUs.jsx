import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Collaboration from "./Collaboration";

const ContactUs = () => {
  return (
    <>
      <div id="contact" className="contact-container">
        <h2 className="heading-1">1% OF THE INDUSTRY</h2>
        <h2 className="heading-2">Welcome to your new digital reality. Now.</h2>
        <form>
          <input type="email" placeholder="Enter your Email" />
          <button type="submit">Submit</button>
        </form>
        <ul>
          <li>
            <span>
              <FaCheckCircle />
            </span>
            <p>Instant results</p>
          </li>
          <li>
            <span>
              <FaCheckCircle />
            </span>
            <p>Instant results</p>
          </li>
          <li>
            <span>
              <FaCheckCircle />
            </span>
            <p>Instant results</p>
          </li>
          <li>
            <span>
              <FaCheckCircle />
            </span>
            <p>Instant results</p>
          </li>
        </ul>
      </div>
      <Collaboration />
    </>
  );
};

export default ContactUs;
