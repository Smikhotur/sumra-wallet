import React, { useEffect, useState } from 'react';
import search from '../../../../assets/images/contactBook/search.svg';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../../store/contactBook/actions';
import TableContacts from '../../TableContacts/TableContacts.jsx';
import { HeaderWallet } from '../../HeaderWallet/HeaderWallet';

export const HeaderTable = ({ config }) => {
  const [textValue, setTextValue] = useState('');
  const [defaultSelect, setDefaultSelect] = useState('A-Z');

  const dispatch = useDispatch();
  const allData = useSelector((state) => state.reducerContactBook.data);
  const idGroup = useSelector((state) => state.reducerContactBook.idGroup);
  const findUser = ({ target: { value } }) => {
    setTextValue(value);
  };

  const handleInputChange = ({ target: { value } }) => {
    setDefaultSelect(value);
    if ('A-Z' === value) {
      dispatch(
        actions.getUsers(`/contacts?groupId=${idGroup}&sort%5Bby%5D=name`)
      );
      dispatch(actions.performUnfolding(false));
    }

    if ('Z-A' === value) {
      dispatch(actions.performUnfolding(true));
      dispatch(
        actions.getUsers(
          `/contacts?groupId=${idGroup}&sort%5Bby%5D=name&sort%5Border%5D=desc`
        )
      );
    }
  };

  let pathname = window.location.pathname;

  useEffect(() => {
    pathname = window.location.pathname;
    dispatch(actions.setOpenContactDetails(false));
    dispatch(
      actions.setFilterGroups(
        pathname.split('/')[pathname.split('/').length - 1]
      )
    );
  }, [window.location.pathname]);

  useEffect(() => {
    if (textValue.length === 0) {
      dispatch(actions.performUnfolding(false));
      dispatch(actions.getAllUsers([]));
      dispatch(actions.getUsers(`/contacts?groupId=${idGroup}`));
    }

    if (textValue.length > 0) {
      const timeOutId = setTimeout(
        () =>
          dispatch(
            actions.getUsers(`/contacts?search=${textValue}&groupId=${idGroup}`)
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

  return (
    <>
      <HeaderWallet
        page={page}
        allData={allData}
        config={config}
        textValue={textValue}
        findUser={findUser}
      />

      <section className="contact-book__form-inner">
        <div className="contact-book__input-inner">
          <div className="contact-book__for-select">
            <select
              style={{ width: '100%' }}
              className="contact-book__sort-alphabet"
              value={defaultSelect}
              onChange={handleInputChange}
            >
              <option value="A-Z">Sort by: A-Z</option>
              <option value="Z-A">Sort by: Z-A</option>
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
      </section>
      <TableContacts config={config} />
    </>
  );
};
