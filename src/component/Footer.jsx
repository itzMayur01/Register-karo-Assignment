import {
  FaApple,
  FaCircleArrowUp,
  FaFacebook,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  const socials = [
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com",
    },
    {
      icon: <FaGoogle />,
      url: "https://www.google.co.in/",
    },
    {
      icon: <FaApple />,
      url: "https://www.apple.com/",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },
  ];

  const column2 = [
    {
      label: "Features",
    },
    {
      label: "Solutions",
    },
    {
      label: "Integrations",
    },
    {
      label: "Enterprise",
    },
    {
      label: "Solutions",
    },
  ];

  const column3 = [
    {
      label: "Partners",
    },
    {
      label: "Community",
    },
    {
      label: "Developers",
    },
    {
      label: "App",
    },
    {
      label: "Blog",
    },
  ];

  const column4 = [
    {
      label: "Channels",
    },
    {
      label: "Scale",
    },
    {
      label: "Watch the Demo",
    },
    {
      label: "Our Competition",
    },
  ];

  const column5 = [
    {
      label: "About Us",
    },
    {
      label: "News",
    },
    {
      label: "Leadership",
    },
    {
      label: "Media Kit",
    },
  ];

  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="column1">
            <p>
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <ul>
              {socials.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="column2">
            <ul>
              <h2>START A BUSINESS</h2>
              {column2.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </div>
          <div className="column3">
            <ul>
              <h2>GOVERNMENT REGISTRATION</h2>
              {column3.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </div>
          <div className="column4">
            <ul>
              <h2>COMPLIANCE & TAX</h2>
              {column4.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </div>
          <div className="column5">
            <ul>
              <h2>BIS & CDSCO</h2>
              {column5.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="copyright">
          <a href="#">
            <FaCircleArrowUp className="arrow-up" />
          </a>
          <p>Copyright © 2022 Registerkaro. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
