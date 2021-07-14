//import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import React from "react";
import Request from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="ORIGINAL NETFLIX"
        fetchUrl={Request.fetchNetflexOrignal}
        isLarge={true}
      />
      <Row title="Trending Now" fetchUrl={Request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComdeyMovies} />
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romances Movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />
    </div>
  );
}
export default App;
