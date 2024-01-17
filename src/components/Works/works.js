import React from "react";
import "./works.css";
import P1 from "../../assets/arts.jpeg";
import P2 from "../../assets/softwaredev.jpeg";
import P3 from "../../assets/softwareEng.jpeg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        As a current college student specializing in software development, I am
        enthusiastic about honing my skills and contributing to innovative
        projects. Eager to learn and adapt, I bring a fresh perspective and a
        commitment to excellence in software engineering.
        <br />
        <br />
        These are my work also my PORTFOLIO
      </span>
      <div className="worksImgs">
        <img src={P1} alt="" className="worksImg" />
        <img src={P2} alt="" className="worksImg" />
        <img src={P3} alt="" className="worksImg" />
      </div>

      <div className="worksImgs">
        <span className="worksImg">
          Created Metropolitan Website
          <a
            style={{ color: "white" }}
            activeClass="active"
            href="https://github.com/ssharma471/Metropolitan_Art_Museum"
            target="_blank"
            rel="noopener noreferrer"
            className="desktopMenuListItem"
          >
            Link To Github
            <br></br>
          </a>
          Independently developed a robust Web API using Express and Node.js,
          enhancing the museum's online presence. Utilized Next.js for the
          frontend and integrated MongoDB, creating a modern, responsive website
          for improved user engagement and a dynamic online experience for
          visitors.
        </span>
        <span className="worksImg">
          Created this Portfolio
          <a
            style={{ color: "white" }}
            activeClass="active"
            href="https://github.com/ssharma471/Metropolitan_Art_Museum"
            target="_blank"
            rel="noopener noreferrer"
            className="desktopMenuListItem"
          >
            Link To Github
            <br></br>
          </a>
          Designed and developed this portfolio with React, exemplifying not
          only technical expertise but also a versatile skill set encompassing a
          range of technologies and capabilities.
        </span>
        <span className="worksImg">
        Currently working on developing a website under the name of Ardent Coders          <a
            style={{ color: "white" }}
            activeClass="active"
            target="_blank"
            rel="noopener noreferrer"
            className="desktopMenuListItem"
          >
            No Link Right Now (Working on it)
            <br></br>
          </a>
          Passionate and experienced coder eager to share knowledge. Previously
          shared codes on a blog and now motivated to help others overcome
          coding challenges. Confident in making a positive impact through
          teaching and mentoring. Excited to contribute to the team.
        </span>{" "}
      </div>

      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
