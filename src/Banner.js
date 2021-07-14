import React, { useState, useEffect } from "react";
import Request from "./request";
import axios from "./axios";
import "./Banner.css";

function Banner() {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Request.fetchNetflexOrignal);
      const index = Math.floor(Math.random() * request.data.results.length - 1);
      setMovie(request.data.results[index]);

      return request;
    }
    fetchData();
  }, []);
  //console.log(movie);
  function ellipsis(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">
            {ellipsis(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="fade--fadeBottom" />
    </header>
  );
}

export default Banner;
