import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Arrow from "../../assets/images/backArrowDark.png";
import AssetsCover from "../../assets/images/assets.png";
import VeserusLogo from "../../assets/images/veserus-logo.png";
import DownArrow from "../../assets/images/down-arrow.png";
import NextArrow from "../../assets/images/arrow-right.png";
import { BLOGS, MEDIA } from "./data";
import "./BrandAssets.scss";

const BrandAssets = () => {
  const [mQuery, setMQuery] = useState(
    window.innerWidth <= 1024 ? true : false
  );

  const media = mQuery ? MEDIA.slice(0, 2) : MEDIA;

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addEventListener("change", handleMQuery);
    return () => mediaQuery.removeEventListener("change", handleMQuery);
  }, []);

  const handleMQuery = () =>
    setMQuery(window.innerWidth <= 1024 ? true : false);

  return (
    <div className="assets">
      <div className="assets__header">
        <div className="assets__header__left">
          <div className="assets__header__left__title">
            <img src={Arrow} alt="arrow" />
            <div>Brand assets</div>
          </div>
          {!mQuery ? (
            <p>
              Download official Veserus logos, badges, product screenshots, and
              executive team photos.
              <br />
              <br />
              All Stripe trademarks, logos, or other brand elements are subject
              to Veserus’s Marks Usage Agreement.
            </p>
          ) : (
            <p>
              Download official Veserus logos, badges, product screenshots, and
              executive team photos.
            </p>
          )}
        </div>
        <div className="assets__header__right">
          <img src={AssetsCover} alt="header" />
        </div>
      </div>
      <div className="assets__content">
        <div className="assets__content__logoContainer">
          <div className="assets__content__logoContainer__left">
            <img src={VeserusLogo} alt="logo" />
          </div>
          <div className="assets__content__logoContainer__right">
            <div>The Veserus Logo</div>
            <p>
              The Stripe wordmark is available in three colors. Use blurple or
              slate on light backgrounds, and white on dark backgrounds. Do not
              use any other color for the wordmark.
            </p>
            <a href="/features">
              Download logo kit <img src={DownArrow} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="assets__content__section">
          <div className="assets__content__section__title">Veserus Blog</div>
          <div className="assets__content__section__blog">
            {BLOGS.map((blog) => (
              <Link
                className="assets__content__section__blog__link"
                key={blog.id}
                to={blog.path}
              >
                <span>{blog.title}</span>
                <img src={NextArrow} alt="arrow" />
              </Link>
            ))}
          </div>
        </div>
        <div className="assets__content__section">
          <div className="assets__content__section__title">Media resources</div>
          <div className="assets__content__section__media">
            {media.map(({ id, title, desc, image }) => (
              <div className="assets__content__section__media__item" key={id}>
                <img src={image} alt="media" />
                <div>{title}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAssets;
