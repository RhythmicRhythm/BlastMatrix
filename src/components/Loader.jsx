import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div>
      <div id="app">
        <div id="wrapper">
          <h1 className="glitch therace text-[100px]" data-text="glitch">
            Blast
          </h1>
          <h1 className="glitch therace text-[100px]" data-text="glitch">
            Matrix
          </h1>
          <span className="sub">EFFECT</span>
        </div>

        <div class="loader_container">
          <div class="progress progress-striped">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
