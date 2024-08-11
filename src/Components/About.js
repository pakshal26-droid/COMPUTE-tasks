import React from "react";
import "../Styles/about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about_section">
        <h1>About Me</h1>
      </div>
      <div className="description">
        <p>
          <b>Current Status: </b>Second-year Data Science student Core
        </p>
        <p>
          <b>Interests:</b> Machine Learning (ML), Artificial Intelligence (AI)
        </p>
        <p>
          <b>Additional Passion:</b> Building interactive web applications with{" "}
          <br />
          React JS Mission:To blend innovation with practical solutions
        </p>
        <p>
          <b>Goal: </b>Harness emerging technologies to create meaningful impact
        </p>
        <p>
          <b>Motto:</b>Let's code the future together!
        </p>
        <Link to="/Contact">
          <button type="button" class="btn btn-outline-dark">
            Contact Me
          </button>
        </Link>
      </div>
      <br />
      <br />
    </div>
  );
}

export default About;
