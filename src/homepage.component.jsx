import React from "react";
import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <h2 className="subtitle">SHOP NOW</h2>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <h2 className="subtitle">SHOP NOW</h2>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <h2 className="subtitle">SHOP NOW</h2>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MEN</h1>
          <h2 className="subtitle">SHOP NOW</h2>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMEN</h1>
          <h2 className="subtitle">SHOP NOW</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
