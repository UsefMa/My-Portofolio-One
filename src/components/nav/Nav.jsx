import React from "react";
import logo from "../../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavStyle.css";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [togle, setTogele] = useState(false);
  const clicked = () => setTogele(!togle);

  return (
    <>
      <div className="nav-container" id="navbar">
        <Link to="about" smooth={true} duration={2000}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className={togle ? "nav-list active" : "nav-list "}>
          <li>
            <Link to="about" smooth={true} duration={2000}>
              About
            </Link>{" "}
          </li>
          <li>
            <Link to="project" smooth={true} duration={2000}>
              Projects
            </Link>{" "}
          </li>
          <li>
            <Link to="chat" smooth={true} duration={2000}>
              Chat
            </Link>{" "}
          </li>
        </ul>
        <div onClick={clicked} className="mobile">
          {togle ? (
            <FaTimes size={20} className="humb" />
          ) : (
            <FaBars className="humb" size={20} />
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
