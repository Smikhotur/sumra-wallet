/* eslint-disable no-constant-condition */
import React, { useCallback, useEffect, useState } from 'react';
import useOnOutsideClick from '../../../custom.hooks/useOnOutsideClick';
import arrowDown from '../../../assets/images/contactBook/arrowDown.svg';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../store/contactBook/actions';
import { TheadTable } from './TheadTable/TheadTable.jsx';
import { TheadButtons } from './TheadButtons/TheadButtons';
import { AddingContactToGroup } from '../AddingContactToGroup/AddingContactToGroup';
import { RowTableAll } from './RowTableAll/RowTableAll';
import { v4 as uuidv4 } from 'uuid';

const TableContacts = ({ idGroup, config }) => {
  const [idPerson, setIdPerson] = useState([]);
  const [star, setStar] = useState([]);
  const [checkboxChecked, setCheckboxChecked] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(2);
  const [addedGroup, setAddedGroup] = useState([]);
  const [visibleGroups, setVisibleGroups] = useState(false);
  const [stayGroups, setStayGroups] = useState([]);
  const [removeGroups, setRemoveGroups] = useState([]);
  const [showGroups, setShowGroups] = useState(false);
  const [coordinates, setСoordinates] = useState({});
  const [human, setHuman] = useState([]);
  const { innerBorderRef } = useOnOutsideClick(() => setVisibleGroups(false));

  const nameClass = showGroups
    ? 'contact-edit__list-table-groups'
    : 'contact-edit__list-all-groups';

  let pathname = window.location.pathname;
  const text = useSelector((state) => state.reducerContactBook.searchText);
  const people = useSelector((state) => state.reducerContactBook.users);

  console.log(people);

  const allData = useSelector((state) => state.reducerContactBook.data);

  const groups = useSelector((state) => state.reducerContactBook.groups);

  let currentUsers = people;
  const dispatch = useDispatch();

  const page =
    pathname
      .split('/')
      [pathname.split('/').length - 1].replace(/-/g, ' ')[0]
      .toUpperCase() +
    pathname
      .split('/')
      [pathname.split('/').length - 1].replace(/-/g, ' ')
      .slice(1);

  const numberUser = currentUsers.filter(
    (user) => Object.keys(user).length > 1
  );
  const addPeople = () => {
    if (numberOfPages <= allData.last_page) {
      setNumberOfPages((prev) => prev + 1);
      dispatch(actions.getPaginationUsers(numberOfPages));
    }
  };

  const checkGroup = (man) => {
    man.groups.forEach((group) => {
      if (!addedGroup.includes(group.id)) {
        setAddedGroup((prev) => [...prev, group.id]);
      }
    });
  };

  const checkWord = (id) => {
    return checkboxChecked.some(
      (check) => check.name.toLowerCase() === id.toLowerCase()
    );
  };

  const selectAllFriends = ({ target: { id, checked } }) => {
    setHuman([]);
    if (showGroups) {
      setShowGroups(false);
      setVisibleGroups(false);
    }
    if (id.length === 1 && checked === true) {
      setCheckboxChecked((prev) => [...prev].concat({ name: id }));
    }

    if (id.length === 1 && checked === false && checkWord(id)) {
      setCheckboxChecked((prev) => prev.filter((check) => check.name !== id));
    }

    if (checked === true) {
      let addGroup = [];

      currentUsers.forEach((man) => {
        if (man.display_name[0].toLowerCase() === id.toLowerCase()) {
          if (man.groups !== undefined) {
            man.groups.forEach((group) => {
              if (
                !addGroup.includes(group.id) &&
                !addedGroup.includes(group.id)
              ) {
                addGroup.push(group.id);
                setAddedGroup((prev) => [...prev, group.id]);
              }
            });
          }
        }
      });

      setStayGroups();

      setIdPerson((prevState) => [
        ...prevState,
        ...currentUsers
          .map((element) => {
            if (element.display_name === undefined) {
              return;
            }
            if (
              id.toLowerCase() === element.display_name[0].toLowerCase() &&
              !idPerson.includes(element.id)
            ) {
              return element.id;
            }
          })
          .filter((id) => id !== undefined),
      ]);
    }

    if (checked === false) {
      let remaining = [];
      let prev = [];
      let found = [];

      currentUsers.forEach((man) => {
        if (man.display_name[0].toLowerCase() === id.toLowerCase()) {
          if (man.groups !== undefined) {
            prev = man.groups.map((group) => group.id);
          }
        }
      });

      currentUsers.forEach((man) => {
        if (
          idPerson.includes(man.id) &&
          man.display_name[0].toLowerCase() !== id.toLowerCase()
        ) {
          remaining = remaining.concat(man.groups.map((group) => group.id));
        }
      });

      found = prev.filter((id) => !remaining.includes(id));

      setRemoveGroups(found);

      setAddedGroup(addedGroup.filter((group) => !found.includes(group)));

      if (prev.length === addedGroup.length) {
        setVisibleGroups(false);
      }

      setIdPerson(
        idPerson.filter((idPerson) => {
          const result = currentUsers
            .map((man) => {
              if (man.display_name === undefined) {
                return;
              }
              if (id.toLowerCase() === man.display_name[0].toLowerCase()) {
                return man.id;
              }
            })
            .filter((idPerson) => idPerson !== undefined);

          if (result.includes(idPerson) !== true) {
            return idPerson;
          }
        })
      );
    }
  };

  const checkboxHandler = ({ target: { name, checked } }, man) => {
    setHuman([]);
    if (showGroups) {
      setShowGroups(false);
      setVisibleGroups(false);
    }

    let remaining = [];
    const personGroup = [...man.groups];

    if (idPerson.includes(name)) {
      setIdPerson(idPerson.filter((idMan) => idMan !== name));
    }

    if (idPerson.includes(name) === false) {
      setIdPerson((prevState) => [...prevState, name]);
    }
    currentUsers.forEach((parson) => {
      if (
        idPerson.includes(parson.id) &&
        parson.groups.every((group) => !remaining.includes(group.id)) &&
        parson.id !== man.id
      ) {
        remaining.push(...parson.groups.map((group) => group.id));
      }
    });

    if (checked === false) {
      setAddedGroup(addedGroup.filter((group) => remaining.includes(group)));
    }

    checkGroup(man);
  };

  const findByLetter = (letter) => {
    if (page === 'My favourites') {
      dispatch(
        actions.getUsers(
          `/contacts?isFavorite=1&byLetter=${letter}${
            idGroup[0] ? `&groupId=${idGroup[0].id}` : ''
          }`.trim()
        )
      );
      return;
    }

    if (page === 'Recently added') {
      dispatch(
        actions.getUsers(
          `/contacts?isRecently=true&byLetter=${letter}${
            idGroup[0] ? `&groupId=${idGroup[0].id}` : ''
          }`.trim()
        )
      );
      return;
    }

    if (page === 'All contacts') {
      dispatch(
        actions.getUsers(
          `/contacts?byLetter=${letter}${
            idGroup[0] ? `&groupId=${idGroup[0].id}` : ''
          }`.trim()
        )
      );
    }
  };

  const openDetails = (id) => {
    // dispatch(actions.setOneUser(people.filter((person) => person.id === id)));
    localStorage.setItem(
      'person',
      JSON.stringify(people.filter((person) => person.id === id))
    );
  };

  const handleFavourite = (id) => {
    dispatch(actions.getFavourite(id));
    localStorage.setItem(
      'person',
      JSON.stringify(people.filter((person) => person.id === id))
    );
  };

  const changeStar = (id, bool) => {
    if (
      (star[0] !== id && star.length < 2) ||
      (star[0] !== id && star.length === 2)
    ) {
      setStar([id, !bool]);
      return;
    }

    if (star[0] === id && star.length === 2) {
      setStar([id, !star[1]]);
    }
  };

  useEffect(() => {
    dispatch(actions.getIdPerson(idPerson));
  }, [dispatch, idPerson]);

  const removeIdPerson = useCallback(() => {
    setIdPerson([]);
    setCheckboxChecked([]);
  }, []);

  const addAllChecked = () => {
    setIdPerson(
      people
        .map((man) => {
          return man.id;
        })
        .filter((idPerson) => idPerson !== undefined)
    );

    const listGroups = allData.data
      .map((man) => {
        return man.groups.map((group) => group.id).join();
      })
      .join()
      .split(',');

    const allGroups = [...new Set(listGroups)];
  };

  const removeUser = (id, name) => {
    dispatch(actions.removeGroupContact(true));
    dispatch(actions.setIdUser(id));
    dispatch(actions.whatToDelete(`the contact "${name}"`));
  };

  const addIdGroups = ({ target: { checked } }, groupId) => {
    if (checked) {
      setAddedGroup((prev) => [...prev, groupId]);
      return;
    }

    setAddedGroup((prev) => prev.filter((id) => id !== groupId));
  };

  const sendGroups = () => {
    const sentIdPerson = human.length > 0 ? human : idPerson;

    dispatch(actions.addContactsGroups(sentIdPerson, addedGroup));

    const newPeople = [...people];
    let newArr = [];

    people.forEach((person, index) => {
      if (sentIdPerson.includes(person.id)) {
        newArr = addedGroup.map((id) =>
          groups.filter((group) => group.id === id)
        );

        newPeople[index].groups = [].concat(...newArr);
      }
    });
    setCheckboxChecked([]);
    setIdPerson([]);
    setVisibleGroups(!visibleGroups);
  };

  const visibleWindowGroups = (bool) => {
    setVisibleGroups(bool);
  };

  const mousePageXY = (e) => {
    const elements = document.querySelector('.contact-book__table-scroll');
    const field = elements.getBoundingClientRect();
    const windowInnerHeight = window.innerHeight;
    let x = 0,
      y = 0;
    x = field.width >= 710 ? field.width : 883;
    if (windowInnerHeight - e.clientY > 220) {
      y = e.clientY - field.top;
    } else {
      y = e.clientY - field.top - 235;
    }
    setСoordinates({ x: x, y: y });
  };

  const reduxIdPerson = useSelector(
    (state) => state.reducerContactBook.idPerson
  );

  let alphabet = [];
  console.log('start: ', currentUsers);
  return (
    <>
      {false ? (
        <div>Error</div>
      ) : (
        <>
          <section className="contact-book__table-block">
            <div className="contact-book__table-scroll">
              {visibleGroups && (
                <AddingContactToGroup
                  sendGroups={sendGroups}
                  addIdGroups={addIdGroups}
                  groups={groups}
                  addedGroup={addedGroup}
                  nameClass={nameClass}
                  coordinates={coordinates}
                  showGroups={showGroups}
                  setHuman={setHuman}
                  innerBorderRef={innerBorderRef}
                  config={config}
                />
              )}
              <table className="contact-book__table-wrapper">
                <thead>
                  {reduxIdPerson.length > 1 ? (
                    <TheadButtons
                      removeIdPerson={removeIdPerson}
                      addAllChecked={addAllChecked}
                      idContacts={idPerson}
                      visibleWindowGroups={visibleWindowGroups}
                      visibleGroups={visibleGroups}
                      config={config}
                    />
                  ) : (
                    <TheadTable />
                  )}
                </thead>
                <tbody
                  style={{
                    background: '#FFFFFF',
                  }}
                >
                  <tr className="contact-book__list-alph">
                    {allData.letters !== undefined &&
                      allData.total > 10 &&
                      allData.letters.map((letter, index) => (
                        <th
                          style={{ margin: '0', paddingBottom: '0' }}
                          className={`contact-book__item-alph-true-${config?.style}`}
                          key={index}
                          onClick={() => {
                            findByLetter(letter);
                          }}
                        >
                          {letter.toUpperCase()}
                        </th>
                      ))}
                  </tr>
                  {currentUsers.map((person, index) => {
                    if (
                      !alphabet.includes(person.display_name[0].toLowerCase())
                    ) {
                      alphabet.push(person.display_name[0].toLowerCase());
                      return (
                        <>
                          <tr
                            key={uuidv4()}
                            className="contact-book__tr-alphabet"
                          >
                            <td>
                              <input
                                className={`contact-book__input-checkbox-${config?.style}`}
                                id={person.display_name[0].toUpperCase()}
                                type="checkbox"
                                onChange={selectAllFriends}
                                checked={checkboxChecked.some(
                                  (check) =>
                                    check.name ===
                                    person.display_name[0].toUpperCase()
                                )}
                              />
                              <label
                                className={`contact-book__td-checkbox-${config?.style}`}
                                htmlFor={person.display_name[0].toUpperCase()}
                              ></label>
                              <span className="contact-book__td-text">
                                {person.display_name[0].toUpperCase()}
                              </span>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{ width: '200px' }}></td>
                          </tr>
                          <RowTableAll
                            mousePageXY={mousePageXY}
                            openDetails={openDetails}
                            person={person}
                            checkboxHandler={checkboxHandler}
                            idPerson={idPerson}
                            changeStar={changeStar}
                            handleFavourite={handleFavourite}
                            visibleWindowGroups={visibleWindowGroups}
                            setShowGroups={setShowGroups}
                            setIdPerson={setIdPerson}
                            setCheckboxChecked={setCheckboxChecked}
                            setHuman={setHuman}
                            setAddedGroup={setAddedGroup}
                            removeUser={removeUser}
                            index={index}
                            star={star}
                            visibleGroups={visibleGroups}
                            config={config}
                            key={person.id}
                          />
                        </>
                      );
                    }
                    return (
                      <RowTableAll
                        mousePageXY={mousePageXY}
                        openDetails={openDetails}
                        person={person}
                        checkboxHandler={checkboxHandler}
                        idPerson={idPerson}
                        changeStar={changeStar}
                        handleFavourite={handleFavourite}
                        visibleWindowGroups={visibleWindowGroups}
                        setShowGroups={setShowGroups}
                        setIdPerson={setIdPerson}
                        setCheckboxChecked={setCheckboxChecked}
                        setHuman={setHuman}
                        setAddedGroup={setAddedGroup}
                        removeUser={removeUser}
                        index={index}
                        star={star}
                        visibleGroups={visibleGroups}
                        config={config}
                        key={person.id}
                      />
                    );
                  })}
                </tbody>
              </table>
              {allData.total > 10 && (
                <div className="contact-book__block-pagination">
                  <div
                    className={`contact-book__inner-add-people-${config?.style}`}
                    onClick={addPeople}
                  >
                    <img
                      className="contact-book__img-arrow"
                      src={arrowDown}
                      alt="Arrow Down"
                    />
                    <span>Load more</span>
                  </div>
                  <p className="contact-book__show-contacts">
                    {`Showing ${1} to ${numberUser.length} of ${
                      allData.total
                    } contacts`}
                  </p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default TableContacts;
