import React from "react";
import { appStoreLogo, phone, playStoreLogo } from "../assets/assests";
import ImportantNumbers from "./ImportantNumbers";

const AppDownload = () => {
  return (
    <>
      <div className="app-download-container">
        <div className="downlaod-left">
          <h2>Manage Your Services by your Mobile Phone</h2>
          <p>
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>
          <h4>Get the App</h4>
          <div className="app-download-buttons">
            <a href="#">
              <img src={appStoreLogo} alt="Download App" />
              <div className="app-store">
                <p>Get it on</p>
                <h5>App Store</h5>
              </div>
            </a>

            <a href="#">
              <img src={playStoreLogo} alt="Download App" />
              <div className="app-store">
                <p>Get it on</p>
                <h5>App Store</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="downlaod-right">
          <img src={phone} alt="App Download" />
        </div>
      </div>
      {/* <ImportantNumbers /> */}
    </>
  );
};

export default AppDownload;
