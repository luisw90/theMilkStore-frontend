import React from "react";
import "../app/css-group/loader.css";

export const Loader = () => {
  return (
    <>
      <div className="loader__container">
        <div className="container">
          <div className="sound-wave">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};
