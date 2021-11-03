import React, { useEffect, useState } from 'react';
import useOnOutsideClick from '../../../../custom.hooks/useOnOutsideClick';
import { FcPortraitMode } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../../store/contactBook/actions';
import { TabDescriptions } from './TabDescriptions/TabDescriptions.jsx';
import { FormEdit } from './FormEdit/FormEdit.jsx';
import { Link } from 'react-router-dom';
import { AddingContactToGroup } from '../../AddingContactToGroup/AddingContactToGroup';
import { HeaderWallet } from '../../HeaderWallet/HeaderWallet';

export const ContactDetails = ({ config }) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [person, setPerson] = useState([]);
  const [visibleGroups, setVisibleGroups] = useState(false);
  const [addedGroup, setAddedGroup] = useState([]);
  const dispatch = useDispatch();
  const { innerBorderRef } = useOnOutsideClick(() => setVisibleGroups(false));
  const nameClass = 'contact-edit__list-groups-add';

  const oneUser = useSelector((state) => state.reducerContactBook.oneUser);

  const groups = useSelector((state) => state.reducerContactBook.groups);

  const handleFavourite = (id) => {
    dispatch(actions.getFavourite(id));
  };

  useEffect(() => {
    if (oneUser.length > 0) {
      setPerson(oneUser);
      setAddedGroup(
        oneUser[0].groups.map((group) => {
          return group.id;
        })
      );
    } else {
      setPerson(JSON.parse(localStorage.getItem('person')));
      setAddedGroup(
        JSON.parse(localStorage.getItem('person'))[0].groups.map((group) => {
          return group.id;
        })
      );
    }
  }, [oneUser]);

  const addIdGroups = ({ target: { checked } }, groupId) => {
    if (checked) {
      setAddedGroup((prev) => [...prev, groupId]);
      return;
    }

    setAddedGroup((prev) => prev.filter((id) => id !== groupId));
  };

  const sendGroups = () => {
    const remove = groups
      .filter((group) => {
        return group.id !== addedGroup.find((el) => el === group.id);
      })
      .map((group) => group.id);
    dispatch(actions.addContactsGroups([person[0].id], addedGroup, remove));

    const newArr = addedGroup.map((id) =>
      groups.filter((group) => group.id === id)
    );

    person[0].groups = [].concat(...newArr);
    localStorage.setItem('person', JSON.stringify(person));
    setVisibleGroups(!visibleGroups);
  };

  const removeUser = () => {
    dispatch(actions.removeGroupContact(true));
    dispatch(
      actions.setIdUser(JSON.parse(localStorage.getItem('person'))[0].id)
    );
    dispatch(
      actions.whatToDelete(
        `the contact "${
          JSON.parse(localStorage.getItem('person'))[0].display_name
        }"`
      )
    );
  };

  const allData = useSelector((state) => state.reducerContactBook.data);
  let pathname = window.location.pathname;
  const page =
    pathname
      .split('/')
      [pathname.split('/').length - 1].replace(/-/g, ' ')[0]
      .toUpperCase() +
    pathname
      .split('/')
      [pathname.split('/').length - 1].replace(/-/g, ' ')
      .slice(1);

  return (
    <>
      {person.length > 0 && (
        <section className="contact-edit">
          <HeaderWallet
            page={'Contact details'}
            allData={false}
            config={config}
          />

          <div className="contact-edit__body">
            <div>
              <div className="contact-edit__inner">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="contact-edit__avatar">
                    <FcPortraitMode className="contact-edit__avatar-img" />
                  </div>
                  <div className="contact-edit__block-information">
                    <div className="contact-edit__full-name">
                      {person.length > 0 ? person[0].display_name : ''}
                    </div>
                    <div className="contact-edit__birthday">
                      {person[0].groups.map((group) => (
                        <span
                          className={`contact-edit__group-${config?.style}`}
                          key={group.id}
                        >
                          <Link
                            to={`/contact-book/${group.name.replace(
                              /\s+/g,
                              '-'
                            )}`}
                          >
                            {group.name}
                          </Link>
                        </span>
                      ))}
                    </div>
                    <div className="contact-edit__btn-inner">
                      <div
                        className={`contact-edit__icon-inner-${config?.style}`}
                        // onClick={() => {
                        //   handleFavourite(person[0].id);
                        // }}
                      >
                        <i
                          title="Add to favorites"
                          className={
                            !person[0].is_favorite
                              ? 'icon-star_outline'
                              : 'icon-star1'
                          }
                        ></i>
                      </div>
                      <div
                        onClick={() => {
                          setVisibleGroups(!visibleGroups);
                        }}
                        title="Add contact to group"
                        className={
                          visibleGroups
                            ? `contact-edit__icon-inner-active-${config?.style}`
                            : `contact-edit__icon-inner-${config?.style}`
                        }
                      >
                        <i className="icon-addGroup"></i>
                      </div>
                      <div
                        title="Edit"
                        onClick={() => {
                          setVisibleForm(!visibleForm);
                        }}
                        className={
                          visibleForm
                            ? `contact-edit__icon-inner-active-${config?.style}`
                            : `contact-edit__icon-inner-${config?.style}`
                        }
                      >
                        <i className="icon-rename"></i>
                      </div>
                      <div
                        onClick={() => {
                          removeUser();
                        }}
                        title="Delete"
                        className={`contact-edit__icon-inner-${config?.style}`}
                      >
                        <i className="icon-trash-2"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {visibleForm ? <FormEdit config={config} /> : <TabDescriptions />}
            </div>
          </div>
          {visibleGroups && (
            <AddingContactToGroup
              addIdGroups={addIdGroups}
              addedGroup={addedGroup}
              sendGroups={sendGroups}
              groups={groups}
              nameClass={nameClass}
              innerBorderRef={innerBorderRef}
              config={config}
            />
          )}
        </section>
      )}
    </>
  );
};
