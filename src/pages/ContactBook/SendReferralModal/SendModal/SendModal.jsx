import React, {useState} from 'react';
import Modal from '../../../../modal';
import Close from '../../../../assets/images/wallets/close.png';
import {useHistory} from 'react-router';
import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';
import {Link, useRouteMatch} from 'react-router-dom';
import '../../../../assets/scss/contactBook/send.scss';
import classNames from 'classnames';

import facebook from '../../../../assets/images/contactBook/facebook.svg';
import instagram from '../../../../assets/images/contactBook/instagram.svg';
import linkedin from '../../../../assets/images/contactBook/in.svg';
import twitter from '../../../../assets/images/contactBook/twitter.svg';
import pinterest from '../../../../assets/images/contactBook/pinterest.svg';
import discord from '../../../../assets/images/contactBook/discord.svg';
import youtube from '../../../../assets/images/contactBook/youtube.svg';
import zoom from '../../../../assets/images/contactBook/zoom.svg';
import tiktok from '../../../../assets/images/contactBook/tiktok.svg';
import twinch from '../../../../assets/images/contactBook/twinch.svg';

import telegram from '../../../../assets/images/contactBook/telegram.svg';
import whatsapp from '../../../../assets/images/contactBook/whatsapp.svg';
import messanger from '../../../../assets/images/contactBook/messanger.svg';
import viber from '../../../../assets/images/contactBook/viber.svg';
import signal from '../../../../assets/images/contactBook/signal.svg';
import snapchat from '../../../../assets/images/contactBook/snapchat.svg';
import meet from '../../../../assets/images/contactBook/meet.svg';
import skype from '../../../../assets/images/contactBook/skype.svg';
import line from '../../../../assets/images/contactBook/line.svg';
import groupMe from '../../../../assets/images/contactBook/group-me.svg';

import sumrachat from '../../../../assets/images/contactBook/sumrachat.svg';

import sumrameet from '../../../../assets/images/contactBook/sumrameet.svg';

import phone from '../../../../assets/images/contactBook/phone.svg';

import frame1 from '../../../../assets/images/contactBook/frame1.svg';
import frame2 from '../../../../assets/images/contactBook/frame2.svg';
import frame3 from '../../../../assets/images/contactBook/frame3.svg';
import frame4 from '../../../../assets/images/contactBook/frame4.svg';
import frame5 from '../../../../assets/images/contactBook/frame5.svg';
import frame6 from '../../../../assets/images/contactBook/frame6.svg';
import frame7 from '../../../../assets/images/contactBook/frame7.svg';
import mark from '../../../../assets/images/contactBook/mark.svg';
import {actions} from '../../../../store/contactBook/actions';

const icons = [
  {email: [frame1, frame2, frame3, frame4, frame5, frame6, frame7]},
  {phone: [phone]},
  {sumrameet: [sumrameet]},
  {sumrachat: [sumrachat]},
  {
    messenger: [
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
    ],
  },
  {
    social: [
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
    ],
  },
];

export const SendModal = ({onClick}) => {
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const sendLetter = useSelector(
    (state) => state.reducerContactBook.sendLetter
  );
  // eslint-disable-next-line no-unused-vars
  const download = useSelector(
    (state) => state.reducerContactBook.download
  );
  // eslint-disable-next-line no-unused-vars
  const match = useRouteMatch();
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [stopInterval, setStopInterval] = useState(0);
  let intervalId;
  let count = 0;
  const dispatch = useDispatch();

  const filterIcon = icons.find((icon) => {
    if (sendLetter in icon) {
      return icon[sendLetter].map((ico) => {
        return ico;
      });
    }
  });

  const startDownload = () => {
    intervalId = setInterval(addNumber, 100);
  };

  const addNumber = () => {
    count++;
    if (count === 100) {
      clearInterval(intervalId);
    }
    dispatch(actions.dovnloadSend(count));
    setStopInterval(count);
  };

  return params.get('send-letter') ? (
    <Modal onClick={onClick}>
      <section className="contact-book__send-modal send-modal">
        <div className="send-modal__inner">
          <div className="send-modal__block-header">
            <h2 className="send-modal__title">Send referrals</h2>
            <img
              className="send-modal__img-close"
              src={Close}
              alt="Close modal"
              onClick={() => {
                history.push(location.pathname);
              }}
            />
          </div>
          <h3 className="send-modal__subtitle">
            {`Click to select a `}
            <strong className="send-modal__bolt-subtitle">
              {sendLetter &&
                `${sendLetter[0].toUpperCase() + sendLetter.slice(1)} platform`}
            </strong>
            {` below`}
          </h3>

          <div className="send-modal__block-icon">
            {filterIcon &&
              filterIcon[sendLetter].map((icon) => (
                <div key={icon}>
                  <input
                    className="send-modal__input-checkbox"
                    id={icon}
                    type="checkbox"
                  />
                  <label className="send-modal__td-checkbox" htmlFor={icon}>
                    <img className="send-modal__img-icon" src={icon} alt="" />
                    <img
                      className={classNames('send-modal__img-mark', {
                        'send-modal__img-mark-visible': visible,
                      })}
                      src={mark}
                      alt=""
                    />
                  </label>
                </div>
              ))}
          </div>

          <div className="send-referral-modal__block-button">
            <Link
              to={{
                pathname: '/contact-book/all-contacts',
                search: '?sending-message=true',
              }}
            >
              <button
                className="send-referral-modal__button"
                type="button"
                onClick={startDownload}
              >
                Send
              </button>
            </Link>
            <button
              onClick={() => {
                history.push(location.pathname);
              }}
              className="send-referral-modal__button-cancel"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </Modal>
  ) : null;
};
