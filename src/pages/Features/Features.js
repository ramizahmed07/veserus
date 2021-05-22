import React, { useEffect, useState, Fragment } from "react";

import CoverImage from "../../assets/images/features-cover.png";
import SquareBox from "../../assets/images/square-box.png";
import HalfSteps from "../../assets/images/half-steps.png";
import Steps from "../../assets/images/steps.png";
import SearchIcon from "../../assets/images/search-icon.png";
import OrderImage from "../../assets/images/order.png";
import VeserusUI from "../../assets/images/features-veserus-ui.png";
import Exchange from "../../assets/images/exchange.png";
import BankCard from "../../assets/images/bank-card.png";
import "./features.scss";
import { UseSmoothScroll } from "../../hooks";

const Features = () => {
  const [mQuery, setMQuery] = useState(
    window.innerWidth <= 1024 ? true : false
  );

  const [mobile, setMobile] = useState(window.innerWidth <= 767 ? true : false);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 1300px)");
    let mobile = window.matchMedia("(max-width: 767px)");
    mediaQuery.addEventListener("change", handleMQuery);
    mobile.addEventListener("change", handleMobile);
    // this is the cleanup function to remove the listener
    return () => {
      mediaQuery.removeEventListener("change", handleMQuery);
      mobile.removeEventListener("change", handleMobile);
    };
  }, []);

  const handleMQuery = () =>
    setMQuery(window.innerWidth <= 1300 ? true : false);

  const handleMobile = () => setMobile(window.innerWidth <= 767 ? true : false);
  console.log({ mobile, mQuery });
  return (
    <UseSmoothScroll>
      <div className="features">
        <div className="features__cover">
          <img src={CoverImage} alt="cover" />
        </div>
        <div className="features__titles">
          <div className="features__titles__mainTitle">
            Veserus is All You Need to <br />
            Access Everything
          </div>
          <div className="features__titles__subTitle">
            {!mQuery
              ? "Access everything you need in the cryptocurrency world with the Veserus wallet feature."
              : "Access everything you need in the cryptocurrency world with the Veserus wallet feature. Transfer money, or start getting paid in 3 steps."}
          </div>
          <div className="features__titles__createAccountBtn">
            Create an account now
          </div>
        </div>
        <div className="features__content">
          <div className="features__content__stepsContainer">
            <div className="features__content__steps">
              <div className="features__content__steps__title">
                <span>Wallet.</span> Organize your payments in 3 steps
              </div>
              <div className="features__content__steps__stepContainer">
                <div className="features__content__steps__step">
                  <img src={SquareBox} alt="icon" />
                  <div className="features__content__steps__step__title">
                    Don't get behind in your work
                  </div>
                  <div className="features__content__steps__step__desc">
                    Veserus is the best choice not only for users but also for
                    businesses. Thanks to its innovative design, invoicing
                    processes are much easier and faster than ever before. All
                    you need to do is look through “latest transactions” menu.
                  </div>
                </div>
                <div className="features__content__steps__step">
                  <img src={SearchIcon} alt="icon" />
                  <div className="features__content__steps__step__title">
                    Send money easier than a message
                  </div>
                  <div className="features__content__steps__step__desc">
                    When you want to send money from your account, all you need
                    to do is specify the address and amount of the wallet you
                    want to send. For a store using the Veserus widget, just
                    click the "Pay" button. Your money has been sent, check out
                    the last transactions menu!
                  </div>
                </div>
              </div>

              <div className="features__content__steps__footer">
                <div className="features__content__steps__step">
                  <img src={SearchIcon} alt="icon" />
                  <div className="features__content__steps__step__title">
                    Send money easier than <br />a message
                  </div>
                  <div className="features__content__steps__step__desc">
                    When you want to send money from your account, all you need
                    to do is specify the address and amount of the wallet you
                    want to send. For a store using the Veserus widget, just
                    click the "Pay" button. Your money has been sent, check out
                    the last transactions menu!
                  </div>
                </div>
                <img
                  className="features__content__steps__footer__cover"
                  src={Steps}
                  alt="cover"
                />
              </div>
              <img
                className="features__content__steps__cover"
                src={HalfSteps}
                alt="step-cover"
              />
            </div>
          </div>
          <div className="features__content__transfers">
            <div>
              <div className="features__content__transfers__title">
                {!mQuery ? (
                  <Fragment>
                    Instant <span>Transfers.</span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span>Sending money</span> is easier than sending messages
                  </Fragment>
                )}
              </div>
              <div className="features__content__transfers__desc">
                {!mQuery ? (
                  `
                  Instant transfers allow you to send money from Veserus to a
                  wallet address, typically within minute. Instant transfers can
                  be made 24 hours a day, 365 days a year regardless of holiday or
                  weekend schedules.`
                ) : mobile ? (
                  <span>
                    When you want to send money from your account, all you need
                    to do is specify the address and amount of the wallet you
                    want to send.
                    <br />
                    <br />
                    For a store using the Veserus widget, just click the "Pay"
                    button. Your money has been sent, check out the last
                    transactions menu!
                  </span>
                ) : (
                  `
                  When you want to send money from your account, all you
need to do is specify the address and amount of the wallet you
want to send. For a store using the Veserus widget, just
click the "Pay" button. Your money has been sent, check out
the last transactions menu!`
                )}
              </div>
            </div>
            <div className="features__content__transfers__orderImg">
              <img src={OrderImage} alt="order" />
            </div>
          </div>
          <div className="features__content__blockchain">
            <div className="features__content__blockchain__info">
              <div className="features__content__blockchain__info__title">
                Embrace what the <span>blockchain world brings</span>.
              </div>
              <div className="features__content__blockchain__info__desc">
                {!mQuery ? (
                  <Fragment>
                    We are proud to be able to integrate with all applications
                    in the blockchain world. We are at the center of this
                    revolution in digital payments! Thanks to the Veserus Widget
                    feature, we bring breath new life into the cryptocurrency
                    world and solve big problems with simple ideas.
                  </Fragment>
                ) : (
                  <Fragment>
                    We are proud to be able to integrate with all applications
                    in the blockchain world. We are at the center of this
                    revolution in digital payments!
                    <br />
                    <br />
                    Thanks to the Veserus Widget feature, we bring breath new
                    life into the cryptocurrency world and solve big problems
                    with simple ideas.
                  </Fragment>
                )}
              </div>
            </div>

            <img src={VeserusUI} alt="blockchain" />
          </div>
          <div className="features__content__platform">
            <div className="features__content__platform__title">
              A <span>real</span> trading platform
            </div>
            <div className="features__content__platform__desc">
              Thanks to Veserus's revolutionary exchange interface, it is very
              easy to follow the latest price movements in the cryptocurrency
              world and to make purchases and sales. Buy or sell. It's all that
              simple! Moreover; the limit, stop limit and other orders are also
              included. No hidden costs, everything is completely transparent.
            </div>
            <img src={Exchange} alt="exchange" />
          </div>
          <div className="features__content__bank">
            <div className="features__content__bank__left">
              <div className="features__content__bank__left__tag">
                COMING SOON
              </div>
              <div className="features__content__bank__left__title">
                {!mQuery ? (
                  <Fragment>
                    <span>Veserus.bank</span> - Very Soon.
                  </Fragment>
                ) : mobile ? (
                  <Fragment>
                    Very soon – <span>Veserus bank</span> 2021.
                  </Fragment>
                ) : (
                  <Fragment>
                    Very soon – <span>Veserus bank</span>
                    <br />
                    2021.
                  </Fragment>
                )}
              </div>
              <div className="features__content__bank__left__desc">
                In a very short time, Veserus will be the tool for you to
                transfer what the cryptocurrency world brings from the digital
                environment to the physical world.
                <br />
                <br />
                {!mQuery ? (
                  <Fragment>This project will make your life easier.</Fragment>
                ) : (
                  <Fragment>
                    This project that we integrate the crypto money world with
                    your daily life will be good for everyone.
                  </Fragment>
                )}
              </div>
            </div>
            <div className="features__content__bank__right">
              <img src={BankCard} alt="card" />
            </div>
          </div>
          <div className="features__content__contact">
            <div className="features__content__contact__inner">
              <div className="features__content__contact__left">
                <div className="features__content__contact__left__title">
                  Ready to jump in?
                </div>
                <div className="features__content__contact__left__desc">
                  No worries, We’he help to help you at every stafe of your
                  journey.
                </div>
              </div>
              <div className="features__content__contact__right">
                <input
                  type="text"
                  placeholder={
                    mobile
                      ? "Type e-mail address..."
                      : "Type in your e-mail address..."
                  }
                />
                <div>{mobile ? "Go" : "Get started"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UseSmoothScroll>
  );
};

export default Features;
