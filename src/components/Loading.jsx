import React from "react";
import "./style.css";
import { useLoadingLogic } from "../hooks/useLoadingLogic";

const Loading = () => {
  const message = useLoadingLogic();

  return (
    <div id="bungkus">
      <div className="loader-container">
        <div className="emoji" id="emoji">
          🎱
        </div>
        <div className="text">{message}</div>
        <div className="funny-msg" id="funny-msg">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Loading;
