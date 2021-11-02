import React, { useState } from 'react';
import { FcPortraitMode } from 'react-icons/fc';
import { Link, useHistory } from 'react-router-dom';

export const RowTableAll = ({
  mousePageXY,
  openDetails,
  person,
  checkboxHandler,
  idPerson,
  changeStar,
  handleFavourite,
  visibleWindowGroups,
  setShowGroups,
  setIdPerson,
  setCheckboxChecked,
  setHuman,
  setAddedGroup,
  removeUser,
  index,
  star,
  visibleGroups,
  config,
}) => {
  const [visibleBtn, setVisibleBtn] = useState('');
  const history = useHistory();
  let pathname = window.location.pathname;

  const linkDetails = (e) => {
    const name = e.target.toString();

    if (
      !name.includes('HTMLLabelElement') &&
      !name.includes('HTMLInputElement') &&
      !name.includes('HTMLElement')
    ) {
      history.push(`${pathname}/person`);
    }
  };

  return (
    <tr
      style={{ cursor: 'pointer !important' }}
      onClick={(e) => {
        linkDetails(e);
        openDetails(person.id);
      }}
      onMouseLeave={() => {
        setVisibleBtn('');
      }}
      onMouseOver={() => {
        setVisibleBtn(person.id);
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
            checkboxHandler(e, person);
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
            style={{ width: '30px', borderRadius: '50%' }}
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
        {/* {person.social.map((s) => (
          <a
            key={s}
            //@ts-ignore
            href={social.filter((el) => {
              const arr = s.split('/').join('.').split('.');
              const result = arr[arr.length - 2];
              return el.includes(result.toLowerCase());
            })}
          >
            <img
              className="contact-book__social-img"
              src={s}
              alt="social"
            />
          </a>
        ))} */}
      </td>
      <td
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '60px',
        }}
        className="contact-book__th"
      >
        {visibleBtn !== person.id ? (
          <div className={`contact-book__group-color-${config?.style}`}>
            {person.groups.length > 2 ? (
              <div
                className={`contact-book__group-${config?.style}`}
                key={person.groups[0].id}
              >
                <span
                  style={{ display: 'block' }}
                  className="contact-book__list-groups"
                >
                  {person.groups[0].name}
                </span>
                <span
                  className="contact-book__list-groups"
                  key={person.groups[1].id}
                >
                  {person.groups[1].name}
                </span>
                <span className="contact-book__list-groups-points">...</span>
              </div>
            ) : (
              person.groups.map((group) => (
                <span className="contact-book__list-groups" key={group.id}>
                  {group.name}
                </span>
              ))
            )}
          </div>
        ) : (
          <div className="contact-book__block-btn">
            <button
              title="Favourite"
              onClick={() => {
                handleFavourite(person.id);
              }}
              type="button"
            >
              <i
                onClick={() => {
                  changeStar(person.id, person.is_favorite);
                }}
                className={
                  star.length === 2 && star[0] === person.id
                    ? star[0] === person.id && star[1] === false
                      ? 'icon-star_outline'
                      : 'icon-star1'
                    : !person.is_favorite
                    ? 'icon-star_outline'
                    : 'icon-star1'
                }
              ></i>
            </button>
            <button
              onClick={(e) => {
                mousePageXY(e);
                visibleWindowGroups(!visibleGroups);
                setShowGroups(true);
                setIdPerson([]);
                setCheckboxChecked([]);
                setHuman([person.id]);
                setAddedGroup(person.groups.map((group) => group.id));
              }}
              title="Add Group"
            >
              <i className="icon-addGroup"></i>
            </button>
            <button
              onClick={() => {
                removeUser(person.id, person.display_name);
              }}
              title="Delete"
              type="button"
            >
              <i className="icon-trash-2"></i>
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};
