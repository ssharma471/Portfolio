import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import resume from '../../assets/sidhantRESUME.pdf'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="" width={70} height={70} />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="desktopMenuListItem"
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-20}
          duration={1000}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="desktopMenuListItem"
        >
          Contact Me
        </Link>
        <a
        style={{color:'white'}}
        activeClass="active"
          href="https://github.com/ssharma471"
          target="_blank"
          rel="noopener noreferrer"
          className="desktopMenuListItem"
        >
          GitHub
        </a>
        <a download="Resume"
        style={{color:'white'}}
        activeClass="active"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="desktopMenuListItem"
        >
          Resume Download
        </a>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contacts")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img
          src=""
          alt=""
          className="desktopMenuImg"
          activeClass="active"
          to="contact"
        />
        Send Me a Message
      </button>
    </nav>
  );
};

export default Navbar;
