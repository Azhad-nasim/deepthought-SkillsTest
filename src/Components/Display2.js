import React from "react";
import "./Display2.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { Editor } from "@tinymce/tinymce-react";

function Display2() {
  const [main, setMain] = useState(0);
  const [main1, setMain1] = useState(0);
  const [top1, setTop1] = useState(0);
  const [top2, setTop2] = useState(0);
  const [box3Collapsed, setBox3Collapsed] = useState(false);
  const [display3, setDisplay3] = useState(true);
  const [box4Collapsed, setBox4Collapsed] = useState(false);
  const [display4, setDisplay4] = useState(true);
  const [showFirst1, setShowFirst1] = useState(false);
  const [showFirst2, setShowFirst2] = useState(false);
  const [showFirst3, setShowFirst3] = useState(false);
  const [see, setSee] = useState(false);
  const [see1, setSee1] = useState(false);
  const fullText =
    "You have a concept; how will you put it into practice to create a product? How will you organize the final product? Can the product's MVP be created in a week?How will you come up with a plan? Do you need a strategy or just a plan to succeed?";
  const limitedText = fullText.split("").slice(0, 172).join("");
  const [see2, setSee2] = useState(false);
  const fullText1 = `"Story for Alignment: Using the concepts we already have, let's create a toy story to explain why the project is being built. By including Raju Chitu in the narrative, let's provide a real-world illustration of how that product will be used by actual customers. That will be a macro story in which we develop an actual product from a concept. 

  "`;
  const limitedText1 = fullText1.split("").slice(0, 172).join("");
  const [see3, setSee3] = useState(false);

  const handleSee2 = () => {
    setTimeout(() => {
      setSee2(!see2);
    }, 500);
  };
  const handleSee3 = () => {
    setTimeout(() => {
      setSee3(!see3);
    }, 500);
  };
  const handleSee = () => {
    setTimeout(() => {
      setSee(!see);
    }, 500);
  };
  const handleSee1 = () => {
    setTimeout(() => {
      setSee1(!see1);
    }, 500);
  };

  const handleClick1 = () => {
    setTimeout(() => {
      setShowFirst1(!showFirst1);
    }, 500);

    if (top1 === 0) {
      setTop1(5);
      // setTimeout(() => {
      //   setTop1(0);
      // }, 500);
    } else {
      setTop1(0);
    }
  };
  const handleClick2 = () => {
    setTimeout(() => {
      setShowFirst2(!showFirst2);
    }, 500);

    if (top2 === 0) {
      setTop2(16);
      // setTimeout(() => {
      //   setTop1(0);
      // }, 500);
    } else {
      setTop2(0);
    }
  };
  const handleClick3 = () => {
    setTimeout(() => {
      setShowFirst3(!showFirst3);
    }, 500);
  };
  const handleCollapseBox3 = () => {
    setBox3Collapsed(!box3Collapsed);
    setDisplay3(!display3);

    setTimeout(() => {
      setDisplay3(true);
    }, 500);
    setTimeout(() => {
      setBox3Collapsed(false);
    }, 500);

    if (main === 0) {
      setMain(5);
      setTimeout(() => {
        setMain(0);
      }, 500);
    }
  };
  const handleCollapseBox4 = () => {
    setBox4Collapsed(!box4Collapsed);
    setDisplay4(!display4);

    setTimeout(() => {
      setDisplay4(true);
    }, 500);
    setTimeout(() => {
      setBox4Collapsed(false);
    }, 500);

    if (main1 === 0) {
      setMain1(5);
      setTimeout(() => {
        setMain1(0);
      }, 500);
    }
  };
  const handleEditorChange = (content, editor) => {
    console.log("Content:", content);
  };
  return (
    <div className="display2">
      <div className="lower">
        <div className={`boxtwoalpha ${box3Collapsed ? "collapsed" : ""}`}>
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
              Structure your Pointers
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
              className="excla3"
              onClick={handleCollapseBox3}
            />
          </div>
          {display3 && (
            <div className="sentence">
              <span className="description">Description:</span> Write a 300 -
              400 word article from your thread . Publish your understanding and
              showcase your understanding to the entire world.
            </div>
          )}
          <div className="main-box3" style={{ bottom: `${main}rem` }}>
            <div className="title">
              <span>Title</span>
              <input className="blank" style={{ textAlign: "center" }} />
            </div>
            <div className="article">
              <span className="second">Content</span>
              <div className="editor">
                <Editor
                  apiKey="dsgjz1i51o3ac93lr3xx331aj9j059h2sh8xt08jwdqsgada"
                  initialValue="<p></p>"
                  init={{
                    plugins:
                      "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                      { value: "First.Name", title: "First Name" },
                      { value: "Email", title: "Email" },
                    ],
                  }}
                  onEditorChange={handleEditorChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`boxtwobeta ${box4Collapsed ? "collapsed" : ""}`}>
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
              4SA Method
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
              className="excla4"
              onClick={handleCollapseBox4}
            />
          </div>
          {display4 && (
            <div className="sentence">
              <span className="description">Description:</span>To Explore more
              read more
            </div>
          )}
          <div className="main-box4" style={{ bottom: `${main1}rem` }}>
            {showFirst1 ? (
              <div className="faq-copy">
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  rotation={90}
                  style={{
                    position: "relative",
                    top: "0.7rem",
                    fontSize: "20px",
                    left: "0.5rem",
                    cursor: "pointer",
                  }}
                  onClick={handleClick1}
                />
                <span>Introduction</span>
              </div>
            ) : (
              <div className="faq">
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  rotation={270}
                  style={{
                    position: "relative",
                    top: "0.7rem",
                    fontSize: "20px",
                    left: "0.5rem",
                    cursor: "pointer",
                  }}
                  onClick={handleClick1}
                />
                <span>Introduction</span>
                <div className="faq-data">
                  The 4SA Method , How to bring a idea into progress ?
                  <span className="see-more" onClick={handleSee}>
                    {see ? "Show less" : "Show more"}
                  </span>
                </div>
              </div>
            )}
            <div className="top1" style={{ bottom: `${top1}rem` }}>
              {showFirst2 ? (
                <div className="faq2-copy">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    rotation={90}
                    style={{
                      position: "relative",
                      top: "0.7rem",
                      fontSize: "20px",
                      left: "0.5rem",
                      cursor: "pointer",
                    }}
                    onClick={handleClick2}
                  />
                  <span>Thread(A)</span>
                </div>
              ) : (
                <div className="faq2">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    rotation={270}
                    style={{
                      position: "relative",
                      top: "0.7rem",
                      fontSize: "20px",
                      left: "0.5rem",
                      cursor: "pointer",
                    }}
                    onClick={handleClick2}
                  />
                  <span>Thread(A)</span>
                  <div className="list">
                    <p className="faq-data2">
                      How are you going to develop your strategy? Which method
                      are you going to use to develop a strategy?What if the
                      project is lengthy?
                    </p>
                    <span className="see-more2" onClick={handleSee1}>
                      {see1 ? "Show less" : "Show more"}
                    </span>
                    <div className="example">
                      <span>Example 1</span>
                      <p>{see2 ? fullText : limitedText} </p>
                      {fullText.split("").length > 20 && (
                        <span className="see-more3" onClick={handleSee2}>
                          {see2 ? "Show less" : "Show more"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="top2" style={{ bottom: `${top2}rem` }}>
              {showFirst3 ? (
                <div className="faq3-copy">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    rotation={90}
                    style={{
                      position: "relative",
                      top: "0.7rem",
                      fontSize: "20px",
                      left: "0.5rem",
                      cursor: "pointer",
                    }}
                    onClick={handleClick3}
                  />
                  <span>Transition(1)</span>
                </div>
              ) : (
                <div className="faq3">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    rotation={270}
                    style={{
                      position: "relative",
                      top: "0.7rem",
                      fontSize: "20px",
                      left: "0.5rem",
                      cursor: "pointer",
                    }}
                    onClick={handleClick3}
                  />
                  <span>Transition(1)</span>
                  <div
                    className="faq-content"
                    // style={{
                    //   display: "block",
                    //   position: "relative",
                    //   width: "400px",
                    // }}
                  >
                    <p className="faq-data3">
                      For preparing the strategy from the concept and build it
                      into product one of the methods used is the 4SA approach.
                    </p>
                    <span className="see-more4" onClick={handleSee}>
                      {see ? "Show less" : "Show more"}
                    </span>
                    <div
                      className="example"
                      style={{ top: "3rem", position: "relative" }}
                    >
                      <span>Example 1</span>
                      <p>{see3 ? fullText1 : limitedText1} </p>
                      {fullText1.split("").length > 20 && (
                        <span className="see-more3" onClick={handleSee3}>
                          {see3 ? "Show less" : "Show more"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display2;
