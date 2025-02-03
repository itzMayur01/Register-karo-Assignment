import { CiMail } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail, IoMdCall } from "react-icons/io";
const HeaderTop = () => {
  return (
    <>
      <div className="header-top-container">
        <ul>
          <li>
            <a href="#">
              <span className="mail">
                <span>
                  <IoIosMail />
                </span>
                www.registerkaro.in
              </span>
            </a>
          </li>

          <div className="ver-line"></div>

          <li>
            <a href="#">
              <span className="phone-number">
                <span>
                  <IoMdCall />
                </span>
                +918447746183
              </span>
            </a>
          </li>

          <div className="ver-line"></div>
          <div className="logos-container">
            <li>
              <a href="#">
                <span className="icon-facebook header-top-logos">
                  <FaFacebook />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-twitter header-top-logos">
                  <FaXTwitter />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-instagram header-top-logos">
                  <LuInstagram />
                </span>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default HeaderTop;
