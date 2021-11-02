import React from 'react';
import people from '../../../assets/images/contactBook/people.svg';
import step1 from '../../../assets/images/contactBook/stepOne.png';
import step2 from '../../../assets/images/contactBook/stepTwo.png';
import step3 from '../../../assets/images/contactBook/stepThree.png';
import arrow from '../../../assets/images/contactBook/arrow.svg';
import arrow1 from '../../../assets/images/contactBook/arrow1.svg';
import tip1 from '../../../assets/images/contactBook/tip1.svg';
import tip2 from '../../../assets/images/contactBook/tip2.svg';
import tip3 from '../../../assets/images/contactBook/tip3.svg';
import tip5 from '../../../assets/images/contactBook/tip5.svg';
import tip4 from '../../../assets/images/contactBook/tip4.svg';
import tip6 from '../../../assets/images/contactBook/tip6.svg';
import tip7 from '../../../assets/images/contactBook/tip7.svg';
import tip8 from '../../../assets/images/contactBook/tip8.svg';
import arrowCircle from '../../../assets/images/contactBook/arrow-circle.svg';
import { HeaderWallet } from '../HeaderWallet/HeaderWallet';

export const ContactCash = ({ config }) => {
  let pathname = window.location.pathname;
  const page =
    pathname
      .split('/')
      [pathname.split('/').length - 1].replace(/-/g, ' ')[0]
      .toUpperCase() +
    pathname
      .split('/')
      [pathname.split('/').length - 1].replace(/-/g, ' ')
      .slice(1);

  return (
    <section className="contact-book__main-content">
      <HeaderWallet page={page} allData={false} config={config} />

      <section className="contact-book__contact-cash contact-cash">
        <div className={`contact-cash__box-${config?.style}`}>
          <p className="contact-cash__text">
            Click your way, up to $300,000
            <br />
            income, by simply sharing your
            <br />
            unique referral codes.
          </p>
          <img src={people} alt="people" className="contact-cash__photo" />
        </div>
        <h3 className="contact-cash__title-steps">
          Follow these{' '}
          <span className={`contact-cash__title-steps-color-${config?.style}`}>
            Steps:
          </span>
        </h3>

        <div className="contact-cash__steps-inner">
          <div className="contact-cash__step-box">
            <div className="contact-cash__step-header">
              <h4 className={`contact-cash__step-title-${config?.style}`}>
                Step 1.
              </h4>
              <div className={`contact-cash__inner-step-img-${config?.style}`}>
                <img
                  src={step1}
                  alt="icon"
                  className="contact-cash__step-img"
                />
              </div>
              <img
                src={arrow}
                alt="icon"
                className="contact-cash__step-img-arrow"
              />
            </div>
            <p className="contact-cash__step-text">
              Actively share your unique
              <br />
              Referral codes and links.
            </p>
          </div>

          <div className="contact-cash__step-box">
            <div className="contact-cash__step-header">
              <h4 className={`contact-cash__step-title-${config?.style}`}>
                Step 2.
              </h4>
              <div className={`contact-cash__inner-step-img-${config?.style}`}>
                <img
                  src={step2}
                  alt="icon"
                  className="contact-cash__step-img"
                />
              </div>
              <img
                src={arrow1}
                alt="icon"
                className="contact-cash__step-img-arrow1"
              />
            </div>
            <p className="contact-cash__step-text">
              Remind your contacts to
              <br />
              download, join etc.
            </p>
          </div>

          <div className="contact-cash__step-box">
            <div className="contact-cash__step-header">
              <h4 className={`contact-cash__step-title-${config?.style}`}>
                Step 3.
              </h4>
              <div className={`contact-cash__inner-step-img-${config?.style}`}>
                <img
                  src={step3}
                  alt="icon"
                  className="contact-cash__step-img"
                />
              </div>
            </div>
            <p className="contact-cash__step-text">
              Share details of your Global
              <br />
              Earnings with your contacts.
            </p>
          </div>
        </div>

        <h3 className="contact-cash__title-steps">
          Fast track your income by following these{' '}
          <span className={`contact-cash__title-steps-color-${config?.style}`}>
            Steps:
          </span>
        </h3>

        <div className="contact-cash__tip-block">
          <div className="contact-cash__tip-back"></div>
          <div className="contact-cash__tip-inner">
            <div className="contact-cash__tip-box">
              <h4 className="contact-cash__tip-title">
                <span
                  className={`contact-cash__tip-title-color-${config?.style}`}
                >
                  Tip 1
                </span>
                {` Profiles & Social Media Presence`}
                <p className="contact-cash__tip-text">
                  Create social media profiles and multiple Sumra tags profiles;
                  and then promote your unique Referral codes and links.
                </p>
              </h4>
              <img
                src={tip1}
                alt="Profiles & Social Media Presence"
                className="contact-cash__tip-img"
              />
            </div>
          </div>
        </div>

        <div className="contact-cash__tip-block-white">
          <div className="contact-cash__tip-back-white"></div>
          <div className="contact-cash__tip-inner-white">
            <div className="contact-cash__tip-box-white">
              <img
                src={tip2}
                alt="Profiles & Social Media Presence"
                className="contact-cash__tip-img-white"
              />

              <h4 className="contact-cash__tip-title-white">
                <span
                  className={`contact-cash__tip-title-color-${config?.style}`}
                >
                  Tip 2
                </span>
                {` Share Your Referral Cash Bonus`}
                <div className="contact-cash__tip-text-white">
                  <p>
                    For every 1000 Referrals that you generate, we automatically{' '}
                    <strong className="contact-cash__tip-text-white-color">
                      award $5000
                    </strong>{' '}
                    cash bonus to be shared
                    <br />
                    amongst those that have used your Referral code or link.
                  </p>
                  So spread the word. Furthermore, you will personally be
                  awarded a{' '}
                  <strong className="contact-cash__tip-text-white-color">
                    cash bonus of $5000
                  </strong>{' '}
                  for every time
                  <br />
                  that you have generated each 2000th Referrals. The automatic
                  cash bonus is made after you add each
                  <br />
                  <strong className="contact-cash__tip-text-white-color">
                    2000 Referrals
                  </strong>{' '}
                  to your account.
                </div>
              </h4>
            </div>
          </div>
        </div>

        <div className="contact-cash__tip-block">
          <div className="contact-cash__tip-back"></div>
          <div className="contact-cash__tip-inner">
            <div className="contact-cash__tip-box">
              <h4 className="contact-cash__tip-title">
                <span
                  className={`contact-cash__tip-title-color-${config?.style}`}
                >
                  Tip 3
                </span>
                <span> Go, Youtube</span>
                <div className="contact-cash__tip-text">
                  <p>
                    Inform the public and train your viewers on how to help
                    themselves to our
                    <br />
                    Referrals income from their armchair and in their spare
                    time.
                  </p>

                  <p>
                    Share your code, link, knowledge and substantially increase
                    your income as
                    <br />
                    you do so.
                  </p>
                </div>
              </h4>
              <img
                src={tip3}
                alt="Profiles & Social Media Presence"
                className="contact-cash__tip-img"
              />
            </div>
          </div>
        </div>

        <div className="contact-cash__tip-block-white">
          <div className="contact-cash__tip-back-white"></div>
          <div className="contact-cash__tip-inner-white">
            <div className="contact-cash__tip-box-white">
              <img
                src={tip5}
                alt="Profiles & Social Media Presence"
                className="contact-cash__tip-img-white"
              />

              <h4 className="contact-cash__tip-title-white">
                <span
                  className={`contact-cash__tip-title-color-${config?.style}`}
                >
                  Tip 4
                </span>
                <span>{` Be a Higher Earner - Affiliance & Influence`}</span>
                <div className="contact-cash__tip-text-white">
                  <p>
                    Supercharge your Referrals income to seriously higher sums
                    of money. Go Pro or Semi-Pro by
                    <br />
                    using our Affiliate & Influence tools.
                  </p>
                  <p>
                    Set up a blog or website or an online medium or partner with
                    a website, and then obtain our
                    <br />
                    Affiliate API by contacting us. We can assist you to quickly
                    and easily install our Affiliate API.
                  </p>
                </div>
              </h4>
            </div>
          </div>
        </div>

        <div className="contact-cash__tip-block">
          <div className="contact-cash__tip-back"></div>
          <div className="contact-cash__tip-inner">
            <div className="contact-cash__tip-box">
              <h4 className="contact-cash__tip-title">
                <span
                  className={`contact-cash__tip-title-color-${config?.style}`}
                >
                  Tip 5
                </span>
                {` Review & Refer US`}
                <div className="contact-cash__tip-text">
                  <p>
                    Generate a significant supplemental income stream from
                    regularly reviewing our websites
                    <br />
                    and mobile applications platforms, our ever increasing
                    products and services across
                    <br />
                    multiple, external and different online review sites, in
                    different countries and various
                    <br />
                    online communities.
                  </p>
                  <p>
                    This regular rich stream of Referral earnings to you can
                    become a global side hustle,
                    <br />
                    expedite our multiple CashBonus payments, and could keep
                    virally increasing even while
                    <br />
                    you may be doing something else full time.
                  </p>
                  <button className={`contact-cash__tip-btn-${config?.style}`}>
                    <span>Learn more</span>
                    <img src={arrowCircle} alt="arrow" />
                  </button>
                </div>
              </h4>
              <img
                src={tip4}
                alt="Profiles & Social Media Presence"
                className="contact-cash__tip-img"
              />
            </div>
          </div>
        </div>

        <div className="contact-cash__tip-block-white">
          <div className="contact-cash__tip-back-white"></div>
          <div className="contact-cash__tip-inner-white">
            <div className="contact-cash__tip-box-white">
              <img
                src={tip6}
                alt="Profiles & Social Media Presence"
                className="contact-cash__tip-img-white"
              />

              <h4 className="contact-cash__tip-title-white">
                <span
                  className={`contact-cash__tip-title-color-${config?.style}`}
                >
                  Tip 6
                </span>
                {` Referrals Sites`}
                <div className="contact-cash__tip-text-white">
                  <p>
                    Search online for reputable dedicated referral sites and
                    list your unique Referral
                    <br />
                    codes and links.
                  </p>
                  <p>
                    Referral sites exist as a matching platform to link people
                    looking for services with
                    <br />
                    service providers.
                  </p>
                </div>
              </h4>
            </div>
          </div>
        </div>

        <div className="contact-cash__tip-block">
          <div className="contact-cash__tip-back"></div>
          <div className="contact-cash__tip-inner">
            <div className="contact-cash__tip-box">
              <h4 className="contact-cash__tip-title">
                <span
                  className={`contact-cash__tip-title-color-${config?.style}`}
                >
                  Tip 7
                </span>
                {` Google My Business `}
                <p className="contact-cash__tip-text">
                  Create a Google My Business listing.
                </p>
              </h4>
              <img
                src={tip7}
                alt="Profiles & Social Media Presence"
                className="contact-cash__tip-img"
              />
            </div>
          </div>
        </div>

        <div className="contact-cash__tip-block-white">
          <div className="contact-cash__tip-back-white"></div>
          <div className="contact-cash__tip-inner-white">
            <div className="contact-cash__tip-box-white">
              <img
                src={tip8}
                alt="Profiles & Social Media Presence"
                className="contact-cash__tip-img-white"
              />

              <h4 className="contact-cash__tip-title-white">
                <span
                  className={`contact-cash__tip-title-color-${config?.style}`}
                >
                  Tip 8
                </span>
                {` Testimonials`}
                <p className="contact-cash__tip-text-white">
                  Create, post and send messages of testimonials from Earnings.
                  Doing so allows people to see
                  <br />
                  that others have earned from your Referrals.
                </p>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
