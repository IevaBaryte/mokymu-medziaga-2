import React from "react";
import "./AboutUs.scss";
import img from "../assets/about.jpg";

const AboutUs = ({ title, description, whyChooseUsTitle, list = [] }) => {
  const mid = Math.ceil(list.length / 2);
  const firstCol = list.slice(0, mid);
  const secondCol = list.slice(mid);

  return (
    <div className="about-container">
      <div className="about-img">
        <img src={img} alt="About us" />
      </div>
      <div className="about-content">
        <h2>{title}</h2>
        <div className="underline"></div>
        <p>{description}</p>
        <h3>{whyChooseUsTitle}</h3>
        <div className="about-list">
          <ul>
            {firstCol.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <ul>
            {secondCol.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
