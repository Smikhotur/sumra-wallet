import React, { useState } from 'react';
import Modal from '../../../modal';
import { useHistory } from 'react-router';
import Close from '../../../assets/images/contactBook/close.png';
import { useDispatch } from 'react-redux';
import actions from '../../../store/contactBook/actions';
import useOnOutsideClick from '../../../custom.hooks/useOnOutsideClick';

export const ExportContactsModal = ({ onClick, config }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const dispatch = useDispatch();
  const { innerBorderRef } = useOnOutsideClick(() =>
    history.push(history.location.pathname)
  );
  let intervalId;
  let count = 0;

  const startDownload = () => {
    intervalId = setInterval(addNumber, 100);
  };

  const addNumber = () => {
    count++;
    if (count === 100) {
      clearInterval(intervalId);
    }
    dispatch(actions.dovnloadSend(count));
  };

  const fileUploadHandler = () => {
    const contacts = new FormData();
    contacts.append('contacts', '');
    contacts.append('file', selectedFile);
    dispatch(actions.postUsers(contacts));
  };

  return params.get('export-contacts') ? (
    <Modal onClick={onClick}>
      <section className="contact-book__export-contacts-modal export-contacts-modal">
        <div ref={innerBorderRef} className="export-contacts-modal__inner">
          <div className="export-contacts-modal__block-header">
            <h2 className="export-contacts-modal__title">Export contacts</h2>
            <img
              className="export-contacts-modal__img-close"
              src={Close}
              alt="Close modal"
              onClick={() => {
                history.push(location.pathname);
              }}
            />
          </div>
          <div className="export-contacts-modal__block-select">
            <label className="export-contacts-modal__label" htmlFor="radio1">
              <input
                className="export-contacts-modal__checkbox"
                id="radio1"
                type="checkbox"
              />
              <span>Selected contacts (0)</span>
            </label>
            <label className="export-contacts-modal__label" htmlFor="radio2">
              <input
                className="export-contacts-checkbox"
                id="radio2"
                type="checkbox"
              />
              <select name="" id="">
                <option value="">Groups: All contacts</option>
              </select>
            </label>
            <h3 className="export-contacts-modal__subtitle">Export as</h3>
            <label className="export-contacts-modal__label" htmlFor="radio3">
              <input
                className="export-contacts-checkbox"
                id="radio3"
                type="checkbox"
              />
              <span>CSV</span>
            </label>
            <label className="export-contacts-modal__label" htmlFor="radio4">
              <input
                className="export-contacts-checkbox"
                id="radio4"
                type="checkbox"
              />
              <span>vCard (for iOS Contacts)</span>
            </label>
          </div>

          <div className="export-contacts-modal__block-button">
            {/* <Link
              to={{
                pathname: '/contact-book/all-contacts',
                search: '?import-download=true',
              }}
            > */}
            <button
              className={`export-contacts-modal__button-${config?.style}`}
              type="button"
              onClick={() => {
                startDownload();
                fileUploadHandler();
              }}
            >
              Import
            </button>
            {/* </Link> */}
            <button
              onClick={() => {
                history.push(location.pathname);
              }}
              className="export-contacts-modal__button-cancel"
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
