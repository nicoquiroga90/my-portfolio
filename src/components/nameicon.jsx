import { useState } from "react";
import "../styles/NameIcon.css";

const NameIcon = () => {
  const [clicked, setClicked] = useState(false);

  const toggleText = () => {
    setClicked(!clicked);
  };

  return (
    <h1
      className={`name-icon ${clicked ? "clicked" : ""}`}
      onClick={toggleText}
      style={{
        position: clicked ? "fixed" : "relative",
        top: clicked ? "20px" : "auto",
        left: clicked ? "20px" : "auto",
      }}
    >
      <span className="name"> {clicked ? "NQ" : "Nico Quiroga"} </span>
      <br />
      {clicked ? null : <span className="subtitle">Web Developer</span>}
    </h1>
  );
};

export default NameIcon;
