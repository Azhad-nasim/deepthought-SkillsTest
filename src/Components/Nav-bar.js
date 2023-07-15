import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav-bar.css";
import {
  faHouseChimney,
  faBinoculars,
  faScrewdriverWrench,
  faBell,
  faUser,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

function Navbar1() {
  return (
    <nav className=" navbar">
      <div className="logo">
        <img
          className="block h-8 w-auto "
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt=""
        />
      </div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu2">
          <li>Home</li>
          <li>Search</li>
          <li>Setting</li>
          <li>Notification</li>
          <li>Profile</li>
        </div>
        <div className="menu">
          <li
            style={{ background: "blue", borderRadius: "50%", color: "white" }}
          >
            <a href="#">
              <FontAwesomeIcon icon={faHouseChimney} />
            </a>
          </li>
          <li
            style={{ background: "blue", borderRadius: "50%", color: "white" }}
          >
            <a href="#">
              <FontAwesomeIcon icon={faBinoculars} />
            </a>
          </li>
          <li
            style={{ background: "blue", borderRadius: "50%", color: "white" }}
          >
            <a href="#">
              <FontAwesomeIcon icon={faScrewdriverWrench} />
            </a>
          </li>
          <li
            style={{ background: "blue", borderRadius: "50%", color: "white" }}
          >
            <a href="#">
              <FontAwesomeIcon icon={faBell} />
            </a>
          </li>
          <li>
            <a>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </a>
          </li>
          <li style={{ color: "blue", right: "1rem", position: "relative" }}>
            <a href="#">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar1;
