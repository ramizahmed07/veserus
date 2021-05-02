import React from "react";

import NextArrow from "../../assets/images/next-arrow.png";
import "./ResourceCards.scss";

const ResourceCards = ({ data }) => {
  console.log(data);
  return (
    <div className="resources">
      {data.map(({ title, desc, id, img, bg_color }) => (
        <div
          style={{ background: bg_color }}
          key={id}
          className="resources__card"
        >
          <div className="resources__card__title">
            {title} <img src={NextArrow} alt="next-arrow" />
          </div>
          <p>{desc}</p>
          <img className="resources__card__img" src={img} alt="resource" />
        </div>
      ))}
    </div>
  );
};

export default ResourceCards;
