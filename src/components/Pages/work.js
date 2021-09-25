import React, { useState, useEffect, useRef } from "react";
import Projects from "../parts/projects";
import BabyArrow from "../../assets/arrow.png";

const Work = () => {
  const plockRef = useRef(null);
  const [showBlur, setShowBlur] = useState(true)

  const removeAnimation = () => {
    plockRef.current.classList.remove("bounce");
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      setShowBlur(false);
    } else {
      setShowBlur(true)
    }
  };


  return (
    <>
      <div className="page-padding">
        <div className="pb-5 mb-5">
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
            afternoon{" "}
            <span
              style={{
                fontFamily: "inherit",
                fontSize: "inherit",
                position: "relative",
              }}
            >
              tea
              <div className="tea-text-wrapper">
                <p className="text-cursive text-pink">black with a splash</p>
                <p className="text-cursive text-pink">of milk, no sugar.</p>
              </div>
            </span>
          </h2>
        </div>
        <br />
        <br />

        <Projects />
      </div>

      {showBlur && <div className='hide-mobile bottom-blur' />}
    </>
  );
};

export default Work;
