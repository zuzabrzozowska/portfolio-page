import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import projects from "../../assets/projects/projectsList"

const ProjectItem = ({ project }) => {
  const [shadow, setShadow] = useState(null);

  const toggleShadow = () => {
    if (window.innerWidth < 768) setShadow(false)
    setShadow(!shadow)
  }

  return (
    <Link className="col-md mb-5" to={`/project/${project.url}`}>
      <div
        className={`img-project img-project--${project.image} ${shadow ? 'shadow' : ''}`}
        onMouseOver={toggleShadow}
        onMouseLeave={toggleShadow}
      />
      <p className="text-uppercase mb-2">{project.category}</p>
      <a className="text-medium text-bold project-title">{project.title}</a>
      <p className="text-bold mt-2">{project.description}</p>
    </Link>
  );
};

const Projects = ({ location }) => {
  const wrapperRef = useRef(null)


  useEffect(() => {
    if (location.hash === "#projects") {
      wrapperRef.current && wrapperRef.current.scrollIntoView()
    }
  }, [location])

  return (
    <div id="projects" ref={wrapperRef} className={`row mr-0 ml-0 mt-5"`}>
      {projects.map((project, i) => (
        <ProjectItem project={project} key={i} />
      ))}
    </div>
  );
};

export default withRouter(Projects);
