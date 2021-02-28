import React, { useState, useEffect } from "react";
import DropdownArrow from "../../assets/images/dropdown-arrow.png";
// import getUnicodeFlagIcon from "country-flag-icons/unicode";
// import Flags from "country-flag-icons/react/3x2";
import * as images from "round-flags";

import ContactCover from "../../assets/images/contactCover.png";
import BackArrowDark from "../../assets/images/backArrowDark.png";
import "./contact.scss";
import { createMuiTheme, TextField, ThemeProvider } from "@material-ui/core";
import { countries } from "../../constants";

const customTheme = createMuiTheme({
  overrides: {
    MuiInput: {
      input: {
        "&::placeholder": {
          fontSize: 16,
          color: "#686E7C",
          opacity: 1,
          fontFamily: "Circular Std",
          "@media (min-width: 768px) and (max-width: 1024px)": {
            fontSize: 15,
          },
          "@media (max-width: 767px)": {
            fontSize: 14,
          },
        },
        // opacity: 0.3;
        paddingBottom: 18,
        fontSize: 20,
        color: "#11253E",
        borderColor: "black",
        fontFamily: "Circular Std",
        "@media (min-width: 768px) and (max-width: 1024px)": {
          paddingBottom: 14,
          fontSize: 18,
        },
        "@media (max-width: 767px)": {
          paddingBottom: 10,
          fontSize: 16,
        },
      },
    },
  },
});

const Contact = () => {
  const [country, setCountry] = useState({
    name: "United States",
    dial_code: "+1",
    code: "US",
  });
  const [mQuery, setMQuery] = useState(window.innerWidth <= 767 ? true : false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 767px)");
    mediaQuery.addEventListener("change", handleMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", handleMQuery);
  }, []);

  const handleMQuery = () => setMQuery(window.innerWidth <= 767 ? true : false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownVisible((prev) => !prev);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div onClick={() => setDropdownVisible(false)} className="contactUs">
        <div className="contactUs__cover">
          <img
            className="contactUs__cover__img"
            src={ContactCover}
            alt="cover"
          />
        </div>
        <div className="contactUs__content">
          <div className="contactUs__content__title">
            <div className="contactUs__content__title__content">
              <img src={BackArrowDark} alt="back" />
              <div>Contact us</div>
            </div>
            <p>If you have any questions, please contact us.</p>
          </div>
          <div className="contactUs__content__paragraphs">
            <p className="contactUs__content__paragraphs__desc">
              Veserus is always with you. No matter what it is about, if you
              think that you need help, get in touch with us via filling the
              contact form below. Also, browsing our support center to see if
              the answer to your question is there can speed up the process.
            </p>

            <div className="contactUs__content__form">
              <div className="contactUs__content__form__fields">
                <div className="contactUs__content__form__fields__row">
                  <TextField
                    className="contactUs__content__form__fields__row__field contactUs__content__form__fields__row__field--half"
                    placeholder="First name *"
                  />
                  <TextField
                    className="contactUs__content__form__fields__row__field contactUs__content__form__fields__row__field--half"
                    placeholder="Last name *"
                  />
                </div>
                <div className="contactUs__content__form__fields__row">
                  <TextField
                    className="contactUs__content__form__fields__row__field"
                    type="email"
                    placeholder="Email"
                  />
                </div>{" "}
                <div className="contactUs__content__form__fields__row">
                  <TextField
                    className="contactUs__content__form__fields__row__field"
                    type="phone"
                    placeholder="Phone"
                  />
                  <div
                    onClick={toggleDropdown}
                    className="contactUs__content__form__fields__row__countries"
                  >
                    <span>{country?.dial_code}</span>
                    <img
                      className="contactUs__content__form__fields__row__countries__flag"
                      src={images[country?.code]}
                      alt=""
                    />
                    <img src={DropdownArrow} alt="arrow" />
                  </div>
                  {dropdownVisible ? (
                    <div className="contactUs__content__form__fields__row__list">
                      {countries.map(({ name, dial_code, code }) => (
                        <div
                          onClick={() => setCountry({ name, dial_code, code })}
                          className="contactUs__content__form__fields__row__list__item"
                          key={code}
                        >
                          <img
                            className="contactUs__content__form__fields__row__list__item__flag"
                            src={images[code]}
                            alt=""
                          />
                          <span className="contactUs__content__form__fields__row__list__item__name">
                            {name}
                          </span>
                          <span className="contactUs__content__form__fields__row__list__item__code">{`(${dial_code})`}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div className="contactUs__content__form__fields__row">
                  <TextField
                    className="contactUs__content__form__fields__row__field"
                    placeholder="Company name"
                  />
                </div>
                <div className="contactUs__content__form__fields__row">
                  <TextField
                    className="contactUs__content__form__fields__row__field contactUs__content__form__fields__row__field--multiline"
                    placeholder="Your question"
                    multiline={!mQuery}
                    rows={5}
                  />
                </div>
                <div className="contactUs__content__form__fields__row contactUs__content__form__fields__row--btn">
                  <div className="contactUs__content__form__fields__row__button">
                    Send message
                  </div>
                </div>
              </div>
              <div className="contactUs__content__form__sidebar">
                <div className="contactUs__content__form__sidebar__title">
                  In the bay area?
                </div>
                <div className="contactUs__content__form__sidebar__desc">
                  Harju maakond, Tallinn, Lasnamäe linnaosa, Punane tn 56, 13619
                </div>
                <div className="contactUs__content__form__sidebar__title">
                  Support Hours
                </div>
                <div className="contactUs__content__form__sidebar__desc">
                  Monday — Saturday
                  <br />
                  11am — 7pm
                  <br />
                  Sunday
                  <br />
                  12pm — 6pm
                </div>
                <div className="contactUs__content__form__sidebar__title">
                  Support
                </div>
                <div className="contactUs__content__form__sidebar__desc">
                  contact@veserus.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Contact;
