import "./Banner.css";
import axios from "../../services/axios";
import React, { useEffect, useState } from "react";
import { requests } from "../../services/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.fetchRomanceMovies.requestEndpoint
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner-contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
      </div>
      <div className="banner-buttons">
        <button className="banner-button">Play</button>
        <button className="banner-button">My List</button>
      </div>
      <h1 className="banner-description">{movie?.overview}</h1>
      <div className="fade-bottom"></div>
    </header>
  );
}

export default Banner;
