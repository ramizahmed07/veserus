import React, { useEffect, useState } from "react";

import Arrow from "../../assets/images/backArrowDark.png";
import PartnersCover from "../../assets/images/partners.png";
import ResourceCards from "../../components/ResourceCards";
import { PARTNERS, RESOURCE_CARDS } from "./data";
import "./Partners.scss";

const Partners = () => {
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
    <div className="partners">
      <div className="partners__header">
        <div className="partners__header__left">
          <div className="partners__header__left__title">
            <img src={Arrow} alt="arrow" />
            <div>Partners</div>
          </div>
          {!mQuery ? (
            <p>
              We’ve partnered with everyone from early-stage startups to Fortune
              100 companies.
              <br />
              <br />
              Working as one single team with our clients, we build products and
              brands that people love.
            </p>
          ) : (
            <p>
              We’ve partnered with everyone from early-stage startups to Fortune
              100 companies.
            </p>
          )}
        </div>
        <div className="partners__header__right">
          <img src={PartnersCover} alt="header" />
        </div>
      </div>
      <div className="partners__content">
        {PARTNERS.map(({ id, name, role }) => (
          <div className="partners__content__partner" key={id}>
            <p className="partners__content__partner__name">{name}</p>
            <p className="partners__content__partner__role">{role}</p>
          </div>
        ))}
      </div>

      <ResourceCards data={RESOURCE_CARDS} />
    </div>
  );
};

export default Partners;
