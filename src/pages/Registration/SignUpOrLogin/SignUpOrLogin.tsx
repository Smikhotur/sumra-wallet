import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import arrow from '../../../assets/images/registration/arrow.svg';

import telegram from '../../../assets/images/registration/Telegram.svg';
import viber from '../../../assets/images/registration/Viber.svg';
import messanger from '../../../assets/images/registration/Messanger.svg';
import whatsApp from '../../../assets/images/registration/WhatsApp.svg';
import signal from '../../../assets/images/registration/Signal.svg';
import groupme from '../../../assets/images/registration/Groupme.svg';
import line from '../../../assets/images/registration/line.svg';
import snapchat from '../../../assets/images/registration/snapchat.svg';
import msSkype from '../../../assets/images/registration/msSkype.svg';
import discord from '../../../assets/images/registration/discord.svg';

const social = [
  telegram,
  whatsApp,
  messanger,
  viber,
  signal,
  groupme,
  line,
  snapchat,
  msSkype,
  discord,
];

export const SignUpOrLogin: FC = () => {
  const [phone, setPhone] = useState('');
  const [checking, setChecking] = useState(true);

  const changePhoneNumber = (e) => {
    setPhone(e);
  };

  const checkingPhoneNumber = () => {
    if (validator.isMobilePhone(phone)) {
      setChecking(true);
    }
  };

  console.log(checking);

  return (
    <>
      <h3 className="registration__menu-title">Sign Up or Login</h3>
      <h4 className="registration__menu-subtitle">
        Start by using your Messenger
      </h4>

      <ul className="registration__social-list">
        {social.map((pic) => (
          <li key={pic} className="registration__social-item">
            <img src={pic} alt="social icon" />
          </li>
        ))}
      </ul>

      <div className="registration__line"></div>

      <h4 className="registration__menu-subtitle-two">
        Start by using your Mobile phone
      </h4>
      <div className="registration__input">
        <PhoneInput
          className="registration__input-style"
          flags={flags}
          placeholder="Enter phone number"
          value={phone}
          onChange={changePhoneNumber}
        />
        <Link
          onClick={checkingPhoneNumber}
          to={
            checking
              ? '/registration_page/verify_account'
              : '/registration_page/'
          }
          className="registration__img-arrow"
        >
          <img src={arrow} alt="" />
        </Link>
      </div>
      <div className="registration__line registration__line-margin"></div>
      <Link
        to="/registration_page/login_sumra_id"
        className="registration__btn"
      >
        Login with Sumra ID
      </Link>
    </>
  );
};
