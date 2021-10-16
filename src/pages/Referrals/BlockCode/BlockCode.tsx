import React, {FC, useEffect, useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import '../../../assets/scss/referrals/codeBlock.scss';
import persCode from '../../../assets/images/referrals/persCode.svg';
import link from '../../../assets/images/referrals/link.svg';
import generate from '../../../assets/images/referrals/generate.svg';
import codeBtn from '../../../assets/images/referrals/codeBtn.svg';

import sumrachat from '../../../assets/images/contactBook/sumrachat.svg';
import sumrameet from '../../../assets/images/contactBook/sumrameet.svg';
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
import frame1 from '../../../assets/images/contactBook/frame1.svg';
import frame2 from '../../../assets/images/contactBook/frame2.svg';
import frame6 from '../../../assets/images/contactBook/frame6.svg';
import frame3 from '../../../assets/images/contactBook/frame3.svg';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

const icons = [
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
  frame6,
  frame3,
];

import {actions} from '../../../store/referrals/action';

export const BlockCod: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [copy, setCopy] = useState(false);
  const [visibleSmsCode, setVisibleSmsCode] = useState(false);
  const [visibleSmsLink, setVisibleSmsLink] = useState(false);
  const [visibleMassage, setVisibleMassage] = useState(false);
  const dispatch = useDispatch();
  const listCodes = useSelector(
    (state: RootStateOrAny) => state.referralReducer.referralCodes
  );
  const referralCode = useSelector(
    (state: RootStateOrAny) => state.referralReducer.referralCode
  );
  const message = useSelector(
    (state: RootStateOrAny) => state.referralReducer.referralCode
  );

  console.log(referralCode);

  const isCopy = ({currentTarget: {name}}) => {
    if (name === 'code') {
      setVisibleSmsCode(true);
      setTimeout(() => {
        setVisibleSmsCode(false);
      }, 2000);
    }

    if (name === 'link') {
      setVisibleSmsLink(true);
      setTimeout(() => {
        setVisibleSmsLink(false);
      }, 2000);
    }
  };

  const createCode = () => {
    dispatch(actions.postReferrals('web.sumra.wallet'));
  };

  useEffect(() => {
    if (message.status === 'warning') {
      setVisibleMassage(true);

      setTimeout(() => {
        setVisibleMassage(false);
      }, 2000);
    }
  }, [message]);

  return (
    <div className="referrals-page__code-block code-block">
      <h3 className="code-block__title">{`Your referral link & code`}</h3>
      <div className="code-block__form-code">
        <div className="code-block__label">
          <span className="code-block__span-title">Referral code</span>
          <CopyToClipboard
            text={referralCode.code}
            onCopy={() => setCopy(true)}
          >
            <div className="code-block__create-code">
              {visibleSmsCode && (
                <div className="code-block__copy-text">
                  Сopied to the clipboard
                </div>
              )}
              <img src={persCode} alt="" />
              {listCodes.length > 0 && listCodes !== undefined
                ? referralCode.code
                : ''}
              <button
                name="code"
                onClick={isCopy}
                className="code-block__btn-code"
                id="code"
                type="button"
              >
                <img src={codeBtn} alt="" />
              </button>
            </div>
          </CopyToClipboard>
          <button
            type="button"
            onClick={createCode}
            className="code-block__btn-generate"
          >
            <img src={generate} alt="" />
            Generate new code
          </button>
          <div
            className={
              visibleMassage
                ? 'code-block__massage-visible'
                : 'code-block__massage'
            }
          >
            <span>You can create a code no more than 10 times</span>
          </div>
        </div>
        <div className="code-block__label">
          <span className="code-block__span-title">Referral link</span>
          <div className="code-block__create-link-text-inner">
            <div className="code-block__create-link">
              {visibleSmsLink && (
                <div className="code-block__copy-text">
                  Сopied to the clipboard
                </div>
              )}
              <img src={link} alt="" />
              <div className="code-block__create-link-text">
                {listCodes.length > 0 && listCodes !== undefined
                  ? referralCode.link
                  : ''}
              </div>
              <CopyToClipboard
                text={
                  listCodes.length > 0 && listCodes !== undefined
                    ? referralCode.link
                    : ''
                }
                onCopy={() => setCopy(true)}
              >
                <button
                  name="link"
                  onClick={isCopy}
                  className="code-block__btn-code-link"
                  type="button"
                >
                  <img src={codeBtn} alt="" />
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="code-block__block-social">
            <div className="code-block__social-title">Share on/via</div>
            <div className="code-block__inner-social">
              <ul className="code-block__list-social">
                {icons.map((icon, index) => (
                  <li className="code-block__item-social" key={index}>
                    <img
                      className="code-block__item-social"
                      src={icon}
                      alt=""
                    />{' '}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
