import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: "url(images/sky.png)" }}
      className="w-full h-screen relative overflow-hidden"
    >
      <img
        src="images/kookieWing.svg"
        alt="kookieWing"
        className="absolute top-20 left-40 w-64 rotate-[10deg] z-[-1]"
      />
      <img
        src="images/chimmyWing.svg"
        alt="chimmyWing"
        className="absolute top-60 right-40 w-64 rotate-[-10deg] z-[-1]"
      />
      <img
        src="images/kittyWing.svg"
        alt="kittyWing"
        className="absolute bottom-20 left-80 w-64 z-[-1]"
      />

      <div className="flex flex-col items-center justify-center h-full font-fantasy text-[80px] text-[#542727] text-center drop-shadow-[1px_2px_2px_black]">
        <h1>
          <b>Jelajah Seoul</b>
        </h1>
        <button
          className="bg-yellow-900 text-white py-2 px-8 mt-4 rounded-md hover:bg-yellow-400 transition"
          onClick={() => navigate("/start")}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Index;
