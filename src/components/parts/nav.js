import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const Nav = ({ location }) => {
  const isOn = (url) => location && location.pathname === url;
  const onProject = location.pathname.includes('/project/')
  const onHome = isOn("/");
  const mobile = window.innerWidth < 768
  const [showNav, setShowNav] = useState(mobile || !onHome);
  const [transparent, setTransparent] = useState(onProject)

  useEffect(() => {
    onHome && !mobile ? setShowNav(false) : setShowNav(true);
    onProject ? setTransparent(true) : setTransparent(false)

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const handleScroll = () => {
    if (!onHome || mobile) return;
    if (window.scrollY === 0) {
      setShowNav(false);
    }
    if (window.scrollY > 50) {
      setShowNav(true);
    }
  };

  return (
    <nav className={`page-padding ${showNav ? "" : "d-none"} ${transparent ? 'bg-transparent' : ''}`}>
      <Link to="/" className="text-cursive text-small" style={{ color: "var(--pink)" }}>
        zuzanna
        <br />
        brzozowska
      </Link>
      <div className="links">
        <Link to="/" className="text-uppercase text-medium position-relative">
          <span className="mr-5">work</span>
          {isOn("/") && <div className="nav-img nav-circle" />}
        </Link>
        <Link
          to="/about"
          className="text-uppercase text-medium position-relative"
        >
          <span>about</span>
          {isOn("/about") && <div className="nav-img nav-line" />}
        </Link>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
