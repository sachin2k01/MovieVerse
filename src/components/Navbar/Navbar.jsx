import React from "react";
import "./Navbar.css";
import Fire_Img from "../../assets/images/Fire.png";
import Star_Img from "../../assets/images/glowing_star.png";
import Party_Img from "../../assets/images/party_face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieVerse</h1>
      <div className="navbar-links">
        <a href="/">
          <img src={Fire_Img} alt="Fire" />
        </a>
        <a href="/about">
          <img src={Star_Img} alt="Star" />
        </a>
        <a href="/contact">
          <img src={Party_Img} alt="Party" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
