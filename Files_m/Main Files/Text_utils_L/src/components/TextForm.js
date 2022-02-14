import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UPPERCASE IS CLICKED " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UPPERCASE", "Success");
  };
  const handleLoClick = () => {
    // console.log("UPPERCASE IS CLICKED " + text);
    let newtext2 = text.toLowerCase();
    setText(newtext2);
    props.showAlert("Converted to lowercase", "Success");
  };
  const handleClearClick = () => {
    // console.log("UPPERCASE IS CLICKED " + text);
    let newtext3 = "";
    setText(newtext3);
    props.showAlert("Cleared", "Text");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("", "Copied");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces removed", "Extra");
  };

  const handleOnChange = (event) => {
    // console.log("handleonchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212526" : "white",
              color: props.mode === "dark" ? "#F8F9FA" : "black",
            }}
            // style={{
            //   backgroundColor: props.modeo === "primary" ? "#0D6EFD" : "black",
            //   color: props.modeo === "primary" ? "#DC3545" : "white",
            // }}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-success mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          SpaceRemove
        </button>
      </div>
      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Character
        </p>
        <p>{0.004 * text.split(" ").length} Minutes to read this</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
