import React from "react";
import "./Display.css";
import { useState } from "react";
// import Display2 from "./Display2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faLightbulb,
  faMessage,
  faClipboardQuestion,
  faClover,
} from "@fortawesome/free-solid-svg-icons";

function Display() {
  const [video, setVideo] = useState(5);
  const [thread, setThread] = useState(5);
  const [box1Collapsed, setBox1Collapsed] = useState(false);
  const [box2Collapsed, setBox2Collapsed] = useState(false);
  const [display, setDisplay] = useState(true);
  const [display2, setDisplay2] = useState(true);

  const [showFirst, setShowFirst] = useState(false);

  // const handledisp = () => {
  //   setDisplay(!display);
  // };

  const handleClick = () => {
    setTimeout(() => {
      setShowFirst(!showFirst);
    }, 500);
  };
  const handleCollapseBox1 = () => {
    setBox1Collapsed(!box1Collapsed);
    setDisplay(!display);

    setTimeout(() => {
      setDisplay(true);
    }, 500);

    setTimeout(() => {
      setBox1Collapsed(false);
    }, 500);

    if (video === 5) {
      setVideo(1);
      setTimeout(() => {
        setVideo(5);
      }, 500);
    }
  };

  const handleCollapseBox2 = () => {
    setBox2Collapsed(!box2Collapsed);
    setDisplay2(!display2);

    setTimeout(() => {
      setDisplay2(true);
    }, 500);
    setTimeout(() => {
      setBox2Collapsed(false);
    }, 500);

    if (thread === 5) {
      setThread(0);
      setTimeout(() => {
        setThread(5);
      }, 500);
    }
  };

  return (
    <>
      <div className="display">
        <div className="upper">
          <div className={`boxalpha ${box1Collapsed ? "collapsed" : ""}`}>
            <div className="box-1">
              <h3>Technical Project Management</h3>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                // style={{
                //   backgroundColor: "black",
                //   fontSize: "25px",
                //   position: "relative",
                //   bottom: "0.5rem",
                //   left: "29rem",
                //   borderRadius: "50%",
                //   color: "white",
                //   cursor: "pointer",
                // }}
                className="excla1"
                onClick={handleCollapseBox1}
              />
            </div>

            {display && (
              <div className="sentence d-none">
                <span className="description">Description:</span> Story of
                Alignment Scope of Agility Specific Accountable Staggering
                Approach
              </div>
            )}
            <div className="video" style={{ top: `${video}rem` }}>
              <iframe
                src="https://www.youtube.com/embed/TiMRwri1xJ8"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
                className="video1"
              ></iframe>
            </div>
          </div>
          <div className={`boxbeta ${box2Collapsed ? "collapsed" : ""}`}>
            <div className="box-1">
              <h3
                style={{
                  position: "relative",
                  left: "-1rem",
                  alignContent: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Threadbuild
              </h3>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                // style={{
                //   backgroundColor: "black",
                //   fontSize: "25px",
                //   position: "relative",
                //   bottom: "0.5rem",
                //   left: "29rem",
                //   borderRadius: "50%",
                //   color: "white",
                //   cursor: "pointer",
                // }}
                className="excla2"
                onClick={handleCollapseBox2}
              />
            </div>
            {display2 && (
              <div className="sentence">
                <span className="description">Description:</span> Watch the
                video and threadbuild, and jot out key threads while watching
                the video
              </div>
            )}
            {showFirst ? (
              <div className="thread-2">
                <span className="vector-2" onClick={handleClick}>
                  &#10147;
                </span>
                <span className="typo">Thread A</span>
              </div>
            ) : (
              <div className="none">
                <div className="thread" style={{ top: `${thread}rem` }}>
                  <span className="vector" onClick={handleClick}>
                    &#10147;
                  </span>
                  <span className="typo">Thread A</span>
                </div>
                <div className="sub-thread">
                  <div className="small-box">
                    <div className="boxx">
                      <span>Sub thread 1</span>
                      <input
                        placeholder="Enter Text here"
                        type="text"
                        id="name"
                      />
                    </div>
                    <div className="boxx">
                      <span>Sub Interpretation 1</span>
                      <input
                        placeholder="Enter Text here"
                        type="text"
                        id="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    // style={{ padding: "3px" }}
                    className="small-icon"
                  />
                  <FontAwesomeIcon
                    icon={faMessage}
                    // style={{ padding: "3px" }}
                    className="small-icon"
                  />
                  <FontAwesomeIcon
                    icon={faClipboardQuestion}
                    // style={{ padding: "3px" }}
                    className="small-icon"
                  />
                  <FontAwesomeIcon
                    icon={faClover}
                    // style={{ padding: "3px" }}
                    className="small-icon"
                  />
                </div>
                <div className="select">
                  <div className="small">
                    <select className="right">
                      <optgroup>
                        <option value="option1">select Category</option>
                        <option value="option2">Remark</option>
                        <option value="option3">Sub-argument</option>
                        <option value="option3">Sub-explanation</option>
                        <option value="option3">Core-principal</option>
                      </optgroup>
                    </select>
                    <select className="left">
                      <optgroup>
                        <option value="option1">Select Process</option>
                        <option value="option2">Question</option>
                        <option value="option3">Analogy</option>
                        <option value="option3">Sarcasm</option>
                        <option value="option3">Insight</option>
                        <option value="option3">Counter-example</option>
                      </optgroup>
                    </select>
                  </div>
                  <button>
                    <span>+ Sub-thread</span>
                  </button>
                  <div className="boxx-big">
                    <span>Summary for Thread A</span>
                    <input
                      placeholder="Enter Text here"
                      type="text"
                      id="name1"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className="lower">
          <div className="box">Box 3</div>
          <div className="box">Box 4</div>
        </div> */}
        {/* <Display2 /> */}
      </div>
    </>
  );
}

export default Display;
