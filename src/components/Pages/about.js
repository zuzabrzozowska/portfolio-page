import React from "react";
import Me from "../../assets/photos/me.png";
import Scribbles from "../../assets/scribbles.png";

const About = () => {
  return (
    <div className="row mt-5 mb-5 page-padding m-0">
      <div className="col-md">
        <h1 className="text-serif h1-about">
          i’m Zuzanna, a full stack developer
          <br />
          currently based in Stockholm, Sweden.
        </h1>
        <p className="mr-1 text-bold text-uppercase text-medium ">some facts about me!</p>
        <span className="text-bold">
          I've lived in Gdańsk, Kraków, Växjö and Stockholm.
          <br />I studied Swedish language and litterature but decided to switch
          to coding.
          <br />
          At the moment, I'm a Full Stack Developer at WeTal and a Lead Developer in a team of three.
          <br />
          I'm responsible for the full lifecycle of our web-based platform as
          well as our native app (Android and iOS).
          <br /><br />
          My interests include film studies, art history and learning Italian.
          <br />
          You can reach me at{" "}
          <a href="mailto:zuzabrzozowska@gmail.com">zuzabrzozowska@gmail.com</a>
          , so say hello! ✨
        </span>
      </div>
      <div className="col-md d-flex position-relative justify-content-center">
        
          <img
            src={Me}
            height="300"
            className="mt-5"
            style={{ transform: "rotate(3deg)" }}
            alt="Just me sitting on a couch with a Macbook"
          />
          <img
            src={Scribbles}
            height="150"
            className="position-absolute z-index hide-mobile"
            style={{ bottom: "100px", left: "30px" }}
            alt=""
          />
      </div>
    </div>
  );
};

export default About;
