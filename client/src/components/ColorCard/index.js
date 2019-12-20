import React from "react";
import "./style.css";

export default function ColorCard({ hex }) {
  return (
    <div className="colorCard">
      <div className="colorBox" style={{ backgroundColor: hex }}></div>
      <div className="colorText">
        <p>{hex}</p>
      </div>
    </div>
  );
}
