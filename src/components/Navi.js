import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
// import { Link } from "nextjs-routes/link";
import "../css/Navi.css";
function Navi() {
  // var navigate = useNavigate();
  return (
    <div className="navi">
      <a href="/all-words">
        <button
          className="naviButton"
          // onClick={() => {
          //   navigate("/all-words");
          // }}
        >
          All Words
        </button>
      </a>
      <span className="headline">Shuffle Words</span>
      <a href="/">
        <button
          className="naviButton"
          // onClick={() => {
          //   navigate('/');
          // }}
        >
          Random Word
        </button>
      </a>
      <a href="/add-new-word">
        <button className="naviButton">Add New Word</button>
      </a>
    </div>
  );
}
export default Navi;
