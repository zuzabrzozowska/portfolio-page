import React, { useEffect } from "react";
import { useParams, withRouter, Link } from "react-router-dom";
import projects from "../../assets/projects/projectsList";

const ProjectPage = ({ history, location }) => {
  const { id } = useParams();
  const chosenProject = projects.find((p) => p.url === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const goBack = () => {
    history.push("/#projects");
  };

  if (!chosenProject)
    return <h1 className="text-danger">Could not find the project.</h1>;

  return (
    <div className="mb-5 overflow-hidden">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundImage: `url(${chosenProject.image2 || chosenProject.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "60vh",
          zIndex: -1,
        }}
      >
        <div className="overlay" />
      </div>

      <div
        style={{
          zIndex: 1,
          backgroundColor: "var(--eggshell)",
          minHeight: "65vh",
          width: "100vw",
          left: 0,
          marginTop: "60vh",
        }}
      >
        <div className="page-padding">
          <h1
            className="text-serif mt-3 action-call text-center"
            style={{ lineHeight: "normal", fontSize: "50px" }}
          >
            {chosenProject.title}
          </h1>
          <p className="text-bold text-medium text-center">
            {chosenProject.category}
          </p>
          <div className="float-left mt-4">
            <a onClick={goBack} style={{ cursor: "pointer" }}>
              <i className="fa fa-arrow-left text-medium" />
            </a>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-4">
              <p className="text-uppercase">role</p>
              <p>{chosenProject.role || 'Full Stack Developer'}</p>
              {chosenProject.stack && (
                <>
                  <p className="text-uppercase mt-3">stack</p>
                  {chosenProject.stack.map((s) => (
                    <p key={s}>{s}</p>
                  ))}
                </>
              )}
              <p className="text-uppercase mt-3">year</p>
              <p>{chosenProject.year}</p>
            </div>
            <div className="col-8">
              <p className="text-bold">
                {chosenProject.description}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white pb-4">
          <div className="page-padding">
            <h2 className="mb-5 mb-5 text-serif action-call text-large text-center">
              feature overview
            </h2>

            {chosenProject.gallery.map((item, i) => (
              <div className="project-image-wrapper mb-5">
                <div
                  style={{
                    backgroundImage: `url(${item.img})`, float: i % 2 === 1 ? "right" : "left",
                  }}
                  className="project-image"
                />
                <div
                  className="d-flex flex-column justify-content-center"
                  style={{ height: "300px" }}
                >
                  <p className="ml-3 mr-3 mb-2 text-medium text-bold">
                    {item.title}
                  </p>
                  <p className="ml-3 mr-3 text-bold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {chosenProject.link && <div className="mt-5 mb-5 p-5 d-flex justify-content-center">
          <a
            href={chosenProject.link}
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-serif text-large text-center" style={{ borderBottomWidth: "1.5px", borderStyle: "solid", lineHeight: "inherit" }}>check out more information here</span>
          </a>
        </div>}

        {projects
          .filter((p) => p.url !== chosenProject.url)
          .slice(0, 4)
          .map((p, i) => (
            <Link to={"/project/" + p.url}>
            <div
              style={{
                cursor: "pointer",
                display: window.innerWidth > 768 && "inline-block",
                backgroundImage: `url(${p.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "250px",
                width: window.innerWidth > 768 && "33%",
                position: "relative",
              }}
            >
                <div className="overlay" />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  display: "flex",
                  justifyContent: "space-around",
                  zIndex: 9,
                }}
              >
                <div style={{ width: "45%" }}>
                  <a className="text-medium text-bold text-white">{p.title}</a>
                </div>
                <div style={{ width: "45%" }}>
                  <span className="text-uppercase text-bold text-white">{p.category}</span>
                </div>
              </div>
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default withRouter(ProjectPage);
