import React, { useState, useEffect, useRef } from "react";
import Projects from "../parts/projects";

const Work = () => {
  const plockRef = useRef(null);

  const removeAnimation = () => {
    plockRef.current.classList.remove("bounce");
  };

  return (
    <div className="page-padding">
      <div style={{ minHeight: "100vh" }}>
        <h1
          className="text-cursive text-center"
          style={{ color: "var(--pink)", fontSize: "24px" }}
        >
          zuzanna
          <br />
          brzozowska
        </h1>

        <h2 className="text-serif text-center mt-3 ml-5 mr-5 action-call">
          full stack developer. born in płock{" "}
          <a
            href="https://en.wikipedia.org/wiki/P%C5%82ock"
            target="_blank"
            onMouseLeave={removeAnimation}
          >
            <div className="img-text img-text--1 bounce" ref={plockRef} />
          </a>
          , based in stockholm. loves writing by hand,
          <div className="ml-1 img-text img-text--2" />
          old movie posters, and going to bed early<span className="">.</span>
          <span className="little-pink-text little-pink-text--1">
            small text here
          </span>
          <span className="little-pink-text little-pink-text--2">
            to explain something.
          </span>
        </h2>
      </div>

      <Projects />
    </div>
  );
};

export default Work;
