import { Link, useLocation } from "react-router-dom";
import React from "react";

import "./footer.scss";
import PATHS from "../../router/paths";

const FOOTER_LEFT_LINKS = [
  { title: "Veserus", path: "/veserus" },
  { title: "Resources", path: "/resources" },
  { title: "Contacts", path: PATHS.CONTACT_PAGE },
  { title: "Team", path: PATHS.TEAM },
  { title: "Design", path: "/design" },
];

const USER_INFORMATION_LINKS = [
  { title: "Fees", path: PATHS.PLANS_PAGE },
  { title: "Help Centre", path: PATHS.HELP_PAGE },
  { title: "API Documentation", path: PATHS.API_DOCS },
];

const COMPANY_LINKS = [
  { title: "About", path: PATHS.ABOUT_PAGE },
  { title: "Professionals", path: PATHS.PROFESSIONALS },
  { title: "Partners", path: PATHS.PARTNERS },
  { title: "Mobile apps", path: "/mobile-apps" },
];

const checkIfFooterPages = (pathname) => {
  const paths = ["/professionals", "/team", "/partners", "/brand-assets"];
  return paths.includes(pathname);
};

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname.includes("/api-docs")) return null;

  return (
    <div className="footer">
      <div
        className={`footer__content ${
          checkIfFooterPages(pathname) ? "footer__contentSM" : ""
        }`}
      >
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
              {USER_INFORMATION_LINKS.map(({ title, path }) => (
                <Link className="footer__rightCol__col__links__link" to={path}>
                  {title}
                </Link>
              ))}
            </div>
            <p className="footer__rightCol__col__copyrights">
              © 2020 Veserus Association
            </p>
          </div>
          <div className="footer__rightCol__col">
            <div className="footer__rightCol__col__title">Company</div>
            <div className="footer__rightCol__col__links">
              {COMPANY_LINKS.map(({ title, path }) => (
                <Link className="footer__rightCol__col__links__link" to={path}>
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="footer__copyrights">© 2020 Veserus Association</p>
    </div>
  );
};

export default Footer;
