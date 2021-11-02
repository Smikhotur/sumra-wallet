/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useCallback, useEffect, useState } from 'react';
import arrowDown from '../../../../assets/images/contactBook/arrowDown.svg';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../../store/contactBook/actions';
import { TheadTableReferred } from './TheadTableReferred/TheadTableReferred.jsx';
import TheadButtonsreferred from './TheadButtonsreferred/TheadButtonsreferred.jsx';
import RowTable from './RowTable/RowTable';

export const TableReferred = ({ config }) => {
  const [idPerson, setIdPerson] = useState([]);
  const [checkboxChecked, setCheckboxChecked] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(2);
  const dispatch = useDispatch();
  const people = useSelector((state) => state.reducerContactBook.users);
  let currentUsers = people;
  const allData = useSelector((state) => state.reducerContactBook.data);
  const reduxIdPerson = useSelector(
    (state) => state.reducerContactBook.idPerson
  );
  const numberUser = currentUsers.filter(
    (user) => Object.keys(user).length > 1
  );

  const addPeople = () => {
    if (numberOfPages <= allData.last_page) {
      setNumberOfPages((prev) => prev + 1);
      dispatch(actions.getPaginationUsers(numberOfPages));
    }
  };

  const checkWord = (id) => {
    return checkboxChecked.some((check) => check.name === id);
  };

  const selectAllFriends = ({ target: { id, checked } }) => {
    if (id.length === 1 && checked === true) {
      setCheckboxChecked((prev) => [...prev].concat({ name: id }));
    }

    if (id.length === 1 && checked === false && checkWord(id)) {
      setCheckboxChecked((prev) => prev.filter((check) => check.name !== id));
    }

    if (checked === true) {
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

  const checkboxHandler = ({ target: { name } }) => {
    if (idPerson.includes(name)) {
      setIdPerson(idPerson.filter((idMan) => idMan !== name));
    }

    if (idPerson.includes(name) === false) {
      setIdPerson((prevState) => [...prevState, name]);
    }
  };

  const openDetails = (id) => {
    dispatch(actions.setOneUser(people.filter((person) => person.id === id)));
    localStorage.setItem(
      'person',
      JSON.stringify(people.filter((person) => person.id === id))
    );
  };

  useEffect(() => {
    dispatch(actions.getIdPerson(idPerson));
  }, [dispatch, idPerson]);

  const removeIdPerson = () => {
    console.log('remove');
    setIdPerson([]);
    setCheckboxChecked([]);
  };

  const addAllChecked = useCallback(() => {
    setIdPerson(
      people
        .map((man) => {
          return man.id;
        })
        .filter((idPerson) => idPerson !== undefined)
    );
  }, []);

  let alphabet = [];
  return (
    <>
      {false ? (
        <div>Error</div>
      ) : (
        <>
          <section className="contact-book__table-block">
            <div className="contact-book__scroll">
              <table className="contact-book__table-wrapper">
                <thead>
                  {reduxIdPerson.length > 1 ? (
                    <TheadButtonsreferred
                      removeIdPerson={removeIdPerson}
                      addAllChecked={addAllChecked}
                      idContacts={idPerson}
                      config={config}
                    />
                  ) : (
                    <TheadTableReferred />
                  )}
                </thead>
                <tbody
                  style={{
                    boxShadow: '0px 5px 15px rgba(88, 86, 104, 0.12)',
                  }}
                >
                  {currentUsers.map((person, index) => {
                    if (
                      !alphabet.includes(person.display_name[0].toLowerCase())
                    ) {
                      alphabet.push(person.display_name[0].toLowerCase());
                      return (
                        <>
                          <tr
                            key={person.display_name[0]}
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
                          </tr>
                          <RowTable
                            person={person}
                            openDetails={openDetails}
                            checkboxHandler={checkboxHandler}
                            index={index}
                            idPerson={idPerson}
                            key={person.id}
                            config={config}
                          />
                        </>
                      );
                    }
                    return (
                      <RowTable
                        person={person}
                        openDetails={openDetails}
                        checkboxHandler={checkboxHandler}
                        index={index}
                        idPerson={idPerson}
                        key={person.id}
                        config={config}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

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
                people.length
              } contacts`}
            </p>
          </div>
        </>
      )}
    </>
  );
};
