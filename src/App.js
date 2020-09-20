import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Juicy Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Dreamy Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Carnival" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Spooky Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Top Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
