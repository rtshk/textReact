import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Type here");
  function handleChange(event) {
    // console.log("text tried to change")
    setText(event.target.value);
  }
  function handleUpClick() {
    setText(text.toUpperCase());
  }
  function handleLoClick() {
    setText(text.toLowerCase());
  }
  function handleCtClick() {
    setText("");
  }
  const myStyle = {
  
  }

  return (
    <>
      <div className="container my-4 " style={myStyle}>
        <h1 className = {`text-${props.mode === "light"? "dark":"light"}`}>Enter your text here</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="container">
          <button
            type="button"
            className={`btn btn-${props.mode === "light"? "dark":"light"} mx-1`}
            onClick={handleUpClick}
          >
            Uppercase
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode === "light"? "dark":"light"} mx-1`}
            onClick={handleLoClick}
          >
            Lowercase
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode === "light"? "dark":"light"} mx-1`}
            onClick={handleCtClick}
          >
            Clear text
          </button>
         
        </div>
        <div className="container my-3">
          <h3 className = {`text-${props.mode === "light"? "dark":"light"}`}>Analysis</h3>
          <p className = {`text-${props.mode === "light"? "dark":"light"}`} >words {text.split(" ").length} characters {text.length}</p>
          <p className = {`text-${props.mode === "light"? "dark":"light"}`}>The average time to be taken to read it is {text.split(" ").length*0.3} seconds</p>
        </div>
      </div>
    </>
  );
}
