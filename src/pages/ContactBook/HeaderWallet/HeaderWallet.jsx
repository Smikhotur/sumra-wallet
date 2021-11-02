import React, { useState } from 'react';
import notificationMeet from '../../../assets/images/contactBook/notificationMeet.svg';
import point from '../../../assets/images/contactBook/point.svg';
import search from '../../../assets/images/contactBook/search.svg';

export const HeaderWallet = ({ page, config, findUser, textValue }) => {
  const [switchOne, setSwitchOne] = useState(false);
  const [switchTwo, setSwitchTwo] = useState(true);

  const toSwitch = ({ target: { id } }) => {
    if (id === 'switch-one') {
      setSwitchOne(!switchOne);
    } else {
      setSwitchTwo(!switchTwo);
    }
  };
  return (
    <section className={`contact-book__header-contacts-${config?.style}`}>
      <div className="contact-book__title-inner">
        <h2 className={`contact-book__title-all-contacts-${config?.style}`}>
          {page.length < 17 ? page : page.slice(1, 17) + '...'}
        </h2>
      </div>
      <label
        htmlFor="search-meet"
        className={`contact-book__search-label-${config?.style}`}
      >
        <input
          id="search-meet"
          placeholder="Search..."
          className={`contact-book__search-${config?.style}`}
          type="text"
          value={textValue}
          onChange={(e) => {
            findUser(e);
          }}
        />

        <img
          className={`contact-book__search-img-${config?.style}`}
          src={search}
          alt="search icon"
        />
      </label>
      <div className={`contact-book__inner-person-${config?.style}`}>
        <img className="contact-book__hub" src={point} alt="hub" />
        <div className="contact-book__img-inner-notification">
          <div className="contact-book__notification-inner">
            <img
              src={notificationMeet}
              alt=""
              className="contact-book__notification-img"
            />
            <span className="contact-book__notification-red"></span>
          </div>
          <div className="switch-inner">
            <label htmlFor="switch-one" className="switch">
              <input
                value={switchOne}
                onChange={toSwitch}
                id="switch-one"
                type="checkbox"
                checked={switchOne}
              />
              <span className="slider round"></span>
            </label>
            <label htmlFor="switch-two" className="switch">
              <input
                value={switchTwo}
                onChange={toSwitch}
                id="switch-two"
                type="checkbox"
                checked={switchTwo}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className="contact-book__person-inner">
          <img
            src={config?.header?.avatar}
            alt="avatar user"
            className="contact-book__img-person"
          />
          <p className="contact-book__name-person">{config?.header?.name}</p>
        </div>
      </div>
    </section>
  );
};
