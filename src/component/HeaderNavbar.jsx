import { CiSearch } from "react-icons/ci";
import { registerKaroLogo } from "../assets/assests";
import { FaAngleDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const HeaderNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <>
      <nav>
        <span className="menu-icon" onClick={toggleNav}>
          <IoIosMenu />
        </span>

        <div className="registerKaro-logo">
          <img
            className="registerKaro-logo-1"
            src={registerKaroLogo}
            alt="Logo"
          />
          <img
            className="gif"
            src="https://s3-alpha-sig.figma.com/img/090e/8f06/b11c8b29b04753e8d75af08ed5a8fb5b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRiz~iRfoXjpKzVJhmwJq3AAAIgw~bcofKtuuZfgq-mZS6021QxkCl~OX5jc4Pdx0rLKgruC6rh1qeSl7FRsjSrVJlRsFxfO~31GRcfNgoT3s-GcUWZG-q3aHDilu4qz96uN9S3zOrieDWAuVXtUHv8DJQpoqt93XwSQX43TaOY9ldN8Xj5jdd8IHvZscVkuIGCWwSdtkSDT0Ra0IJsqrV7g8G23U02-IsrjR37NP2gpYIVH3SvVFS8ENttKExjDlP4AYAk7hjGVLKexvUkCJLifPbgNvk~jS5CfGp3w4avK35cgXP87Ve5~9glEqBii35iqcZxdFDUIh23DteVwvg__"
            alt=""
          />
        </div>
        <div className="main-nav">
          <span
            className={`close-icon ${navOpen ? "" : "close"}`}
            onClick={closeNav}
          >
            <IoClose />
          </span>
          <ul className={` nav-items ${navOpen ? "open" : ""} `}>
            <li onClick={closeNav}>
              <a href="#home">Home</a>
            </li>
            <li onClick={closeNav}>
              <a href="#services">
                Our Services{" "}
                <span className="down-icon">
                  <FaAngleDown />
                </span>
              </a>
            </li>
            <li onClick={closeNav}>
              <a href="#blog">Blog</a>
            </li>
            <li onClick={closeNav}>
              <a href="#contact">Contact Us</a>
            </li>
            <li onClick={closeNav}>
              <a href="#about">About us</a>
            </li>
          </ul>
          <ul className="nav-search">
            <li>
              <span className="search-logo">
                <CiSearch />
              </span>
            </li>
            <li>
              <a href="#contact">
                <button>Talk An Expert</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="big-line"></div>
    </>
  );
};

export default HeaderNavbar;
