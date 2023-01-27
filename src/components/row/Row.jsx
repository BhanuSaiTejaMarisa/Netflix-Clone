import "./Row.css";
import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

function Row({ title, requestEndpoint, isPoster }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requestEndpoint);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [requestEndpoint]);

  function handleClick(movie) {
    return (e) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.name || movie?.name || movie?.original_title || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((err) => console.log(err));
        console.log(movie);
      }
    };
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            onClick={handleClick(movie)}
            key={movie.id}
            className={`movie-poster ${isPoster && "posterImage"}`}
            src={`${base_url}${
              isPoster ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
