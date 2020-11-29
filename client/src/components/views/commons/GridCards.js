import React from "react";
import { Col } from "antd";

function GridCards(props) {
  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <a href={props.movieId}>
          <img
            src={props.image}
            alt={props.movieName}
            style={{ width: "100%", height: "320px" }}
          />
        </a>
      </div>
    </Col>
  );
}

export default GridCards;
