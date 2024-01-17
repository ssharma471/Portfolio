import React from "react";
import "./skills.css";

import webDev from "../../assets/webDev.png";
import dataBase from "../../assets/database.png";
import userInterface from "../../assets/userInterface.png";
import IOS from "../../assets/ios.png";
import python from "../../assets/python.jpeg";
import c from "../../assets/c.jpeg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I DO</span>
      <span className="skillDescription">
        <br />
        <br />
        As an ambitious and highly motivated individual, I possess a strong
        foundation in programming languages, system architectures, and project
        management. Through my studies, I have developed excellent communication
        and problem-solving skills, allowing me to work effectively in both team
        and individual settings. I am a skilled communicator and team player,
        able to effectively collaborate with colleagues to achieve shared goals.
        I am dedicated to producing high-quality work and delivering results
        that exceed expectations.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={webDev}
            alt=""
            className="skillBarImg"
            style={{ width: 130, height: 130 }}
          />
          <div className="skillBarText">
            <h2>
              <br />
              Web Development
            </h2>
            <p>
              Proficient in HTML, CSS and JavaScript with a strong foundation in
              ReactJS, Node.
              <br />
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={IOS}
            alt=""
            className="skillBarImg"
            style={{ width: 130, height: 130 }}
          />
          <div className="skillBarText">
            <h2>
              <br />
              IOS and Android Development
            </h2>
            <p>
              I engage in iOS and Android development projects during my college
              coursework.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={dataBase}
            alt=""
            className="skillBarImg"
            style={{ width: 130, height: 130 }}
          />
          <div className="skillBarText">
            <h2>
              <br />
              Database Design & Management
            </h2>
            <p>
              Experience working with SQL databases including MySQL, PostgreSQL,
              MongoDB and Firebase.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={python}
            alt=""
            className="skillBarImg"
            style={{ width: 130, height: 130 }}
          />
          <div className="skillBarText">
            <h2>
              <br />
              Engaged in Python development projects.
            </h2>
            <p>
              Proficient in Python development, actively pursuing projects
              during my college studies.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img
            src={c}
            alt=""
            className="skillBarImg"
            style={{ width: 130, height: 130 }}
          />
          <div className="skillBarText">
            <h2>
              <br />
              C/C++ development
            </h2>
            <p>
              Engaged in C/C++ development, contributing to projects with
              proficiency and dedication.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img
            src={userInterface}
            alt="User Interface Design"
            className="skillBarImg"
            style={{ width: 130, height: 130 }}
          />
          <div className="skillBarText">
            <h2>
              <br />
              User Interface Design
            </h2>
            <p>
              Strong design skills using Figma to create user-friendly
              interfaces for web applications.
            </p>
          </div>
        </div>
      </div>
      <span>Scroll &rarr;</span>
      <br/>       <br/>
      <br/>
      <br/>
      <br/>
      <br/>      <br/>

    
    </section>
  );
};

export default Skills;
