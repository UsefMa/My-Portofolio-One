import React from "react";
import "./ProjectStyle.css";
import crypto from "./crypto_img.png";
import yourFlix from "./yourFlix_img.png";
import ajiwChat from "./ajiwChat_img.png";
import ecommerce from "./ecommerce_img.png";
import weather from "./weather_img.png";

import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const Project = () => {
  return (
    <>
      <div className="project-container" id="project">
        <p className="project-text">Here's Some Recent Work I'v Done</p>
        <div className="project-grid">
          {/* crypto app */}

          <div className="middle">
            <img src={crypto} alt="" />
            <div className="btns">
              <a
                href="https://usefma.github.io/crypto-landing-page-react/"
                target={"_blank"}
              >
                <TbWorld className="live-btn" size={36} />
              </a>
              <a
                href="https://github.com/UsefMa/crypto-landing-page-react"
                target={"_blank"}
              >
                <BsGithub className="github-btn" size={33} />
              </a>
            </div>
          </div>
          {/* myFlix app */}

          <div className="middle">
            <img src={yourFlix} alt="" />
            <div className="btns">
              <a
                href="https://usefma.github.io/MyFlix-app-reactJs-/"
                target={"_blank"}
              >
                <TbWorld className="live-btn" size={36} />
              </a>
              <a
                href="https://github.com/UsefMa/MyFlix-app-reactJs-"
                target={"_blank"}
              >
                <BsGithub className="github-btn" size={33} />
              </a>
            </div>
          </div>
          {/* chat app */}
          <div className="middle">
            <img src={ajiwChat} alt="" />
            <div className="btns">
              <a href="https://usefma.github.io/ajiw-chat/" target={"_blank"}>
                <TbWorld className="live-btn" size={36} />
              </a>
              <a href="https://github.com/UsefMa/ajiw-chat" target={"_blank"}>
                <BsGithub className="github-btn" size={33} />
              </a>
            </div>
          </div>
          {/* ANOTHER app */}
          <div className="middle">
            <img src={weather} alt="" />
            <div className="btns">
              <a
                href="https://usefma.github.io/meteo-react-app-one/"
                target={"_blank"}
              >
                <TbWorld className="live-btn" size={36} />
              </a>
              <a
                href="https://github.com/UsefMa/meteo-react-app-one"
                target={"_blank"}
              >
                <BsGithub className="github-btn" size={33} />
              </a>
            </div>
          </div>
          {/* ecommerce app */}

          <div className="middle">
            <img src={ecommerce} alt="" />

            <p
              className="process"
              style={{
                color: "red",
              }}
            >
              in process (react js, redux...) 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
