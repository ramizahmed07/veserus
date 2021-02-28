import React from "react";
import Layout from "../../layout";
import AboutCover from "../../assets/images/aboutCover.png";
import BackArrow from "../../assets/images/backArrow.png";
import "./aboutUs.scss";
import Tabs from "../../components/Tabs";

const ABOUT_TABS = [
  { title: "About", path: "/about" },
  { title: "Careers", path: "/careers" },
  { title: "Mission", path: "/mission" },
  { title: "Press", path: "/press" },
];

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs__cover">
        <img className="aboutUs__cover__img" src={AboutCover} alt="cover" />
      </div>
      <div className="aboutUs__content">
        <div className="aboutUs__content__title">
          <img src={BackArrow} alt="back" />
          <div>About us</div>
        </div>
        <div className="aboutUs__content__tabs">
          <Tabs tabs={ABOUT_TABS} />
        </div>
        <div className="aboutUs__content__paragraphs">
          <div className="aboutUs__content__paragraphs__pr--top">
            Your better-than-a-bank payment processor and direct debit provider.
            We help you integrate processors, and get paid faster.
          </div>
          <div className="aboutUs__content__paragraphs__pr">
            <div>What Sets Veserus Apart</div>
            <p>
              For merchants and developers who want to integrate a
              cryptocurrency payment processor, Veserus is your
              better-than-a-bank option. We are built for digital devices from
              the ground-up. We make it possible for clients to build custom
              integrations with our API or use prebuilt integrations to connect
              to existing software.
            </p>
            <p>
              With our assistance, your online store can be fully customized.
              Add sales channels in a matter of moments and wrap up orders with
              only one step. It's up to you how your account gets funded and
              where your withdrawals should go.
            </p>
            <p>
              We make it possible for you to add one of Europe's top payment
              methods to check out and take advantage of those who wish to pay
              with this function. Start today.
            </p>
          </div>
          <div className="aboutUs__content__paragraphs__pr">
            <div>Who We Are</div>
            <p>
              We provide payment processor functions for cryptocurrencies, with
              28+ in-app currencies that can be used.
            </p>
            <p>
              Veserus was founded in 2017, launching from Estonia. Customers use
              us for both personal and business financing. Currently, 35
              countries are supported by Veserus.
            </p>
          </div>
          <div className="aboutUs__content__paragraphs__pr">
            <div>Get in Touch</div>
            <p>
              Please reach out to get in touch with us. We are happy to answer
              questions and provide consultation regarding integrating the
              processor into your website. Enhance your brand with the option
              for cryptocurrency at check out.
            </p>
          </div>
          <div className="aboutUs__content__paragraphs__contacts">
            <div className="aboutUs__content__paragraphs__contacts__contact">
              <p className="aboutUs__content__paragraphs__contacts__contact__title">
                Contacts
              </p>
              <div className="aboutUs__content__paragraphs__contacts__contact__emails">
                <p>
                  Email: contact@veserus.com <br />
                  Email 2: business@veserus.com
                </p>
              </div>
            </div>
            <div className="aboutUs__content__paragraphs__contacts__contact">
              <p className="aboutUs__content__paragraphs__contacts__contact__title">
                Physical Address:
              </p>
              <div className="aboutUs__content__paragraphs__contacts__contact__emails">
                <p>
                  Harju maakond, Tallinn,
                  <br />
                  Lasnamäe linnaosa, Punane
                  <br />
                  tn 56, 13619
                </p>
              </div>
            </div>
          </div>
          <div className="aboutUs__content__paragraphs__pr">
            <div>Work with Veserus</div>
            <p>
              Do you want to add cryptocurrency options to your e-commerce
              site's checkout? Get in touch with us to set up our payment
              processor on your site.
            </p>

            <p>
              When you work with us, you have a simple solution for integrating
              direct debit, embedding cryptocurrencies payment options, and
              reducing failure rates caused by lost or expired cards to 0.5%.
              Build up your business and your brand with Veserus.
            </p>

            <p>
              Veserus is ready to work with you. Reach out today at [Insert
              preferred contact]!
            </p>
          </div>
          <button className="aboutUs__content__paragraphs__contactBtn">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
