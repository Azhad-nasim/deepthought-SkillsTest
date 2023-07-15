import React from "react";
import "./Notice.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";

function Notice() {
  const alphabets = "Notice Board".split("").reverse();
  const [showFirst, setShowFirst] = useState(false);

  const handleClick = () => {
    setShowFirst(!showFirst);
  };
  return (
    <div className="control">
      {showFirst ? (
        <div className="main">
          <span className="white-space"></span>
          <div className="notice">
            <button onClick={handleClick}>
              <FontAwesomeIcon
                icon={faXmark}
                // style={{
                //   color: "white",
                //   fontSize: "45px",
                //   position: "relative",
                //   bottom: "-0.2rem",
                //   display: "block",
                //   left: "21rem",
                //   cursor: "pointer",
                // }}
                className="x-mark"
              />
            </button>
            {Array.from(alphabets).map((bunch) => (
              <span className="alpha" key={bunch}>
                {bunch}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="b-notice">
          <button onClick={handleClick}>
            <FontAwesomeIcon
              icon={faPlus}
              // style={{
              //   color: "white",
              //   fontSize: "35px",
              //   position: "relative",
              //   bottom: "0rem",
              //   display: "block",
              //   left: "21rem",
              //   cursor: "pointer",
              // }}
              className="plus"
            />
          </button>
          {Array.from(alphabets).map((letter) => (
            <span className="alpha" key={letter}>
              {letter}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notice;
