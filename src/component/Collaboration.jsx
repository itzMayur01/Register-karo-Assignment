import React from "react";
import { SiCoinbase } from "react-icons/si";
import {
  coinbase,
  dropbox,
  slack,
  spotify,
  webflow,
  zoom,
} from "../assets/assests";

const Collaboration = () => {
  return (
    <>
      <div className="collaboration-Container">
        <div className="collaboration-Header">
          <img src={coinbase} alt="" />
          <img src={spotify} alt="" />
          <img src={slack} alt="" />
          <img src={dropbox} alt="" />
          <img src={webflow} alt="" />
          <img src={zoom} alt="" />
        </div>
      </div>
    </>
  );
};

export default Collaboration;
