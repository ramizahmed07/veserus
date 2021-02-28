import { Link } from "react-router-dom";
import React from "react";

import "./footer.scss";

const FOOTER_LEFT_LINKS = [
  { title: "Veserus", path: "/veserus" },
  { title: "Resources", path: "/resources" },
  { title: "Contacts", path: "/contact" },
  { title: "Team", path: "/team" },
  { title: "Design", path: "/design" },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__leftCol">
          {FOOTER_LEFT_LINKS.map(({ title, path }) => (
            <Link to={path} key={title} className="footer__leftCol__link">
              {title}
            </Link>
          ))}
        </div>
        <div className="footer__rightCol">
          <div className="footer__rightCol__col">
            <div className="footer__rightCol__col__title">User Information</div>
            <div className="footer__rightCol__col__links">
              <p>Fees</p>
              <p>Help Centre</p>
              <p>API Documentation</p>
            </div>
            <p className="footer__rightCol__col__copyrights">
              © 2020 Veserus Association
            </p>
          </div>
          <div className="footer__rightCol__col">
            <div className="footer__rightCol__col__title">Company</div>
            <div className="footer__rightCol__col__links">
              <p>About</p>
              <p>Professionals</p>
              <p>Partners</p>
              <p>Mobile apps</p>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__copyrights">© 2020 Veserus Association</p>
    </div>
  );
};

export default Footer;
