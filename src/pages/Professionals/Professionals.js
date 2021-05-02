import React, { useEffect, useState } from "react";

import Arrow from "../../assets/images/backArrowDark.png";
import ProfessionalsCover from "../../assets/images/professionals.png";
import BookIcon from "../../assets/images/book.png";
import "./Professionals.scss";
import { PROFESSIONALS, PROFESSIONALS_RESOURCE_CARDS } from "./data";
import ResourceCards from "../../components/ResourceCards";

const Professionals = () => {
  const [mQuery, setMQuery] = useState(
    window.innerWidth <= 1024 ? true : false
  );

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addEventListener("change", handleMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", handleMQuery);
  }, []);

  const handleMQuery = () =>
    setMQuery(window.innerWidth <= 1024 ? true : false);

  return (
    <div className="professionals">
      <div className="professionals__header">
        <div className="professionals__header__left">
          <div className="professionals__header__left__title">
            <img src={Arrow} alt="arrow" />
            <div>Professionals</div>
          </div>
          {!mQuery ? (
            <p>
              Build or enhance your Stripe integration with the help of our
              verified experts.
              <br />
              <br />
              Deploy and scale faster.
            </p>
          ) : (
            <p>
              Build or enhance your Stripe integration with the help of our
              verified experts.
            </p>
          )}
        </div>
        <div className="professionals__header__right">
          <img src={ProfessionalsCover} alt="header" />
        </div>
      </div>
      <div className="professionals__message">
        <div className="professionals__message__icon">
          <img src={BookIcon} alt="book" />
        </div>
        <span>
          {!mQuery
            ? `See our resources and guides for businesses and developers who are
          rapidly adapting to the challenges of COVID-19. You can also explore
          popular no-code solutions for businesses looking to move online
          quickly.`
            : `See our resources and guides for businesses and developers who are rapidly adapting to the
          challenges of COVID-19. `}
        </span>
      </div>
      <div className="professionals__content">
        {PROFESSIONALS.map(({ name, desc, id, logo }) => (
          <div className="professionals__content__professional" key={id}>
            <div class="professionals__content__professional__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="professionals__content__professional__info">
              <div className="professionals__content__professional__info__title">
                {name}
              </div>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ResourceCards data={PROFESSIONALS_RESOURCE_CARDS} />
    </div>
  );
};

export default Professionals;
