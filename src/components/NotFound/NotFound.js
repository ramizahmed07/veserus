import React from "react";
import AboutCover from "../../assets/images/aboutCover.png";
import BackArrow from "../../assets/images/backArrow.png";
import "./notFound.scss";
const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound__cover">
        {/* <img className="notFound__cover__img" src={AboutCover} alt="cover" /> */}
      </div>
      <div className="notFound__content">
        <div className="notFound__content__title">
          <img src={BackArrow} alt="back" />
          <div>Not Found</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
