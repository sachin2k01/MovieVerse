import React from "react";
import "./Navbar.css";
import Fire_Img from "../../assets/fire.png";
import Star_Img from "../../assets/glowing-star.png";
import Party_Img from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieVerse</h1>
      <div className="navbar_links">
        <a href="/">
          Popular
          <img src={Fire_Img} alt="fire emoji" className="navbar_emoji" />
        </a>
        <a href="/about">
          Top Rated
          <img
            src={Star_Img}
            alt="glowing star emoji"
            className="navbar_emoji"
          />
        </a>
        <a href="/contact">
          Upcoming
          <img
            src={Party_Img}
            alt="party face emoji"
            className="navbar_emoji"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
