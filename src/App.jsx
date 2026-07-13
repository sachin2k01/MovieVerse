import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import Fire_Img from "./assets/fire.png";
import Star_Img from "./assets/glowing-star.png";
import Party_Img from "./assets/partying-face.png";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MovieList type="popular" title="Popular" emoji={Fire_Img} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star_Img} />
      <MovieList type="upcoming" title="Upcoming" emoji={Party_Img} />
    </div>
  );
};

export default App;
