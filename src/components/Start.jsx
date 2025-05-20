import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const characters = [
  { name: "Chimmy", img: "images/chimmy.svg" },
  { name: "Kookie", img: "images/kookieWing.svg" },
  { name: "Kitty", img: "images/kittyWing.svg" },
];

const Start = () => {
  const [index, setIndex] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  const handleNext = () => setIndex((index + 1) % characters.length);
  const handlePrev = () =>
    setIndex((index - 1 + characters.length) % characters.length);
  const handleExplore = () => {
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("character", characters[index].name);
    navigate("/explore");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <header className="w-full text-center mt-4">
        <img
          src="images/ticket.png"
          alt="ticket-icon"
          className="w-16 h-16 mx-auto mb-2"
        />
        <h2>
          <b>Jelajah Seoul</b>
        </h2>
      </header>

      <div className="flex justify-center items-center flex-1">
        <div className="text-center max-w-lg w-96">
          <h2 className="font-bold mb-4">Choose Your Character</h2>
          <div className="relative flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-0 bg-yellow-800 px-3 py-2 rounded-full text-white hover:bg-yellow-400"
            >
              &larr;
            </button>
            <img
              src={characters[index].img}
              alt="Character"
              className="w-64 h-64 mx-auto"
            />
            <button
              onClick={handleNext}
              className="absolute right-0 bg-yellow-800 px-3 py-2 rounded-full text-white hover:bg-yellow-400"
            >
              &rarr;
            </button>
          </div>
          <p className="mt-2 mb-4 font-semibold">{characters[index].name}</p>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            onClick={handleExplore}
            className="w-full bg-yellow-900 text-white py-2 rounded-md hover:bg-yellow-400 transition"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
