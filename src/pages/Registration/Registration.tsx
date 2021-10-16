import React, {FC, useEffect, useState} from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {SignUpOrLogin} from './SignUpOrLogin';
import {VerifyAccount} from './VerifyAccount';
import {CreateUsername} from './CreateUsername';
import {LoginSumraId} from './LoginSumraId';

import '../../assets/scss/registration/registration.scss';
import logo from '../../assets/images/registration/Logo.svg';

export const Registration: FC = () => {
  const [color, setColor] = useState('registration__background');
  const [burger, setBurger] = useState(false);
  const {path} = useRouteMatch();
  console.log(path);

  // eslint-disable-next-line no-unused-vars
  const backgraund = [
    'registration__background',
    'registration__background-tow',
  ];

  useEffect(() => {
    const myTimer = () => {
      console.log(color);
      setColor(
        color === 'registration__background'
          ? 'registration__background-tow'
          : 'registration__background'
      );
    };
    const time = setTimeout(myTimer, 10000);

    return () => {
      clearTimeout(time);
    };
  }, [color]);

  return (
    <div className="registration">
      <section className="registration__wrapper">
        <div className="registration__point-inner">
          <img
            className={
              !burger
                ? 'registration__logo-img-visible'
                : 'registration__logo-img'
            }
            src={logo}
            alt=""
          />
          <div
            className={
              color === 'registration__background'
                ? 'registration__straight-1-visivle'
                : 'registration__straight-1'
            }
          ></div>
          <div
            className={
              color === 'registration__background'
                ? 'registration__straight-text-visible'
                : 'registration__straight-text'
            }
          >
            Best solution for your digital money
          </div>

          <div
            className={
              color === 'registration__background-tow'
                ? 'registration__straight-text-visible'
                : 'registration__straight-text'
            }
          >
            There must be appropriate text
          </div>
          <div
            className={
              color === 'registration__background-tow'
                ? 'registration__straight-1-visivle'
                : 'registration__straight-1'
            }
          ></div>
          <div
            className={
              color === 'registration__background'
                ? 'registration__rim-visible'
                : 'registration__rim'
            }
          >
            <span className="registration__point"></span>
          </div>
          <div
            className={
              color === 'registration__background-tow'
                ? 'registration__rim-visible'
                : 'registration__rim'
            }
          >
            <span className="registration__point"></span>
          </div>
          {/* <div className="registration__rim">
            <span className="registration__point"></span>
          </div> */}
        </div>
        <div className={color}>
          <h2
            className={
              color === 'registration__background'
                ? 'registration__title-visible'
                : 'registration__title'
            }
          >
            Unlock Your
            <br /> Financial Freedom
          </h2>
          <h2
            className={
              color === 'registration__background-tow'
                ? 'registration__title-visible'
                : 'registration__title'
            }
          >
            There must be <br />
            appropriate text
          </h2>
        </div>
        <div
          className={
            burger ? 'registration__menu-visible' : 'registration__menu'
          }
        >
          <div
            onClick={() => {
              setBurger(!burger);
            }}
            id="menu-registration-btn"
            className={burger ? 'open' : 'close'}
          >
            <span className="icon"></span>
            <span className="text">Login</span>
          </div>
          <div className="registration__conain">
            <img
              className="registration__logo"
              src={logo}
              alt="logo for registration"
            />

            <div className="registration__account account">
              <Switch>
                <Route
                  path={`${path}/verify_account`}
                  component={VerifyAccount}
                />
                <Route
                  path={`${path}/create_username`}
                  component={CreateUsername}
                />
                <Route
                  path={`${path}/login_sumra_id`}
                  component={LoginSumraId}
                />
                <Route path="/" component={SignUpOrLogin} />
              </Switch>
            </div>
          </div>

          <div className="registration__menu-footer">
            <span className="registration__menu-footer-title">
              By using either Sign Up or Login you agree to our
            </span>
            <a href="">{`Terms & Privacy Policy.`}</a>
          </div>
        </div>
      </section>
    </div>
  );
};
