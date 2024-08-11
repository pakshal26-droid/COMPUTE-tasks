import React from "react";
import "../Styles/home.css";
import Projects from "./Projects";
import About from "./About";
import Design from "./Design";

function Home() {
  return (
    <>
      <div className="home-page">
        <div className="intro">
          <h1>Pakshal Jain</h1>
          <p>
            I'm a second-year Computer Science student skilled in <br />{" "}
            <b>React, HTML, CSS, JavaScript, and Python</b>, with a growing
            interest in <b>Machine Learning</b> . <br /> I also specialize in
            <b> UI/UX</b> and poster design, blending technical and <br />{" "}
            creative skills to craft innovative solutions.
          </p>
        </div>
      </div>
      <hr />
      <Projects />
      <hr />
      <About />
      <hr />
      <Design />
    </>
  );
}

export default Home;
