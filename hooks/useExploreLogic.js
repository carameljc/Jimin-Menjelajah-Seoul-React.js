import { useEffect, useState } from "react";

export const useExploreLogic = () => {
  const [gameTime, setGameTime] = useState({ minutes: 0, hours: 6, days: 0 });
  const [money, setMoney] = useState(100);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const playerName = localStorage.getItem("playerName") || "Explorer";
  const characterImg = localStorage.getItem("characterImg");
  const characterName = localStorage.getItem("character");

  useEffect(() => {
    const interval = setInterval(() => {
      setGameTime((prev) => {
        let minutes = prev.minutes + 1;
        let hours = prev.hours;
        let days = prev.days;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
        if (hours >= 24) {
          hours = 0;
          days++;
        }
        return { minutes, hours, days };
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getGreeting = (hour) => {
    if (hour >= 6 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 18) return "Good Afternoon";
    if (hour >= 18 && hour < 24) return "Good Evening";
    return "Good Night";
  };

  const move = (dir) => {
    setPosition((prev) => {
      const delta = 15;
      const newPos = { ...prev };
      if (dir === "up") newPos.y -= delta;
      if (dir === "down") newPos.y += delta;
      if (dir === "left") newPos.x -= delta;
      if (dir === "right") newPos.x += delta;
      return newPos;
    });
  };

  return {
    playerName,
    characterImg,
    characterName,
    gameTime,
    getGreeting,
    money,
    setMoney,
    position,
    move,
  };
};
