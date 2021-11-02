import React from 'react';
import {Link} from 'react-router-dom';
import Confetti from 'react-confetti';
import {useSelector, RootStateOrAny} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Modal, {IProps} from '../../../../modal';
import Close from '../../../../assets/images/wallets/close.png';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import box from '../../../../assets/images/contactBook/box.svg';
import '../../../../assets/scss/contactBook/importsDownload.scss';

export const ImportLoaderModal = ({onClick}) => {
  const download = useSelector(
    (state) => state.reducerContactBook.download
  );
  const params = new URLSearchParams(location.search);
  const history = useHistory();

  return params.get('import-download') ? (
    <Modal onClick={onClick}>
      {download === 100 ? (
        <section className="contact-book__import-download-modal import-download-modal">
          <Confetti />
          <div className="import-download-modal__inner-congrats">
            <div className="import-download-modal__block-header">
              <h2 className="import-download-modal__title">
                Imports contacts!
              </h2>
              <img
                className="import-download-modal__img-close"
                src={Close}
                alt="Close modal"
                onClick={() => {
                  history.push(location.pathname);
                }}
              />
            </div>
            <h3 className="import-download-modal__subtitle">
              <span>You have imported</span>
              <span className="import-download-modal__subtitle-count">
                {' '}
                91 contacts{' '}
              </span>
              <span> successfully!</span>
            </h3>
            <div className="import-download-modal__images">
              <img src={box} alt="coints" />
            </div>

            <div className="import-download-modal__block-button">
              <Link to="/contact-book/all-contacts">
                <button className="import-download-modal__button" type="button">
                  Continue
                </button>
              </Link>
              <button
                onClick={() => {
                  history.push(location.pathname);
                }}
                className="import-download-modal__button-cancel"
                type="button"
              >
                View contacts
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="contact-book__import-download-modal import-download-modal">
          <div className="import-download-modal__inner">
            <div className="import-download-modal__block-header">
              <h2 className="import-download-modal__title">Import contacts</h2>
              <img
                className="import-download-modal__img-close"
                src={Close}
                alt="Close modal"
                onClick={() => {
                  history.push(location.pathname);
                }}
              />
            </div>
            <h3 className="import-download-modal__subtitle">Please wait...</h3>
            <div className="import-download-modal__loader">
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
