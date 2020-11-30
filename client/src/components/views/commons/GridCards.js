import React from "react";
import { Col } from "antd";
import "./GridCards.css";

function GridCards(props) {
  return (
    <Col lg={6} md={8} xs={24}>
      <div className="grid-cards">
        <a href={props.movieId}>
          <img src={props.image} alt={props.movieName} />
        </a>
      </div>
    </Col>
  );
}

export default GridCards;
