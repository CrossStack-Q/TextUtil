import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btntext, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "#171c28",
  //     });
  //     setBtnText("Enable Light Mode");
  //   }
  // };

  return (
    <>
      <div className="container" style={props.myStyle}>
        <h1 className="my-2">About Me</h1>
        <div
          className="accordion accordion-flush"
          id="accordionFlushExample"
          style={props.myStyle}
        >
          <div className="accordion-item" style={props.myStyle}>
            <h2
              className="accordion-header"
              id="flush-headingOne"
              style={props.myStyle}
            >
              <button
                style={props.myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                My First React App
              </button>
            </h2>
            <div
              style={props.myStyle}
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={props.myStyle}>
                This is my first React App that is used to manipulate Text and
                Analyze it.I Learned ReactJS from Code With Harry from
                YouTube.Code With Harry is great. <code>.cross_stack</code>{" "}
                That's It for now.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={props.myStyle}>
            <h2
              className="accordion-header"
              id="flush-headingTwo"
              style={props.myStyle}
            >
              <button
                style={props.myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                My EduTech Website
              </button>
            </h2>
            <div
              style={props.myStyle}
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={props.myStyle}>
                My Next Project is a website in which i am going to use my full
                knowledge of <b>Grahic Design and Illustration </b>(in Front
                End) and Use <b>Python</b> in backend to organize Data{" "}
                <code>.cross_stack</code> Deadline for this Website to publish
                is 31 March. Source code of this project will be private because
                I want to Serve it.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3" style={props.myStyle}>
          <button
            onClick={props.toggleMode}
            type="button"
            className="btn btn-light"
            style={props.myStyle}
          >
            {props.btntext}
          </button>
        </div>
      </div>
    </>
  );
}
