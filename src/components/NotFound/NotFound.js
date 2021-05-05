import React from "react";
import { useHistory } from "react-router";
import AboutCover from "../../assets/images/aboutCover.png";
import BackArrow from "../../assets/images/backArrow.png";
import "./notFound.scss";

const NotFound = () => {
  const history = useHistory();

  const goBack = () => history.goBack();

  return (
    <div className="notFound">
      <div className="notFound__cover">
        {/* <img className="notFound__cover__img" src={AboutCover} alt="cover" /> */}
      </div>
      <div className="notFound__content">
        <div className="notFound__content__title">
          <img src={BackArrow} alt="back" onClick={goBack} />
          <div>Not Found</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
