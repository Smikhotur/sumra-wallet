import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../../../store/contactBook/actions';

const TheadButtonsreferred = ({
  removeIdPerson,
  addAllChecked,
  idContacts,
  config,
}) => {
  const [checkedAll, setCheckedAll] = useState(false);
  const dispatch = useDispatch();
  const reduxIdPerson = useSelector(
    (state) => state.reducerContactBook.idPerson
  );

  const removeCheckBox = () => {
    dispatch(actions.getIdPerson([]));
    removeIdPerson();
  };

  const changeStyles = () => {
    setCheckedAll(true);
    addAllChecked();
  };

  const removeContacts = () => {
    dispatch(actions.removeGroupContact(true));
    dispatch(actions.whatToDelete(`${idContacts.length} contacts`));
    dispatch(actions.getIdContactsRemove(idContacts));
  };

  const performMerges = () => {
    if (idContacts.length === 1) {
      return;
    }

    dispatch(actions.getIdContactsMerge(idContacts));
  };

  console.log('hi');

  return (
    <>
      <tr style={{ cursor: 'default' }} className="contact-book__head-table">
        <th
          style={{ position: 'relative', paddingLeft: '12px' }}
          className="contact-book__th"
        >
          <div className={`contact-book__thead-btn-block-${config?.style}`}>
            <div
              title="Cancel all"
              onClick={removeCheckBox}
              className={
                !checkedAll
                  ? `contact-book__all-checkbox-header-${config?.style}`
                  : `contact-book__all-header-checked-${config?.style}`
              }
            ></div>
            <div
              title="Select all"
              onClick={changeStyles}
              className="contact-book__inner-checkbox-arrow"
              style={{ padding: '5px' }}
            >
              <div
                className={`contact-book__checkbox-arrow-${config?.style}`}
              ></div>
            </div>

            <div
              onClick={performMerges}
              title="Merge"
              style={{ padding: '0', marginLeft: '28px' }}
              className="btn"
            >
              <i style={{ fontSize: '24px' }} className="icon-Vector"></i>
            </div>
            <div
              title="Export"
              style={{ padding: '0', marginLeft: '28px' }}
              className="btn"
            >
              <i className="icon-downloadCloud"></i>
            </div>
            <div
              onClick={removeContacts}
              title="Delete"
              style={{ padding: '0', marginLeft: '28px' }}
              className="btn"
            >
              <i className="icon-trash-2"></i>
            </div>
          </div>
          <span style={{ opacity: '0' }}>Full name</span>
        </th>
        <th style={{ opacity: '0' }}>Email</th>
        <th
          className="contact-book__th contact-book__th-phone"
          style={{ opacity: '0' }}
        >
          Phone number
        </th>
        <th
          style={{
            position: 'relative',
          }}
        >
          <div className={`contact-book__selected-color-${config?.style}`}>
            {`${reduxIdPerson.length} selected`}
          </div>
        </th>
      </tr>
    </>
  );
};

export default React.memo(TheadButtonsreferred);
