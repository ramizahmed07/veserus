import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Arrow from "../../assets/images/backArrowDark.png";
import { TEAM } from "./data";
import "./team.scss";

const Team = () => {
  const [mQuery, setMQuery] = useState(
    window.innerWidth <= 1024 ? true : false
  );
  const history = useHistory();

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addEventListener("change", handleMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", handleMQuery);
  }, []);

  const handleMQuery = () =>
    setMQuery(window.innerWidth <= 1024 ? true : false);

  const goBack = () => history.goBack();

  return (
    <div className="team">
      <div className="team__header">
        <div className="team__header__title">
          <img onClick={goBack} src={Arrow} alt="arrow" />
          <div>Our team</div>
        </div>
        <p className="">
          {!mQuery
            ? `It’s not just our track record, the efficiency of our process and the
          quality of our products. Drive and dedication has ensured Veserus have
          delivered true value to businesses since 2004, and it’s how we’ll be a
          true partner in driving the success of yours.`
            : `It’s not just our track record, the efficiency of our
            process and the quality of our products.`}
        </p>
      </div>
      <div className="team__content">
        {TEAM.map(({ id, image, name, rank }) => (
          <div className="team__content__member" key={id}>
            <img src={image} alt="person" />
            <div className="team__content__member__rank">{rank}</div>
            <div className="team__content__member__name">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
