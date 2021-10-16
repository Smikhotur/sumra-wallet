/* eslint-disable no-unused-vars */
import React, {FC, useState} from 'react';
import total from '../../../assets/images/cashbacks/total.svg';
import sum from '../../../assets/images/cashbacks/sum.svg';
import bronze from '../../../assets/images/memberships/bronze.png';
import silver from '../../../assets/images/memberships/silver.png';
import gold from '../../../assets/images/memberships/gold.png';
import medal from '../../../assets/images/memberships/Medal.svg';

import perc from '../../../assets/images/cashbacks/perc.svg';
import '../../../assets/scss/cashbacks/cashbacks.scss';
import '../../../assets/scss/GlobalEarningsMain/GlobalEarningsMain.scss';

import facebook from '../../../assets/images/contactBook/facebook.svg';
import instagram from '../../../assets/images/contactBook/instagram.svg';
import linkedin from '../../../assets/images/contactBook/in.svg';
import twitter from '../../../assets/images/contactBook/twitter.svg';
import pinterest from '../../../assets/images/contactBook/pinterest.svg';
import discord from '../../../assets/images/contactBook/discord.svg';
import youtube from '../../../assets/images/contactBook/youtube.svg';
import zoom from '../../../assets/images/contactBook/zoom.svg';
import tiktok from '../../../assets/images/contactBook/tiktok.svg';
import twinch from '../../../assets/images/contactBook/twinch.svg';

import telegram from '../../../assets/images/contactBook/telegram.svg';
import whatsapp from '../../../assets/images/contactBook/whatsapp.svg';
import messanger from '../../../assets/images/contactBook/messanger.svg';
import viber from '../../../assets/images/contactBook/viber.svg';
import signal from '../../../assets/images/contactBook/signal.svg';
import snapchat from '../../../assets/images/contactBook/snapchat.svg';
import meet from '../../../assets/images/contactBook/meet.svg';
import skype from '../../../assets/images/contactBook/skype.svg';
import line from '../../../assets/images/contactBook/line.svg';
import groupMe from '../../../assets/images/contactBook/group-me.svg';

import sumrachat from '../../../assets/images/contactBook/sumrachat.svg';

import sumrameet from '../../../assets/images/contactBook/sumrameet.svg';

import phone from '../../../assets/images/contactBook/phone.svg';

import frame1 from '../../../assets/images/contactBook/frame1.svg';
import frame2 from '../../../assets/images/contactBook/frame2.svg';
import frame3 from '../../../assets/images/contactBook/frame3.svg';
import frame4 from '../../../assets/images/contactBook/frame4.svg';
import frame5 from '../../../assets/images/contactBook/frame5.svg';
import frame6 from '../../../assets/images/contactBook/frame6.svg';
import frame7 from '../../../assets/images/contactBook/frame7.svg';

const icons = [
  facebook,
  instagram,
  linkedin,
  twitter,
  pinterest,
  discord,
  youtube,
  zoom,
  tiktok,
  twinch,
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  phone,
  sumrameet,
  sumrachat,
  telegram,
  whatsapp,
  messanger,
  viber,
  signal,
  snapchat,
  meet,
  skype,
  line,
  groupMe,
];

import {Link, useRouteMatch} from 'react-router-dom';
import {useSelector, RootStateOrAny} from 'react-redux';
import CashbacksChart from '../../../components/chartjs/Cashbacks';

export const CashbacksInformation: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showUsers, setShowUsers] = useState(10);
  const [sortUsers, setSortUsers] = useState(icons);
  const indexOfLastUsers = currentPage * showUsers;
  const indexOfFirstUsers = indexOfLastUsers - showUsers;
  const currentUsers = sortUsers.slice(indexOfFirstUsers, indexOfLastUsers);
  const match = useRouteMatch();
  const nameBronzeBtn = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.nameBronzeBtn
  );

  const showPercentage = () => {
    if (nameBronzeBtn === 'Basic' || nameBronzeBtn === 'Bronze') {
      return '8';
    }

    if (nameBronzeBtn === 'Silver') {
      return '9';
    }

    if (nameBronzeBtn === 'Gold') {
      return '10';
    }
  };

  const getMedal = () => {
    if (nameBronzeBtn === 'Bronze') {
      return bronze;
    }
    if (nameBronzeBtn === 'Silver') {
      return silver;
    }
    if (nameBronzeBtn === 'Gold') {
      return gold;
    }

    return medal;
  };

  return (
    <section className="page-content__cashbacks-page cashbacks-page">
      <div className="cashbacks-page__wrapper">
        <div className="cashbacks-page__inner">
          <div className="cashbacks-page__box-1">
            <div className="cashbacks-page__title-inner">
              <h3 className="cashbacks-page__box-title">Your cashbacks</h3>
            </div>
            <img
              src={total}
              alt="Total"
              className="cashbacks-page__box-img-total"
            />
            <p className="cashbacks-page__box-text">Income this month</p>
            <img src={sum} alt="" className="cashbacks-page__box-img" />
          </div>
          <div className="cashbacks-page__box-2">
            <div className="cashbacks-page__title-inner">
              <h3 className="cashbacks-page__box-2-title">Benefits</h3>
            </div>
            <div>
              <div className="cashbacks-page__box-2-inner">
                <div className="cashbacks-page__img-inner">
                  {nameBronzeBtn === 'Basic' ? (
                    <img
                      src={medal}
                      alt="bronze"
                      className="cashbacks-page__medal-img"
                    />
                  ) : (
                    <img
                      width="25px"
                      src={getMedal()}
                      alt="bronze"
                      className="cashbacks-page__box-2-img"
                    />
                  )}
                </div>

                <div className="cashbacks-page__box-2-wrap">
                  <p className="cashbacks-page__box-2-text">
                    Your current plan
                  </p>
                  <div className="cashbacks-page__box-2-pers">
                    {nameBronzeBtn}
                  </div>
                </div>
              </div>
              <div className="cashbacks-page__box-2-inner">
                <img
                  src={perc}
                  alt="percent"
                  className="cashbacks-page__box-2-img"
                />
                <div className="cashbacks-page__box-2-wrap">
                  <p className="cashbacks-page__box-2-text">Your cashback</p>
                  <div className="cashbacks-page__box-2-pers">
                    {`${showPercentage()}%`}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/pioneer_memberships"
              type="button"
              className="cashbacks-page__box-2-btn"
            >
              Upgrade plan
            </Link>
          </div>
        </div>
        <div className="cashbacks-page__inner-2-scroll">
          <div className="cashbacks-page__inner-2">
            <div className="global-earnings-main__select-block">
              <h3 className="global-earnings-main__select-title">
                Cashbacks by date
              </h3>
              <select className="global-earnings-main__select" name="" id="">
                <option value="">View by this year</option>
              </select>
            </div>
            <CashbacksChart />
          </div>
        </div>
      </div>
      <div className="cashbacks-page__box-share">
        <div className="cashbacks-page__span-title">Share by</div>
        <div className="cashbacks-page__block-socials">
          {currentUsers.map((icon) => (
            <img
              className="cashbacks-page__socials-img"
              key={icon}
              src={icon}
              alt={icon}
            />
          ))}
        </div>
        <Link
          to={{pathname: match.url, search: '?share-cashbacks=true'}}
          className="cashbacks-page__btn-socials"
        >
          +20 other
        </Link>
      </div>
    </section>
  );
};
