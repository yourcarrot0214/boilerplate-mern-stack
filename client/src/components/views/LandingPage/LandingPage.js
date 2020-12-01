import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import axios from "axios";
import MainImage from "./Sections/MainImage";
import { Row } from "antd";
import GridCards from "../commons/GridCards";

function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovie] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetchItems(endPoint);
  }, []);

  const fetchItems = (endPoint) => {
    axios
      .get(endPoint)
      .then((response) => {
        console.log(response);
        setMovies([...movies, ...response.data.results]);
        setMainMovie(mainMovie || response.data.results[0]);
        setPageNumber(response.data.page);
      })
      .catch((error) => {
        console.log(`popular movies get Error : ${error}`);
      });
  };

  const loadMoreMovies = () => {
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      pageNumber + 1
    }`;
    fetchItems(endPoint);
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "0",
      }}
    >
      {/* Main Image */}
      {mainMovie && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${mainMovie.backdrop_path}`}
          title={mainMovie.title}
          text={mainMovie.overview}
        />
      )}

      <div style={{ width: "85%", margin: "1rem auto", maxWidth: "1280px" }}>
        <h2>Movies by latest</h2>
        <hr />

        {/* Movie Grid Cards */}
        <Row gutter={[16, 16]}>
          {movies.map((movie, index) => (
            <React.Fragment key={index}>
              <GridCards
                landingPage
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                    : null
                }
                movieId={movie.id}
                movieName={movie.original_title}
              />
            </React.Fragment>
          ))}
        </Row>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={loadMoreMovies}>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
