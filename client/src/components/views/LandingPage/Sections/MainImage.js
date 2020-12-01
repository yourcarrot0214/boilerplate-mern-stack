import React from "react";
import { FaRuler } from "react-icons/fa";
import "./MainImage.css";

export default function MainImage(props) {
  return (
    <div className="main-image" style={{ background: `url('${props.image}')` }}>
      <div>
        <div className="main-image-card">
          <h2 style={{ color: "white", fontSize: "2rem" }}>{props.title}</h2>
          <p style={{ color: "white", fontSize: "1rem" }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
