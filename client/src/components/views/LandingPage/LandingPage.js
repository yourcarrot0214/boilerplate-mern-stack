import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import axios from "axios";
import MainImage from "./Sections/MainImage";

function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    axios
      .get(endPoint)
      .then((response) => {
        setMovies([...response.data.results]);
        setMainMovie(response.data.results[0]);
      })
      .catch((error) => {
        console.log(`popular movies get Error : ${error}`);
      });
  }, []);

  console.log(movies);
  console.log(mainMovie);

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* Main Image */}
      {mainMovie && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${mainMovie.backdrop_path}`}
          title={mainMovie.title}
          text={mainMovie.overview}
        />
      )}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Movies by latest</h2>
        <hr />

        {/* Movie Grid Cards */}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
