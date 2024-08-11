import React, { useState } from "react";
import "../Styles/design.css";
import {
  cochella,
  interstellar,
  kushner,
  nathandrake,
  nikon,
  swissstyle,
  umbrella,
  vision,
  zucky,
} from "./image";

function Design() {
  const [image, setImage] = useState([
    { img: cochella },
    { img: interstellar },
    { img: kushner },
    { img: nathandrake },
    { img: swissstyle },
    { img: umbrella },
    { img: vision },
    { img: zucky },
    // { img: nikon },
  ]);
  return (
    <>
      <div className="design-header">
        <h1>Design</h1>
      </div>
      <div className="design-image-section">
        {image.map((image) => {
          return (
            <div className="image-item">
              <img className="img-card" src={image.img} alt="..." />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Design;
