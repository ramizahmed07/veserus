import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../../assets/images/menu.png";
import AboutCover from "../../assets/images/aboutCover.png";
import "./header.scss";
import PATHS from "../../router/paths";
import routes from "../../router/routeConfig";

const LINKS = [
  {
    title: "Features",
    path: PATHS.FEATURES_PAGE,
  },
  {
    title: "Plans",
    path: PATHS.PLANS_PAGE,
  },
  {
    title: "About us",
    path: PATHS.ABOUT_PAGE,
  },
  {
    title: "Help",
    path: PATHS.HELP_PAGE,
  },
  {
    title: "Sign In",
    path: PATHS.LOGIN_PAGE,
    signIn: true,
  },
];

const Header = () => {
  const [menu, toggleMenu] = useState(false);
  const { pathname } = useLocation();
  const [color, setColor] = useState("#fff");
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
      return;
    } else {
      document.body.style.overflow = "unset";
      return;
    }
  }, [menu]);

  useEffect(() => {
    setColor(routes.find((route) => route.path === pathname)?.headerColor);
  }, [pathname]);

  return (
    <div
      style={{ color }}
      className={`header ${
        pathname.includes("/contact") && "header--contact"
      }  ${pathname.includes("/api-docs") && "header--apiDocs"}`}
    >
      <div className={`header__overlay ${menu && "header__overlay--visible"}`}>
        {LINKS.map(({ title, path, signIn }) => (
          <Link
            onClick={() => toggleMenu(false)}
            key={title}
            to={path}
            className="header__overlay__listItem"
          >
            <div className="header__overlay__listItem__title">{title}</div>
            {signIn ? <div className="circle" /> : null}
          </Link>
        ))}
      </div>
      <h2 className="header__logo">
        <span className="header__logo--initials">ve</span>
        <span className={`${menu && "inverse"}`}>
          {pathname.includes("/api-docs") ? "API documentation" : "serus"}
        </span>
      </h2>
      <div className="header__links">
        {LINKS.map(({ title, path, signIn }) => (
          <Link
            key={title}
            to={path}
            className={`header__links__link ${
              signIn && "header__links__signIn"
            }`}
            key={title}
          >
            <span>{title}</span>
            {signIn ? <div className="circle" /> : null}
          </Link>
        ))}
      </div>
      <div
        onClick={() => toggleMenu((prev) => !prev)}
        className={`header__links__mobileMenu ${
          menu && "header__links__mobileMenu--active"
        } ${
          pathname.includes("/api-docs") && "header__links__mobileMenu--apiDocs"
        }`}
      >
        {/* <img src={MenuIcon} alt="menu" /> */}
      </div>
    </div>
  );
};

export default Header;
