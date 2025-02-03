import { useState } from "react";
import { videologo1, videologo2 } from "../assets/assests";

const VideoIntro = () => {
  const videocontents = [
    {
      title: "Explore ideas together",
      description:
        "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
      logo: videologo1,
    },

    {
      title: "Bring those ideas to life",
      description:
        "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
      logo: videologo2,
    },
  ];
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <div className="video-intro-container">
        <div className="video-intro-text">
          <h1>Our Video Introductions</h1>
          <p>
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
          <div className="explore-section-container">
            {videocontents.map((content, index) => (
              <div key={index} className="explore-section">
                <div className="explore-img">
                  <img src={content.logo} />
                </div>
                <div className="text">
                  <span>{content.title}</span>
                  <p className="">{content.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="video-container">
          <iframe
            width="640px"
            height="420px"
            src="https://www.youtube.com/embed/f9EmQ5krpQI?si=HBCB2owED3RnTkEh&showinfo=0&rel=0&modestbranding=1&controls=0"
            title=""
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VideoIntro;
