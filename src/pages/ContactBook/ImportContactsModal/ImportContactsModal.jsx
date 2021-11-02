import React, { useState } from 'react';
import Modal from '../../../modal';
import { useHistory } from 'react-router';
import Close from '../../../assets/images/contactBook/close.png';
import file from '../../../assets/images/contactBook/file-text.svg';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../store/contactBook/actions';
import useOnOutsideClick from '../../../custom.hooks/useOnOutsideClick';

export const ImportContactsModal = ({ onClick, config }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const dispatch = useDispatch();
  const { innerBorderRef } = useOnOutsideClick(() =>
    history.push(history.location.pathname)
  );
  let intervalId;
  let count = 0;

  const groups = useSelector((state) => state.reducerContactBook.groups);

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

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const contacts = new FormData();
    contacts.append('group_id', '');
    contacts.append('contacts', selectedFile);
    dispatch(actions.postUsers(contacts));
  };

  return params.get('import-contacts') ? (
    <Modal onClick={onClick}>
      <section className="contact-book__import-contacts-modal import-contacts-modal">
        <div ref={innerBorderRef} className="import-contacts-modal__inner">
          <div className="import-contacts-modal__block-header">
            <h2 className="import-contacts-modal__title">Import contacts</h2>
            <img
              className="import-contacts-modal__img-close"
              src={Close}
              alt="Close modal"
              onClick={() => {
                history.push(location.pathname);
              }}
            />
          </div>
          <h3 className="import-contacts-modal__subtitle">
            <span>To import contacts, select a</span>{' '}
            <span className="import-contacts-modal__subtitle-count">CSV</span>
            <span> or </span>
            <span className="import-contacts-modal__subtitle-count">
              vCard
            </span>{' '}
            <span>file.</span>
          </h3>
          <form className="import-contacts-modal__inner-form" action="">
            <div className="import-contacts-modal__inner-file">
              <div className="import-contacts-modal__form-group-input">
                <label
                  className={
                    !selectedFile
                      ? `import-contacts-modal__label-${config?.style}`
                      : `import-contacts-modal__label-solid-${config?.style}`
                  }
                  htmlFor="file"
                >
                  <img src={file} alt="" />
                  <span
                    className={`import-contacts-modal__title-file-${config?.style}`}
                  >
                    {selectedFile ? selectedFile.name : 'Select File'}
                  </span>
                  <input
                    className="import-contacts-modal__input-file"
                    type="file"
                    id="file"
                    onChange={fileSelectedHandler}
                  />
                </label>
              </div>
            </div>
            <select className="import-contacts-modal__select" name="" id="">
              <option value="">Add to group: All contacts</option>
              {groups.map((group) => (
                <option key={group.id}>Add to group: {group.name}</option>
              ))}
            </select>
          </form>
          <div className="import-contacts-modal__block-button">
            <button
              style={selectedFile ? { opacity: '1' } : { opacity: '0.5' }}
              disabled={selectedFile ? false : true}
              className={`import-contacts-modal__button-${config?.style}`}
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
              className={`import-contacts-modal__button-cancel-${config?.style}`}
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
