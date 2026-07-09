import React from "react";
import "./MovieCard.css";
import Star_Img from "../../assets/star.png";

const MovieCard = () => {
  return (
    <a href="#" className="movie_card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedK1S4T7FINgS5uMYlsXlRB9Q9C5gFFzxMJ-Y-3pXgg&s=10"
        alt="Movie Poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Title</h3>
        <div className="align_center movie_date_rate">
          <p>10-15-2023</p>
          <p>
            8.5
            <img src={Star_Img} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
