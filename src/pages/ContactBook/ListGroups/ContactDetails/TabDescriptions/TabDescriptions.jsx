import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import addContactImg from '../../../../../assets/images/contactBook/addContact.png';

export const TabDescriptions = () => {
  const [person, setPerson] = useState([]);

  const oneUser = useSelector((state) => state.reducerContactBook.oneUser);

  useEffect(() => {
    setPerson(JSON.parse(localStorage.getItem('person')));
  }, [oneUser]);

  if (person.length === 0) {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <section className="contact-edit__block-desc">
      <ul className="contact-edit__list-desc">
        <li className="contact-edit__item-desc">
          <i className="icon-briefcase"></i>
        </li>
        <li className="contact-edit__item-desc">
          <i className="icon-phone1"></i>
          {person[0].phone}
        </li>
        <li className="contact-edit__item-desc">
          <i className="icon-mail_outline"></i>
          {person[0].email}
        </li>
        <li className="contact-edit__item-desc">
          <i className="icon-calendar"></i>
          {person[0].birthday ? person[0].birthday.replace(/-/g, '/') : ''}
        </li>
        <li className="contact-edit__item-desc">
          <i className="icon-social"></i>
        </li>
      </ul>
      <div
        style={{alignSelf: 'flex-start'}}
        className="contact-edit__img-block"
      >
        <img src={addContactImg} alt="" />
      </div>
    </section>
  );
};
