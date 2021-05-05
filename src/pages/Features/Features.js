import React from "react";

import CoverImage from "../../assets/images/features-cover.png";
import SquareBox from "../../assets/images/square-box.png";
import HalfSteps from "../../assets/images/half-steps.png";
import SearchIcon from "../../assets/images/search-icon.png";
import "./features.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="features__cover">
        <img src={CoverImage} alt="cover" />
      </div>
      <div style={{ height: 500 }} className="features__titles">
        <div className="features__titles__mainTitle">
          Veserus is All You Need to <br />
          Access Everything
        </div>
        <div className="features__titles__subTitle">
          Access everything you need in the cryptocurrency world with the
          Veserus wallet feature.
        </div>
        <div className="features__titles__createAccountBtn">
          Create an account now
        </div>
      </div>
      <div className="features__content">
        <div className="features__content__steps">
          <div className="features__content__steps__title">
            <span>Wallet.</span> Organize your payments in 3 steps
          </div>
          <div className="features__content__steps__step">
            <img src={SquareBox} alt="icon" />
            <div className="features__content__steps__step__title">
              Don't get behind in your work
            </div>
            <div className="features__content__steps__step__desc">
              Veserus is the best choice not only for users but also for
              businesses. Thanks to its innovative design, invoicing processes
              are much easier and faster than ever before. All you need to do is
              look through “latest transactions” menu.
            </div>
          </div>

          <div class="features__content__steps__footer">
            <div className="features__content__steps__step">
              <img src={SearchIcon} alt="icon" />
              <div className="features__content__steps__step__title">
                Send money easier than <br />a message
              </div>
              <div className="features__content__steps__step__desc">
                When you want to send money from your account, all you need to
                do is specify the address and amount of the wallet you want to
                send. For a store using the Veserus widget, just click the "Pay"
                button. Your money has been sent, check out the last
                transactions menu!
              </div>
            </div>
          </div>
          <img
            className="features__content__steps__cover"
            src={HalfSteps}
            alt="step-cover"
          />
        </div>
        <div>
          Veserus is the best choice not only for users but also for businesses.
          Thanks to its innovative design, invoicing processes are much easier
          and faster than ever before. All you need to do is look through
          “latest transactions” menu. Veserus is the best choice not only for
          users but also for businesses. Thanks to its innovative design,
          invoicing processes are much easier and faster than ever before. All
          you need to do is look through “latest transactions” menu. Veserus is
          the best choice not only for users but also for businesses. Thanks to
          its innovative design, invoicing processes are much easier and faster
          than ever before. All you need to do is look through “latest
          transactions” menu. Veserus is the best choice not only for users but
          also for businesses. Thanks to its innovative design, invoicing
          processes are much easier and faster than ever before. All you need to
          do is look through “latest transactions” menu. Veserus is the best
          choice not only for users but also for businesses. Thanks to its
          innovative design, invoicing processes are much easier and faster than
          ever before. All you need to do is look through “latest transactions”
          menu. Veserus is the best choice not only for users but also for
          businesses. Thanks to its innovative design, invoicing processes are
          much easier and faster than ever before. All you need to do is look
          through “latest transactions” menu. Veserus is the best choice not
          only for users but also for businesses. Thanks to its innovative
          design, invoicing processes are much easier and faster than ever
          before. All you need to do is look through “latest transactions” menu.
        </div>
      </div>
    </div>
  );
};

export default Features;
