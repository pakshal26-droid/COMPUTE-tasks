import React from "react";

function Card(props) {
  const projects = props.projects;
  return (
    <div class="card">
      <img
        src="..."
        className="card-img-top"
        alt="..."
        style={{ height: 10 + "rem" }}
      />
      <div className="card-body">
        <h5 clasNames="card-title">Project Title</h5>
        <p className="card-text">Project Description</p>
        <p>
          <a href="/">Project Link</a>
        </p>
      </div>
    </div>
  );
}

export default Card;
