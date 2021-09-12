import React from "react";

const Footer = () => (
  <footer className="page-padding">
    <span>
      say hi:{" "}
      <a className="link-smol" href="mailto:zuzabrzozowska@gmail.com">
        zuzabrzozowska@gmail.com
      </a>
    </span>
    <div>
      <a className="link-smol" href="https://www.linkedin.com/in/zuzanna-brzozowska-94a497110/" target="_blank">
        linkedin
      </a>
      <span className="ml-2 mr-2">·</span>
      <a className="link-smol" href="https://github.com/zuzabrzozowska" target="_blank">
        github
      </a>
      <span className="ml-2 mr-2">·</span>
      <a className="link-smol" href="https://instagram.com/zuzanna.dev" target="_blank">
        instagram
      </a>
    </div>
  </footer>
);

export default Footer;
