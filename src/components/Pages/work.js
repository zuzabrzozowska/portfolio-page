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
          className="text-cursive text-center hide-mobile"
          style={{ color: "var(--pink)", fontSize: "24px" }}
        >
          zuzanna
          <br />
          brzozowska
        </h1>

        <h2 className="text-serif action-call">
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
          old movie posters, going to bed early and afternoon tea
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
