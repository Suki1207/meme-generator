import React from "react";
import ReactDOM from "react-dom";
import logo from "./assets/Troll Face.png";

import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo-tag">
          <img src={logo} alt="logo" />
          <h2>Meme Generator</h2>
        </div>

        <h3>React Course - Project 3</h3>
      </nav>
    </header>
  );
}

export default Header;
