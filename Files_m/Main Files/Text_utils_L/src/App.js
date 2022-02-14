// import logo from './logo.svg';
// import dev from './assets/Images/Dev.png';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// let name = "Anurag Sharma";

function App() {
  const [mode, setMode] = useState(`light`);
  const [modei, setMode2] = useState(`dark`);
  const [modet, setMode3] = useState(`Bright`); //whaether enabled or not!!
  const [modeo, setMode4] = useState(`light`);
  const [modeoo, setMode5] = useState(`Bright`);
  const [modeooo, setMode6] = useState(`light`);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212524";
      document.body.style.color = "#F8F9FA";
      setMode2("light");
      setMode3("Dim");
      setMode4("dark");
      showAlert("Dark mode has been Enabled", "Success");
      setalert2("success");
      setMyStyle({
        color: "white",
        backgroundColor: "#212524",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#212529";
      setMode2("dark");
      setMode3("Bright");
      setMode4("light");
      showAlert("Light mode has been Enabled", "Success");
      setalert2("primary");
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const showAlert2 = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 6000);
  };
  const [alert2, setalert2] = useState(null);
  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#DC3545";
      document.body.style.color = "#212529";
      // setMode2("light");
      setMode5("Red");
      setMode4("danger");
      setMode6("dark");
      showAlert2("Red Mode is Beta", "Forced");
      setalert2("danger");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#0D6EFD";
      document.body.style.color = "#F8F9FA";
      // setMode2("dark");
      setMode5("Blue");
      setMode4("primary");
      setMode6("light");
      showAlert2("Blue mode is Beta", "Forced");
      setalert2("danger");
    }
  };
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  return (
    <>
      <Navbar
        title="Cross Stack"
        mode={mode}
        modei={modei}
        modet={modet}
        modeoo={modeoo}
        modeo={modeo}
        modeooo={modeooo}
        toggleMode={toggleMode}
        toggleMode2={toggleMode2}
      />
      <Alert alert={alert} alert2={alert2} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze Below"
          mode={mode}
          modi={modei}
          showAlert={showAlert}
        />
        <About
          myStyle={myStyle}
          btntext={btntext}
          toggleMode={toggleMode}
        ></About>
      </div>
    </>
  );
}

export default App;
