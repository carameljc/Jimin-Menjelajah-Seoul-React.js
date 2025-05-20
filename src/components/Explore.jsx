import React, { useEffect, useRef } from "react";
import "./style.css";
import { useExploreLogic } from "../hooks/useExploreLogic";

const Explore = () => {
  const {
    playerName,
    characterImg,
    gameTime,
    getGreeting,
    money,
    setMoney,
    position,
    move,
  } = useExploreLogic();

  const characterRef = useRef();

  useEffect(() => {
    const img = document.createElement("img");
    img.src = characterImg;
    img.alt = playerName;
    img.className = "w-32 h-32";
    if (characterRef.current) {
      characterRef.current.innerHTML = "";
      characterRef.current.appendChild(img);
    }
  }, [characterImg]);

  useEffect(() => {
    const handleKey = (e) => {
      const keys = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };
      if (keys[e.key]) {
        e.preventDefault();
        move(keys[e.key]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [move]);

  const toggleMusic = () => {
    const music = document.getElementById("background-music");
    const icon = document.getElementById("musicIcon");
    if (music.paused) {
      music.play();
      icon.src = "images/speaker.png";
    } else {
      music.pause();
      icon.src = "images/mute.jpeg";
    }
  };

  return (
    <div>
      <header className="w-full text-center mt-4 relative">
        <img
          src="images/ticket.png"
          alt="ticket-icon"
          className="w-16 h-16 mx-auto mb-2"
        />
        <h2>
          <b>Jelajah Seoul</b>
        </h2>
        <div id="header-bar"></div>
      </header>

      <div id="game" className="flex ml-12">
        <div className="flex flex-col w-3/5 mr-3 ml-12">
          <div className="flex justify-between mt-4">
            <p className="text-md font-semibold">
              {getGreeting(gameTime.hours)} {playerName}
            </p>
            <div className="flex">
              <p className="text-md font-semibold ml-20">
                Day {gameTime.days + 1}
              </p>
              <p className="text-md font-semibold">
                | {String(gameTime.hours).padStart(2, "0")}
              </p>
              <p className="text-md font-semibold">
                :{String(gameTime.minutes).padStart(2, "0")}
              </p>
            </div>
            <div className="flex">
              <img
                src="images/money.png"
                alt="money-icon"
                className="w-8 h-8 mr-2"
              />
              <p className="text-lg font-bold">${money}</p>
            </div>
          </div>

          {/* Status bars & map */}
          <div
            id="playerStatus"
            className="flex items-center justify-center mt-4 ml-14 space-x-6"
          >
            {["eat", "sleep", "shower", "happy"].map((stat) => (
              <div className="flex items-center" key={stat}>
                <img
                  src={`images/${stat}.png`}
                  alt={`${stat}-icon`}
                  className="w-6 h-6 mr-2"
                />
                <progress
                  id={
                    stat === "eat"
                      ? "hunger"
                      : stat === "sleep"
                      ? "energy"
                      : stat === "shower"
                      ? "hygiene"
                      : "happiness"
                  }
                  value="50"
                  max="100"
                  className="w-26"
                ></progress>
              </div>
            ))}
          </div>

          <div
            id="map"
            className="relative h-[700px] border border-gray-300 overflow-hidden mt-3 mb-5"
          >
            <div
              id="characterImageDisplay"
              className="absolute z-10"
              ref={characterRef}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
            <div className="flex justify-center">
              <div id="home">
                <img src="images/home.png" alt="home-icon" />
              </div>
              <div id="lotte">
                <img src="images/lotteworld.png" alt="lotte-icon" />
              </div>
            </div>
            <div id="namsan">
              <img src="images/namsantower.png" alt="namsan-icon" />
            </div>
            <div className="flex justify-center space-x-6">
              <div id="hongdae">
                <img src="images/hongdae.png" alt="hongdae-icon" />
              </div>
              <div id="palace">
                <img src="images/palace.png" alt="palace-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="block mt-24 ml-2">
          <p className="font-bold text-center text-[22px]">
            Ingin Jelajah Kemana ?
          </p>
          <div id="task" className="task-area"></div>

          <div className="bottom-8 right-16 z-50 flex flex-col items-center">
            <button
              id="upBtn"
              className="control-btn"
              onClick={() => move("up")}
            >
              ⬆️
            </button>
            <div className="flex space-x-16">
              <button
                id="leftBtn"
                className="control-btn"
                onClick={() => move("left")}
              >
                ⬅️
              </button>
              <button
                id="rightBtn"
                className="control-btn"
                onClick={() => move("right")}
              >
                ➡️
              </button>
            </div>
            <button
              id="downBtn"
              className="control-btn"
              onClick={() => move("down")}
            >
              ⬇️
            </button>
          </div>
        </div>

        <div id="music" className="fixed bottom-1 left-1 z-50">
          <audio id="background-music" autoPlay loop>
            <source src="tomato.mp3" type="audio/mpeg" />
          </audio>
          <button id="musicToggle" onClick={toggleMusic}>
            <img
              id="musicIcon"
              src="images/speaker.png"
              alt="Speaker Icon"
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
