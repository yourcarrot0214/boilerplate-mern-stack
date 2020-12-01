import React from "react";
import { Col } from "antd";
import "./GridCards.css";

function GridCards(props) {
  if (props.landingPage) {
    return (
      <Col lg={6} md={8} xs={24}>
        <div className="grid-cards">
          <a href={`/movie/${props.movieId}`}>
            <img src={props.image} alt={props.movieName} />
          </a>
        </div>
      </Col>
    );
  } else {
    return (
      <Col lg={6} md={8} xs={24}>
        <div className="grid-cards">
          <img src={props.image} alt={props.profileName} />
        </div>
      </Col>
    );
  }
}

export default GridCards;
