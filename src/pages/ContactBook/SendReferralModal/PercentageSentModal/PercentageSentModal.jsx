import React from 'react';
import Modal from '../../../../modal';
import Confetti from 'react-confetti';
import Close from '../../../../assets/images/wallets/close.png';
import {useHistory} from 'react-router-dom';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../../../assets/scss/contactBook/sendingMessage.scss';
import {useSelector, RootStateOrAny} from 'react-redux';
import coints from '../../../../assets/images/contactBook/coints.svg';
import {Link} from 'react-router-dom';

export const PercentageSentModal = ({onClick}) => {
  const download = useSelector(
    (state) => state.reducerContactBook.download
  );
  const params = new URLSearchParams(location.search);
  const history = useHistory();

  return params.get('sending-message') ? (
    <Modal onClick={onClick}>
      {download === 100 ? (
        <section className="contact-book__sending-message-modal sending-message-modal">
          <Confetti style={{width: '100%'}} />
          <div className="sending-message-modal__inner-congrats">
            <div className="sending-message-modal__block-header">
              <h2 className="sending-message-modal__title">Congrats</h2>
              <img
                className="sending-message-modal__img-close"
                src={Close}
                alt="Close modal"
                onClick={() => {
                  history.push(location.pathname);
                }}
              />
            </div>
            <h3 className="sending-message-modal__subtitle">
              <span>You’ve sent referrals to</span>{' '}
              <span className="sending-message-modal__subtitle-count">
                10 contacts <br />
              </span>
              <span> by </span>
              <span className="sending-message-modal__subtitle-count">
                Facebook
              </span>{' '}
              <span>successfully!</span>
            </h3>
            <div className="sending-message-modal__images">
              <img src={coints} alt="coints" />
            </div>

            <div className="sending-message-modal__block-button">
              <Link to="/contact-book/all-contacts">
                <button className="sending-message-modal__button" type="button">
                  Continue
                </button>
              </Link>
              <button
                onClick={() => {
                  history.push(location.pathname);
                }}
                className="sending-message-modal__button-cancel"
                type="button"
              >
                View contacts
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="contact-book__sending-message-modal sending-message-modal">
          <div className="sending-message-modal__inner">
            <div className="sending-message-modal__block-header">
              <h2 className="sending-message-modal__title">Send referrals</h2>
              <img
                className="sending-message-modal__img-close"
                src={Close}
                alt="Close modal"
                onClick={() => {
                  history.push(location.pathname);
                }}
              />
            </div>
            <h3 className="sending-message-modal__subtitle">Please wait...</h3>
            <div className="sending-message-modal__loader">
              <CircularProgressbar
                minValue={1}
                value={download}
                text={`${download}%`}
                strokeWidth={5}
                styles={buildStyles({
                  pathColor: `rgba(112, 100, 226, 1)`,
                  textColor: '#7064e2',
                  trailColor: '#fafafc',
                  backgroundColor: '#7064e2',
                  textSize: '26px',
                })}
              />
            </div>
          </div>
        </section>
      )}
    </Modal>
  ) : null;
};
