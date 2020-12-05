import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, NO_IMAGE_URL } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import MovieInfo from "./Sections/MovieInfo";
import GridCards from "../commons/GridCards";
import { Row } from "antd";
import Favorite from "./Sections/Favorite";

function MovieDetail(props) {
  let movieId = props.match.params.movieId;
  const [movie, setMovie] = useState([]);
  const [casts, setCasts] = useState([]);
  const [actorToggle, setActorToggle] = useState(false);

  useEffect(() => {
    const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      });

    fetch(endpointCrew)
      .then((response) => response.json())
      .then((response) => {
        setCasts(response.cast);
        console.log(response.casts);
      });
  }, []);

  const toggleActorView = () => {
    setActorToggle(!actorToggle);
  };

  return (
    <div>
      {/* Header */}
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
        title={movie.title}
        text={movie.overview}
      />
      {/* Body */}
      <div
        style={{
          width: "85%",
          margin: "1rem auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Favorite
            movieInfo={movie}
            movieId={movieId}
            userFrom={localStorage.getItem("userId")}
          />
        </div>
        {/* Movie Info */}
        <MovieInfo movie={movie} />
        <br />
        {/* Actors Grid */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "2rem",
            width: "85%",
            margin: "1rem auto",
            maxWidth: "1280px",
          }}
        >
          <button onClick={toggleActorView}>Toggle Actor View</button>

          {actorToggle && (
            <Row gutter={[16, 16]}>
              {casts.map((cast, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={
                      cast.profile_path
                        ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                        : `${NO_IMAGE_URL}`
                    }
                    profileName={cast.name}
                  />
                </React.Fragment>
              ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
