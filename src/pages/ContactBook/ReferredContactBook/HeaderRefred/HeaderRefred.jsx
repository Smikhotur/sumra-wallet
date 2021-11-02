import React, { useState, useEffect } from 'react';
import search from '../../../../assets/images/contactBook/search.svg';
import actions from '../../../../store/contactBook/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TableReferred } from '../TableReferred/TableReferred.jsx';
import { Expectation } from '../../Expectation/Expectation';
import { HeaderWallet } from '../../HeaderWallet/HeaderWallet';

export const HeaderRefred = ({ config }) => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState('');
  const [defaultSelect, setDefaultSelect] = useState('A-Z');
  const pathname = window.location.pathname;
  const people = useSelector((state) => state.reducerContactBook.users);
  const allData = useSelector((state) => state.reducerContactBook.data);

  const findUser = ({ target: { value } }) => {
    setTextValue(value);
  };

  useEffect(() => {
    console.log('123');
    if (pathname.includes('referred-contact-book') && textValue.length === 0) {
      dispatch(actions.getUsers(`/contacts`));
    }

    if (pathname.includes('referred-contact-book') && textValue.length > 0) {
      const timeOutId = setTimeout(
        () => dispatch(actions.getUsers(`/contacts?search=${textValue}`)),
        1000
      );
      return () => clearTimeout(timeOutId);
    }
  }, [textValue]);

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
        page={'Referred'}
        allData={allData}
        config={config}
        textValue={textValue}
        findUser={findUser}
      />
      {people.length > 0 ? (
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
          <div className="contact-book__btn-inner">
            <Link
              to="/contact-book/contact_cash"
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
      ) : null}

      {people.length > 0 ? <TableReferred config={config} /> : <Expectation />}
    </>
  );
};
