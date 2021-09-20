import React, { useState, useEffect, useRef } from "react";
import Projects from "../parts/projects";
import BabyArrow from "../../assets/arrow.png";

const Work = () => {
  const plockRef = useRef(null);

  const removeAnimation = () => {
    plockRef.current.classList.remove("bounce");
  };

  return (
    <div className="page-padding">
      <div style={{ minHeight: "100vh" }}>
        <h1
          className="text-cursive text-center hide-mobile"
          style={{ color: "var(--pink)", fontSize: "24px" }}
        >
          zuzanna
          <br />
          brzozowska
        </h1>

        <h2 className="text-serif action-call">
          full stack developer. born
          {window.innerWidth > 768 ? <br /> : <> </>}in płock{" "}
          <a
            href="https://en.wikipedia.org/wiki/P%C5%82ock"
            // href="https://en.wikipedia.org/wiki/Pierogi"
            target="_blank"
            onMouseLeave={removeAnimation}
          >
            <div className="img-text img-text--1 bounce" ref={plockRef} />
          </a>
          , based in stockholm. loves writing by{" "}
          <span
            style={{
              fontFamily: "inherit",
              fontSize: "inherit",
              position: "relative",
            }}
          >
            hand
            <div
              className="position-absolute hide-mobile"
              style={{ top: "-27px", right: "-50px" }}
            >
              <span className="text-cursive text-pink">todo lists, mostly</span>
            </div>
            <img className="position-absolute hide-mobile" alt="" src={BabyArrow} height="20" style={{ top: "15px", right: "-30px" }} />
          </span>{" "}
          , old movie posters
          <div className="ml-1 img-text img-text--2" />, going to bed early and
          afternoon tea
          <span className="little-pink-text little-pink-text--1">
            black with a splash
          </span>
          <span className="little-pink-text little-pink-text--2">
            of milk, no sugar.
          </span>
        </h2>
      </div>

      <Projects />
    </div>
  );
};

export default Work;
