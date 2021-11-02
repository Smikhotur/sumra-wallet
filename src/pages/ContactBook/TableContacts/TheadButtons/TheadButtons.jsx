import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../../../store/contactBook/actions';
import arrows from '../../../../assets/images/contactBook/Sort.svg';

export const TheadButtons = ({
  removeIdPerson,
  addAllChecked,
  idContacts,
  visibleWindowGroups,
  visibleGroups,
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

  return (
    <>
      <tr style={{cursor: 'default'}} className="contact-book__head-table">
        <th
          style={{position: 'relative', paddingLeft: '12px'}}
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
              style={{padding: '5px'}}
            >
              <div
                className={`contact-book__checkbox-arrow-${config?.style}`}
              ></div>
            </div>

            <div
              onClick={performMerges}
              title="Merge"
              style={{padding: '0', marginLeft: '28px'}}
              className="btn"
            >
              <i style={{fontSize: '24px'}} className="icon-Vector"></i>
            </div>
            <div
              onClick={() => {
                visibleWindowGroups(!visibleGroups);
              }}
              title="Add Group"
              style={{padding: '0', marginLeft: '28px'}}
              className="btn"
            >
              <i className="icon-addGroup"></i>
            </div>
            <div
              title="Export"
              style={{padding: '0', marginLeft: '28px'}}
              className="btn"
            >
              <i className="icon-downloadCloud"></i>
            </div>
            <div
              onClick={removeContacts}
              title="Delete"
              style={{padding: '0', marginLeft: '28px'}}
              className="btn"
            >
              <i className="icon-trash-2"></i>
            </div>
          </div>
          <span style={{opacity: '0'}}>Full name</span>
        </th>
        <th
          style={{opacity: '0'}}
          className="contact-book__th contact-book__th-email"
        >
          Email
          <img className="contact-book__arrow-img" src={arrows} alt="sort" />
        </th>
        <th
          style={{opacity: '0'}}
          className="contact-book__th contact-book__th-phone"
        >
          Phone number
          <img className="contact-book__arrow-img" src={arrows} alt="sort" />
        </th>
        <th
          style={{opacity: '0'}}
          className="contact-book__th contact-book__th-social"
        >
          Social media profile
          <img className="contact-book__arrow-img" src={arrows} alt="sort" />
        </th>
        <th
          className="contact-book__th contact-book__th-groups"
          style={{
            width: '200px',
            position: 'relative',
          }}
        >
          <div style={{opacity: '0'}}>
            Groups
            <img className="contact-book__arrow-img" src={arrows} alt="sort" />
          </div>
          <div className={`contact-book__selected-color-${config?.style}`}>
            {`${reduxIdPerson.length} selected`}
          </div>
        </th>
      </tr>
    </>
  );
};
