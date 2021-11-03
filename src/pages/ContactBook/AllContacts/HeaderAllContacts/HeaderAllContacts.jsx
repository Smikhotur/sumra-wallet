import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../../../store/contactBook/actions';
import search from '../../../../assets/images/contactBook/search.svg';
import TableContacts from '../../TableContacts/TableContacts.jsx';
import { Expectation } from '../../Expectation/Expectation';
import { HeaderWallet } from '../../HeaderWallet/HeaderWallet';
import people from '../../../../store/contactBook/data.json';

const HeaderAllContacts = ({ config }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState('All contacts');
  const [textValue, setTextValue] = useState('');
  const [defaultSelect, setDefaultSelect] = useState('A-Z');
  const [idGroup, setIdGroup] = useState([]);
  people.sort((personA, personB) =>
    personA.display_name.localeCompare(personB.display_name)
  );
  // const people = useSelector((state) => state.reducerContactBook.users);
  // const people = useSelector((state) => state.reducerContactBook.users);
  const groups = useSelector((state) => state.reducerContactBook.groups);
  const allData = useSelector((state) => state.reducerContactBook.data);

  const findUser = ({ target: { value } }) => {
    setTextValue(value);
  };

  const handleInputChange = ({ target: { value } }) => {
    setDefaultSelect(value);
    if ('A-Z' === value) {
      dispatch(actions.getUsers('/contacts?sort%5Bby%5D=name'));
      dispatch(actions.performUnfolding(false));
    }

    if ('Z-A' === value) {
      dispatch(
        actions.getUsers('/contacts?sort%5Bby%5D=name&sort%5Border%5D=desc')
      );
      dispatch(actions.performUnfolding(true));
    }
  };

  let pathname = window.location.pathname;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pathname = window.location.pathname;
    dispatch(actions.setOpenContactDetails(false));
    dispatch(actions.setFilterGroups(''));
  }, [window.location.pathname]);

  useEffect(() => {
    console.log(textValue.length);
    dispatch(actions.performUnfolding(false));
    dispatch(actions.getAllUsers([]));
    if (pathname.includes('recently-added') && textValue.length === 0) {
      dispatch(actions.getUsers(`/contacts?isRecently=true`));
    }

    if (pathname.includes('recently-added') && textValue.length > 0) {
      const timeOutId = setTimeout(
        () =>
          dispatch(
            actions.getUsers(`/contacts?search=${textValue}&isRecently=true`)
          ),
        1000
      );
      return () => clearTimeout(timeOutId);
    }

    if (pathname.includes('all-contacts') && textValue.length === 0) {
      dispatch(actions.getUsers(`/contacts`));
    }

    if (pathname.includes('all-contacts') && textValue.length > 0) {
      const timeOutId = setTimeout(
        () => dispatch(actions.getUsers(`/contacts?search=${textValue}`)),
        1000
      );
      return () => clearTimeout(timeOutId);
    }

    if (pathname.includes('my-favourites') && textValue.length === 0) {
      dispatch(actions.getUsers(`/contacts?isFavorite=1`));
    }

    if (pathname.includes('my-favourites') && textValue.length > 0) {
      const timeOutId = setTimeout(
        () =>
          dispatch(
            actions.getUsers(`/contacts?search=${textValue}&isFavorite=1`)
          ),
        1000
      );
      return () => clearTimeout(timeOutId);
    }
  }, [textValue]);

  const page =
    pathname
      .split('/')
      [pathname.split('/').length - 1].replace(/-/g, ' ')[0]
      .toUpperCase() +
    pathname
      .split('/')
      [pathname.split('/').length - 1].replace(/-/g, ' ')
      .slice(1);

  const chooseGroup = ({ target: { value } }) => {
    setSelect(value);
    if (value === 'All contacts') {
      setIdGroup('');
      dispatch(actions.getUsers(`/contacts`));
      return;
    }

    if (value === 'My favourites') {
      dispatch(actions.getUsers(`/contacts?isFavorite=1`));
      return;
    }

    if (value === 'Recently added') {
      dispatch(actions.getUsers(`/contacts?isRecently=true`));
      return;
    }

    const group = groups.filter((group) => group.name === value);
    setIdGroup(group);
    if (page === 'All contacts') {
      dispatch(actions.getUsers(`/contacts?groupId=${group[0].id}`));
    }

    if (page === 'My favourites') {
      dispatch(
        actions.getUsers(`/contacts?isFavorite=1&groupId=${group[0].id}`)
      );
    }

    if (page === 'Recently added') {
      dispatch(
        actions.getUsers(`/contacts?isRecently=true&groupId=${group[0].id}`)
      );
    }
  };

  console.log(people);

  return (
    <>
      <HeaderWallet
        page={page}
        allData={allData}
        config={config}
        textValue={textValue}
        findUser={findUser}
      />
      {people.length > 0 ? (
        <div className="contact-book__header-contacts-sticky">
          <section className="contact-book__form-inner">
            <div className="contact-book__input-inner">
              <div className="contact-book__for-select">
                <select
                  className="contact-book__sort-alphabet"
                  value={defaultSelect}
                  onChange={handleInputChange}
                >
                  <option value="A-Z">Sort by: A-Z</option>
                  <option value="Z-A">Sort by: Z-A</option>
                </select>
                <select onChange={chooseGroup} className="contact-book__groups">
                  <option value={page}>{`Groups: ${page}`}</option>
                  {groups.map((group) => (
                    <option
                      name={group.name}
                      key={group.name}
                      value={group.name}
                    >
                      {`Groups: ${group.name}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="contact-book__find-blok">
                <input
                  className="contact-book__find-cash"
                  placeholder="Search"
                  type="text"
                  value={textValue}
                  onChange={findUser}
                />
                <img
                  className="contact-book__img-search"
                  src={search}
                  alt="search img"
                />
              </div>
            </div>
            <div className="contact-book__btn-inner">
              <Link
                to="/contact-book/contact-cash"
                className={`contact-book__btn-${config?.style}`}
              >
                <span>ContactBook cash</span>
                <i className="icon-dollar-sign" />
              </Link>
              <Link to={{ pathname, search: '?send-referral=true' }}>
                <button className={`contact-book__btn-${config?.style}`}>
                  <span>Send referrals</span>
                  <i className="icon-users" />
                </button>
              </Link>
            </div>
          </section>
        </div>
      ) : null}

      {people.length > 0 ? (
        <TableContacts config={config} select={select} idGroup={idGroup} />
      ) : (
        <Expectation />
      )}
    </>
  );
};

export default HeaderAllContacts;
