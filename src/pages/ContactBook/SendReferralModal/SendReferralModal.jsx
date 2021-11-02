import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Modal, {IProps} from '../../../modal';
import '../../../assets/scss/contactBook/sendReferralModal.scss';
import Close from '../../../assets/images/wallets/close.png';
import checkMark from '../../../assets/images/contactBook/checkMark.svg';
import sumra from '../../../assets/images/contactBook/sumrachat.svg';
import sumrameet from '../../../assets/images/contactBook/sumrameet.svg';
import messenger from '../../../assets/images/contactBook/messenger.svg';
import social from '../../../assets/images/contactBook/social.svg';
import email from '../../../assets/images/contactBook/e-mail.svg';
import phone from '../../../assets/images/contactBook/phon.svg';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {actions} from '../../../store/contactBook/actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const SendReferralModal = ({onClick}) => {
  const [activeSumrachat, setActiveSumrachat] = useState(false);
  const [activeSumrameet, setActiveSumrameet] = useState(false);
  const [activeMessenger, setActiveMessenger] = useState(false);
  const [activeSocial, setActiveSocial] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePhone, setActivePhone] = useState(false);
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const dispatch = useDispatch();

  return params.get('send-referral') ? (
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Modal onClick={onClick}>
        <section className="contact-book__send-referral-modal send-referral-modal">
          <div className="send-referral-modal__inner">
            <div className="send-referral-modal__block-header">
              <h2 className="send-referral-modal__title">Send referrals</h2>
              <img
                className="send-referral-modal__img-close"
                src={Close}
                alt="Close modal"
                onClick={() => {
                  history.push(location.pathname);
                }}
              />
            </div>
            <h3 className="send-referral-modal__subtitle">
              {`Click to select a `}
              <strong className="send-referral-modal__bolt-subtitle">
                Comunication platform
              </strong>
              {` below`}
            </h3>
            <div className="send-referral-modal__block-btn">
              <button
                name="sumrachat"
                className={classNames(
                  'send-referral-modal__btn send-referral-modal__sumrachat',
                  {
                    'send-referral-modal__btn-active send-referral-modal__sumrachat':
                      activeSumrachat,
                  }
                )}
                onClick={({currentTarget: {name}}) => {
                  setActiveSumrachat(!activeSumrachat);
                  setActiveSumrameet(false);
                  setActiveMessenger(false);
                  setActiveSocial(false);
                  setActiveEmail(false);
                  setActivePhone(false);
                  dispatch(actions.getLetter(name));
                }}
              >
                <span className="send-referral-modal__text-sumrameet send-referral-modal__text-grey">
                  Send by
                </span>
                <strong className="send-referral-modal__text-sumrameet">
                  {' '}
                  Sumrachat
                </strong>
                <img
                  className="send-referral-modal__img-sumrachat"
                  src={sumra}
                  alt="sumrachat icon"
                />
                <img
                  className={classNames('send-referral-modal__img-check', {
                    'send-referral-modal__img-check-active': activeSumrachat,
                  })}
                  src={checkMark}
                  alt="check"
                />
              </button>

              <button
                name="sumrameet"
                className={classNames(
                  'send-referral-modal__btn send-referral-modal__sumrameet',
                  {
                    'send-referral-modal__btn-active send-referral-modal__sumrameet':
                      activeSumrameet,
                  }
                )}
                onClick={({currentTarget: {name}}) => {
                  setActiveSumrameet(!activeSumrameet);
                  setActiveSumrachat(false);
                  setActiveMessenger(false);
                  setActiveSocial(false);
                  setActiveEmail(false);
                  setActivePhone(false);
                  dispatch(actions.getLetter(name));
                }}
              >
                <span className="send-referral-modal__text-sumrameet send-referral-modal__text-grey">
                  Send by
                </span>
                <strong className="send-referral-modal__text-sumrameet">
                  Sumrameet
                </strong>
                <img
                  className="send-referral-modal__img-sumrameet"
                  src={sumrameet}
                  alt="sumrameet icon"
                />
                <img
                  className={classNames('send-referral-modal__img-check', {
                    'send-referral-modal__img-check-active': activeSumrameet,
                  })}
                  src={checkMark}
                  alt="check"
                />
              </button>

              <button
                name="messenger"
                className={classNames('send-referral-modal__btn', {
                  'send-referral-modal__btn-active': activeMessenger,
                })}
                onClick={({currentTarget: {name}}) => {
                  setActiveMessenger(!activeMessenger);
                  setActiveSumrameet(false);
                  setActiveSumrachat(false);
                  setActiveSocial(false);
                  setActiveEmail(false);
                  setActivePhone(false);
                  dispatch(actions.getLetter(name));
                }}
              >
                <span className="send-referral-modal__text-grey">Send by</span>
                <strong>Messenger</strong>
                <img
                  className="send-referral-modal__img"
                  src={messenger}
                  alt="messenger icons"
                />
                <img
                  className={classNames('send-referral-modal__img-check', {
                    'send-referral-modal__img-check-active': activeMessenger,
                  })}
                  src={checkMark}
                  alt="check"
                />
              </button>

              <button
                name="social"
                className={classNames('send-referral-modal__btn', {
                  'send-referral-modal__btn-active': activeSocial,
                })}
                onClick={({currentTarget: {name}}) => {
                  setActiveSocial(!activeSocial);
                  setActiveMessenger(false);
                  setActiveSumrameet(false);
                  setActiveSumrachat(false);
                  setActiveEmail(false);
                  setActivePhone(false);
                  dispatch(actions.getLetter(name));
                }}
              >
                <span className="send-referral-modal__text-grey">Send by</span>
                <strong>Social media</strong>
                <img
                  className="send-referral-modal__img"
                  src={social}
                  alt="social icons"
                />
                <img
                  className={classNames('send-referral-modal__img-check', {
                    'send-referral-modal__img-check-active': activeSocial,
                  })}
                  src={checkMark}
                  alt="check"
                />
              </button>

              <button
                name="email"
                className={classNames('send-referral-modal__btn', {
                  'send-referral-modal__btn-active': activeEmail,
                })}
                onClick={({currentTarget: {name}}) => {
                  setActiveEmail(!activeEmail);
                  setActiveSocial(false);
                  setActiveMessenger(false);
                  setActiveSumrameet(false);
                  setActiveSumrachat(false);
                  setActivePhone(false);
                  dispatch(actions.getLetter(name));
                }}
              >
                <span className="send-referral-modal__text-grey">Send by</span>
                <strong>E-mail</strong>
                <img src={email} alt="email icons" />
                <img
                  className={classNames('send-referral-modal__img-check', {
                    'send-referral-modal__img-check-active': activeEmail,
                  })}
                  src={checkMark}
                  alt="check"
                />
              </button>

              <button
                name="phone"
                className={classNames(
                  'send-referral-modal__btn send-referral-modal__phone',
                  {
                    'send-referral-modal__btn-active send-referral-modal__phone':
                      activePhone,
                  }
                )}
                onClick={({currentTarget: {name}}) => {
                  setActivePhone(!activePhone);
                  setActiveEmail(false);
                  setActiveSocial(false);
                  setActiveMessenger(false);
                  setActiveSumrameet(false);
                  setActiveSumrachat(false);
                  dispatch(actions.getLetter(name));
                }}
              >
                <div>
                  <span className="send-referral-modal__text-grey">
                    Send by{' '}
                  </span>
                  <strong>Mobile phone</strong>
                </div>
                <img src={phone} alt="phone icons" />
                <img
                  className={classNames('send-referral-modal__img-check', {
                    'send-referral-modal__img-check-active': activePhone,
                  })}
                  src={checkMark}
                  alt="check"
                />
              </button>
            </div>

            <div className="send-referral-modal__block-button">
              <Link
                to={{
                  pathname: '/contact-book/all-contacts',
                  search: '?send-letter=true',
                }}
              >
                <button className="send-referral-modal__button" type="button">
                  Continue
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
    </ReactCSSTransitionGroup>
  ) : null;
};
