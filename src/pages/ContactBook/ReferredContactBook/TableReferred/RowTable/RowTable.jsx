import React from 'react';
import { FcPortraitMode } from 'react-icons/fc';
import { Link, useHistory } from 'react-router-dom';

import facebook from '../../../../../assets/images/contactBook/facebook.svg';
import instagram from '../../../../../assets/images/contactBook/instagram.svg';
import linkedin from '../../../../../assets/images/contactBook/in.svg';
import twitter from '../../../../../assets/images/contactBook/twitter.svg';
import pinterest from '../../../../../assets/images/contactBook/pinterest.svg';
import discord from '../../../../../assets/images/contactBook/discord.svg';
import youtube from '../../../../../assets/images/contactBook/youtube.svg';
import zoom from '../../../../../assets/images/contactBook/zoom.svg';
import tiktok from '../../../../../assets/images/contactBook/tiktok.svg';
import twinch from '../../../../../assets/images/contactBook/twinch.svg';

const icons = [
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
];

const RowTable = ({
  person,
  openDetails,
  checkboxHandler,
  index,
  idPerson,
  config,
}) => {
  const history = useHistory();
  const pathname = window.location.pathname;
  const linkDetails = (e) => {
    const name = e.target.toString();
    if (
      !name.includes('HTMLLabelElement') &&
      !name.includes('HTMLInputElement') &&
      !name.includes('HTMLElement')
    ) {
      history.push(`/contact-book/referred-contact-book/person`);
    }
  };

  return (
    <tr
      style={{ cursor: 'pointer !important' }}
      onClick={(e) => {
        linkDetails(e);
        openDetails(person.id);
      }}
      className="contact-book__tr-content"
    >
      <td className="contact-book__th">
        <input
          name={person.id}
          className={`contact-book__input-checkbox-${config?.style}`}
          type="checkbox"
          id={index + ''}
          checked={idPerson.includes(person.id) ? true : false}
          onChange={(e) => {
            checkboxHandler(e);
          }}
        />
        <label
          className={`contact-book__td-checkbox-${config?.style}`}
          htmlFor={index + ''}
        ></label>
        {person.avatar !== null ? (
          <img
            onClick={() => {
              openDetails(person.id);
            }}
            style={{ width: '35px', height: '35px', borderRadius: '50%' }}
            src={person.img}
            alt="Photo person"
          />
        ) : (
          <span
            onClick={() => {
              openDetails(person.id);
            }}
            className="contact-book__avatar"
          >
            <FcPortraitMode style={{ fontSize: '22px' }} />
          </span>
        )}
        <span
          style={{ width: '100%', height: '100%' }}
          onClick={() => {
            openDetails(person.id);
          }}
          className="contact-book__td-text contact-book__full-name"
        >
          {person.display_name.length > 21
            ? person.display_name.slice(0, 22) + '...'
            : person.display_name}
        </span>
      </td>
      <td
        onClick={() => {
          openDetails(person.id);
        }}
        className="contact-book__th contact-book__email"
      >
        <Link className="contact-book__email" to={`${pathname}/person`}>
          {person.email ? person.email.slice(0, 40) : 'no email'}
        </Link>
      </td>
      <td
        onClick={() => {
          openDetails(person.id);
        }}
        className="contact-book__th contact-book__phon-number"
      >
        <Link className="contact-book__email" to={`${pathname}/person`}>
          {person.phone ? person.phone.slice(0, 15) : 'no phone number'}
        </Link>
      </td>
      <td className="contact-book__th">
        {icons.map((s) => (
          <a
            style={{ padding: '0', border: '0' }}
            key={s}
            href={icons.map((el) => el)}
          >
            <img className="contact-book__social-img" src={s} alt="social" />
          </a>
        ))}
      </td>
    </tr>
  );
};

export default React.memo(RowTable);
