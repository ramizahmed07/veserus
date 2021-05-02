import React from "react";
import { createMuiTheme, Grid, ThemeProvider } from "@material-ui/core";
import Product from "../../../assets/images/payment-icon1.png";
import Arrow from "../../../assets/svgs/rightArrow.svg";
import Ima from "../../../assets/images/financial-services.png";
import "./apiDocsHome.scss";
import {
  GET_STARTED,
  VESERUS_PRODUCTS,
  AFTER_THE_PAYMENT,
  GUIDES,
  OTHER_AND_POPULAR,
} from "./data";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 320,
      md: 768,
      lg: 1025,
    },
  },
});

const ApiDocsHome = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="apiDocsHome">
        <div className="apiDocsHome__title">Home</div>
        <div className="apiDocsHome__subtitle">
          Build a web or mobile integration to accept payments online or in
          person.
        </div>
        <div className="apiDocsHome__section">
          <div className="apiDocsHome__section__mainTitle">Get started</div>

          <Grid container>
            {GET_STARTED.map(({ id, img, title, desc }, i) => (
              <Grid key={id} item sm={12} md={6} lg={6}>
                <div className="apiDocsHome__section__getStarted">
                  <img
                    className="apiDocsHome__section__getStarted__img"
                    src={img}
                    alt="service"
                  />
                  <div className="apiDocsHome__section__getStarted__title">
                    {title}
                  </div>
                  <div className="apiDocsHome__section__getStarted__desc">
                    {desc}
                  </div>
                  <div
                    className={`apiDocsHome__section__getStarted__link ${
                      i !== GET_STARTED.length - 1 &&
                      "apiDocsHome__section__getStarted__link--first"
                    }`}
                  >
                    <span>Learn more</span>
                    <img src={Arrow} alt="arrow" />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="apiDocsHome__section">
          <div className="apiDocsHome__section__mainTitle">
            Explore Veserus products
          </div>
          <Grid container>
            {VESERUS_PRODUCTS.map(({ img, title, desc, id, color }, i) => (
              <Grid
                className="product-grid"
                key={id}
                item
                sm={12}
                md={4}
                lg={4}
              >
                <div
                  className={`apiDocsHome__section__product ${
                    i !== VESERUS_PRODUCTS.length - 1 &&
                    "apiDocsHome__section__product--gap"
                  }`}
                >
                  <div
                    style={{
                      background: color,
                    }}
                    className="apiDocsHome__section__product__image"
                  >
                    <img src={img} alt="product" />
                  </div>
                  <div className="apiDocsHome__section__product__title">
                    {title}
                  </div>
                  <div className="apiDocsHome__section__product__desc">
                    {desc}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="apiDocsHome__section">
          <div className="apiDocsHome__section__titleContainer">
            <div
              style={{ margin: 0 }}
              className="apiDocsHome__section__mainTitle"
            >
              After the payment
            </div>
            <div className="apiDocsHome__section__getStarted__link">
              <span>See all</span>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="apiDocsHome__section__payments__container">
            {Object.keys(AFTER_THE_PAYMENT).map((key) => (
              <div key={key} className="apiDocsHome__section__payments">
                {AFTER_THE_PAYMENT[key].map(({ id, title, desc, img }, i) => (
                  <div
                    key={id}
                    className={`apiDocsHome__section__payments__payment ${
                      i !== AFTER_THE_PAYMENT.length - 1 &&
                      "apiDocsHome__section__payments__payment--gap"
                    }`}
                  >
                    <img src={img} alt="payment" />
                    <div className="apiDocsHome__section__payments__payment__title">
                      {title}
                    </div>
                    <div className="apiDocsHome__section__payments__payment__desc">
                      {desc}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="apiDocsHome__section apiDocsHome__section--guides">
          <div className="apiDocsHome__section__mainTitle">More Guides</div>
          <div className="apiDocsHome__section__guides">
            <Grid container>
              {GUIDES.map(({ list, title, id }, i) => (
                <Grid
                  className="apiDocsHome__section__guides__grid"
                  key={id}
                  item
                  sm={12}
                  md={4}
                  lg={3}
                >
                  <div
                    className={`apiDocsHome__section__guides__guide ${
                      i !== 0 &&
                      "apiDocsHome__section__guides__guide--withBorder"
                    }`}
                  >
                    <div className="apiDocsHome__section__guides__guide__title">
                      {title}
                    </div>
                    <div className="apiDocsHome__section__guides__guide__list">
                      {list.map((item) => (
                        <div
                          key={item}
                          className={`apiDocsHome__section__guides__guide__list__item`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <div className="apiDocsHome__section apiDocsHome__section">
          <div className="apiDocsHome__section__mainTitle">
            Other &amp; Popular
          </div>
          <Grid
            className="apiDocsHome__section__popularList"
            spacing={3}
            container
          >
            {OTHER_AND_POPULAR.map(
              ({ id, title, desc, textColor, bgColor }) => (
                <Grid key={id} item sm={12} md={6} lg={6}>
                  <div
                    style={{ background: bgColor }}
                    className="apiDocsHome__section__popular"
                  >
                    <div className="apiDocsHome__section__popular__title">
                      {title}
                    </div>
                    <div
                      style={{ color: textColor }}
                      className="apiDocsHome__section__popular__desc"
                    >
                      {desc}
                    </div>
                  </div>
                </Grid>
              )
            )}
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ApiDocsHome;
