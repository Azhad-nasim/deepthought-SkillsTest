import React from "react";
import "./Sidebar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  const [showFirst, setShowFirst] = useState(false);

  const handleClick = () => {
    setShowFirst(!showFirst);
  };

  return (
    <div>
      {showFirst ? (
        <div className="sidebar">
          <div className="expand-sidebar">
            <span>Journey Board</span>
            <button onClick={handleClick}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                // style={{
                //   color: "black",
                //   position: "relative",
                //   left: "13rem",
                //   fontSize: "20px",
                //   backgroundColor: "white",
                //   padding: "10px 10px",
                //   borderRadius: "50%",
                //   top: "5px",
                // }}
                className="font"
              />
            </button>
            <ul className="list">
              <li className="heading">Explore the world of management</li>
              <li className="listing">Technical Project Management</li>
              <li className="listing">Threadbuild</li>
              <li className="listing">Structure you pointers</li>
              <li className="listing">4SA Method</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="sidebar2">
          <div className="collapse-sidebar">
            <span></span>
            <button onClick={handleClick}>
              <FontAwesomeIcon
                icon={faArrowRight}
                // style={{
                //   color: "black",
                //   position: "relative",
                //   right: "-4.5rem",
                //   fontSize: "20px",
                //   backgroundColor: "white",
                //   padding: "10px 10px",
                //   borderRadius: "50%",
                //   top: "5px",
                // }}
                className="font2"
              />
            </button>
          </div>
          <span className="number">1</span>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
