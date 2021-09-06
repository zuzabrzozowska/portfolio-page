import React, { useState, useEffect } from "react";
import Codehouse1 from "../../assets/projects/codehouse1.png";
import Codehouse2 from "../../assets/projects/codehouse2.png";
import AppStore from "../../assets/projects/app-store.png";

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const screenshots = [
    { category: "ReactNative", img1: Codehouse1, img2: Codehouse2 },
    // { category: "ReactNative", img1: Codehouse1, img2: Codehouse2 },
  ];

  return (
    <>
      <h3 className="text-uppercase text-medium">React Native</h3>

      <br />

      <a href="#" className="crazy-link">Lorem Ipsum</a>


      <br />

      <br />
      <br />
      <br />
      <br />


      
      {screenshots.map((s) => (
        <a className="hover-wrapper" style={{ cursor: "pointer" }}>
            <p className="text-uppercase">CodeHouse by WeTal</p>
          <img
            src={s.img1}
            height="452"
            width="210"
            className={fadeIn ? "fade-in" : ""}
            onMouseLeave={() => setFadeIn(true)}
          />
          <img src={s.img2} height="452" width="210" />
        </a>
      ))}

      <br />
      <br />
      <br />
      <br />

      <h3 className="text-uppercase">React</h3>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Projects;
