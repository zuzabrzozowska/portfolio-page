import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const Sidebar = ({ location }) => {
  const [activeUrl, setActiveUrl] = useState(null);
  const links = [
    { text: "Home", url: "/" },
    { text: "About me", url: "/about" },
    { text: "Resume", url: "/resume" },
    { text: "What have I coded?", url: "/projects" },
  ];

  const isOn = (link) => {
    return location.pathname === link.url;
  };

  useEffect(() => {
    setActiveUrl(location.pathname);
  }, [location.pathname])

  return (
    <>
      <div className="col-3 sidebar">
        <div className="ml-5">
          <div className="img-sidebar" />
          <h1 className="accent-font">Zuzanna</h1>

          <ul>
            {links.map((l) => (
              <li className="text-uppercase">
                <Link to={l.url} className="d-block position-relative">
                  <span className={`${isOn(l) ? "text-underline" : ""}`}>
                    {l.text}
                  </span>
                  <i
                    className="fas fa-chevron-right position-absolute"
                    style={{ right: 0 }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <footer>
          <div className="social">
            <a
              className="mr-2"
              target="_blank"
              href="https://instagram.com/zuzanna.dev"
            >
              <i className="fab fa-instagram text-dark text-medium" />
            </a>
            <a
              className="mr-2"
              target="_blank"
              href="https://www.linkedin.com/in/zuzanna-brzozowska-94a497110/"
            >
              <i className="fab fa-linkedin-in text-dark text-medium" />
            </a>
            <a target="_blank" href="mailto:zuzabrzozowska@gmail.com">
              <i className="fas fa-envelope text-dark text-medium" />
            </a>
          </div>
        </footer>
      </div>
      <div className="col-3"></div>
    </>
  );
};

export default withRouter(Sidebar);
