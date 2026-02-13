import React from "react";
import "./Banners.css";

function Banners() {
  return (
    <header>
      <div className="header-overlay">
        <div className="welcome-text">
          <h1>Welcome to Open Diary</h1>
          <p>
            Every story matters. Share your thoughts with the world, or keep a
            private digital journal of your life's journey.
          </p>
          <a href="#" className="cta-btn">
            Start Writing Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Banners;
