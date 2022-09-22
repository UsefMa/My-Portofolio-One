import React from "react";
import "./ContactStyle.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="chat-container" id="chat">
        <h1 style={{ fontSize: "45px" }}>Get in Touch With Me</h1>
        {/* CHAT*/}
        <div className="chat">
          <div className="left-chat">
            <form>
              <input type="text" placeholder="Your Name" />
              <br />

              <input type="email" placeholder="Your email" />
              <br />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write Me a Message"
              ></textarea>
              <br />
              <button>Reach Me</button>
            </form>
          </div>
          {/* right*/}
          <div className="right-chat">
            <a href="https://github.com/UsefMa" target={"_blank"}>
              <FaGithub
                size={40}
                style={{ margin: "1rem", cursor: "pointer", color: "gray" }}
                className="chat-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/youssef-el-maslouhy-783129251/"
              target={"_blank"}
            >
              <FaLinkedinIn
                size={40}
                style={{ margin: "1rem", cursor: "pointer", color: "gray" }}
                className="chat-icon"
              />
            </a>
          </div>
        </div>
        {/* left*/}
      </div>
    </>
  );
};

export default Contact;
