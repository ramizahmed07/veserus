import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../../assets/images/menu.png";
import AboutCover from "../../assets/images/aboutCover.png";
import "./header.scss";

const LINKS = [
  {
    title: "Features",
    path: "/features",
  },
  {
    title: "Plans",
    path: "/plans",
  },
  {
    title: "About us",
    path: "/about",
  },
  {
    title: "Help",
    path: "/help",
  },
  {
    title: "Sign In",
    path: "/login",
    signIn: true,
  },
];

const Header = () => {
  const [menu, toggleMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
      return;
    } else {
      document.body.style.overflow = "unset";
      return;
    }
  }, [menu]);

  return (
    <div className="header">
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
        <span className={`${menu && "inverse"}`}>serus</span>
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
        }`}
      >
        {/* <img src={MenuIcon} alt="menu" /> */}
      </div>
    </div>
  );
};

export default Header;
