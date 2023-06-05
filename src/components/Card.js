import React, { useState } from "react";
import "../css/Card.css";
function Front({ en, flip }) {
  return (
    <div className="card" onClick={flip}>
      {en}
    </div>
  );
}
function Back({ tr, flip }) {
  return (
    <div className="card" onClick={flip}>
      {tr}
    </div>
  );
}
function Card({ id, en, tr }) {
  const [show, setShow] = useState("front");
  const flip = () => {
    show === "front" ? setShow("back") : setShow("front");
  };
  if (show === "front") {
    return <Front en={en} flip={flip} />;
  } else {
    return <Back tr={tr} flip={flip} />;
  }
}
export default Card;
