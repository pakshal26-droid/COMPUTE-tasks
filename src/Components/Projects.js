import React, { useState } from "react";
import "../Styles/projects.css";
import funportfolio from "../Images/funportfolio.png";
import returnsrocket from "../Images/returnsrocket.png";
import randomwoof from "../Images/randomwoof.png";

function Projects() {
  const [projects, setprojects] = useState([
    {
      project_title: "Rock Paper Scissor",
      project_description: "JS HTML CSS",
      project_link: "www.google.com",
      img: returnsrocket,
      project_outline: "A rock paper scissor game against the PC",
    },
    {
      project_title: "Random Woof",
      project_description: "JS HTML CSS DOGAPI",
      project_link: "https://randomwoof.netlify.app/",
      img: randomwoof,
      project_outline: "Using an API , it gets you Dog images on button click",
    },
    {
      project_title: "Returns Rocket",
      project_description: "JS HTML CSS",
      project_link: "https://returnsrocket.netlify.app/",
      img: returnsrocket,
      project_outline: "This tool Calculates your return on investment",
    },
    {
      project_title: "Fun Portfolio",
      project_description: "JS HTML CSS",
      project_link: "https://pakshaljain.netlify.app/",
      img: funportfolio,
      project_outline: "This is a basic early on portfolio",
    },
    {
      project_title: "Fun Portfolio",
      project_description: "JS HTML CSS",
      project_link: "https://pakshaljain.netlify.app/",
      img: funportfolio,
      project_outline: "This is a basic early on portfolio",
    },
    {
      project_title: "Fun Portfolio",
      project_description: "JS HTML CSS",
      project_link: "https://pakshaljain.netlify.app/",
      img: funportfolio,
      project_outline: "This is a basic early on portfolio",
    },

    {
      project_title: "Random Woof",
      project_description: "JS HTML CSS DOGAPI",
      project_link: "www.google.com",
      img: randomwoof,
      project_outline: "Using an API , it gets you Dog images on button click",
    },
    {
      project_title: "Returns Rocket",
      project_description: "JS HTML CSS",
      project_link: "www.google.com",
      img: returnsrocket,
      project_outline: "This tool Calculates your return on investment",
    },
  ]);
  return (
    <>
      <div className="projects">
        <div className="project-head">
          <h1>My Projects</h1>
        </div>
        <div className="cards-section">
          {projects.map((project) => {
            return (
              <div
                class="card"
                style={{ width: 250 + "px", height: 20 + "rem" }}
              >
                <img
                  src={project.img}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 250 + "px", height: 10 + "rem" }}
                />
                <div className="card-body">
                  <h5 clasNames="card-title">{project.project_title}</h5>
                  <p className="card-text">{project.project_description}</p>
                  <p className="card-text text2">{project.project_outline}</p>
                  <p>
                    <a
                      className="project_link"
                      target="_blank"
                      href={project.project_link}
                      rel="noreferrer"
                    >
                      Project link
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
