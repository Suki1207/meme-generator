import React, { useState } from "react";
import ReactDOM from "react-dom";

import MemeCSS from "./Meme.css";

import MemeImg from "./assets/memeimg.png";

import Data from "./Data";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: MemeImg,
  });

  const [allMemeImages, setAllMemeImages] = React.useState(Data);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Shut up" />
        <input type="text" placeholder="and take my money" />
        <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
      </div>
      <div className="meme-container">
        <img className="meme-img" src={meme.randomImage} alt="meme" />
        <h2>shut up</h2>
        <h2>and take my money</h2>
      </div>
    </main>
  );
}
