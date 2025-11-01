// EclipseLoader.js


import React from "react";
import "./LoadingScreen.css";

import logo from "../assets/images/logo1.webp"; // adjust the path

const EclipseLoader = ({ text = "Loading, please wait..." }) => (
  <div className="loader-center">
    <div className="loadingio-spinner-eclipse-nq4q5u6dq7r">
      <div className="ldio-x2uulkbinbj">
        <div></div>
        {/* Logo in the center of the loader */}
        <img src={logo} alt="Company Logo" className="loader-logo" />
      </div>
    </div>
    <p className="loader-text">{text}</p>
  </div>
);

export default EclipseLoader;
