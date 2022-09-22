import React from "react";
import "./AboutStyle.css";

const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <p className="about-name">I'm Youssef .M </p>
        <h1 className="job-title">a Front End Developer</h1>
        <p className="about-text">
          I am a <span>(</span> Self Though <span>)</span> Developer I'm Skilled
          About Building Responsive User Interfaces Using Lastset Technologie
          Like <span>(</span> React Js <span co>)</span>, So That I Can Improves
          My Skills And The Lives Of Those Around Me,
        </p>
        <a href="https://github.com/UsefMa" target={"_blank"}>
          <button className="about-btn">Real Code</button>
        </a>
      </div>
    </>
  );
};

export default About;
