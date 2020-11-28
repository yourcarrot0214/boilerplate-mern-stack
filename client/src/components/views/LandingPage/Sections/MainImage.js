import React from "react";
import { FaRuler } from "react-icons/fa";

export default function MainImage(props) {
  const style = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.65) 100%), url('${props.image}'), #1c1c1c`,
    width: "100%",
    height: "500px",
    backgroundSize: "100%, cover",
    backgroundPosition: "center, center",
    position: "relative",
  };
  return (
    <div style={style}>
      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h2 style={{ color: "white" }}>{props.title}</h2>
          <p style={{ color: "white", fontSize: "1rem" }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
