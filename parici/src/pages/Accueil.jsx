import React from "react";
import "../styles/accueil.css";
import { useState, useEffect } from "react";

export const Home = () => {
  return (
    <div className="wrapper">
      <div id="recommendation">
        <img
          className="titre"
          src={process.env.PUBLIC_URL + "pics/Logo.png"}
          alt=""
        />
        <h1>Circuit du jour</h1>
        <div className="recommendation-container">
          <div className="recommendation-item">
            <img
              className="circuit"
              src={process.env.PUBLIC_URL + "pics/Circuit.png"}
              alt=""
            />
            <div className="recommendation-item-info">
              <h2>Ma map et mes sorties</h2>
              <img
                className="map"
                src={process.env.PUBLIC_URL + "pics/Image.png"}
                alt=""
              />
            </div>
          </div>
          <div className="recommendation-item">
            <div className="recommendation-item-info"></div>
          </div>
          <div className="recommendation-item">
            <div className="recommendation-item-info"></div>
          </div>
        </div>
      </div>
      <div id="nearby">
        <h1>Tout près d'ici</h1>
        <div className="nearby-container">
          <div className="nearby-item">
            <img
              className="arr1"
              src={process.env.PUBLIC_URL + "pics/17eme.png"}
              alt=""
            />
            <img
              className="arr1"
              src={process.env.PUBLIC_URL + "pics/7eme.png"}
              alt=""
            />
          </div>
          <div className="nearby-item">
            <img
              className="arr2"
              src={process.env.PUBLIC_URL + "pics/6eme.png"}
              alt=""
            />
            <img
              className="arr2"
              src={process.env.PUBLIC_URL + "pics/10eme.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
