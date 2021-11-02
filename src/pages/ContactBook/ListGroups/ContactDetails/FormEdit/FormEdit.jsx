import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import addContactImg from '../../../../../assets/images/contactBook/addContact.png';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import actions from '../../../../../store/contactBook/actions';

export const FormEdit = ({ config }) => {
  const [checking, setChecking] = useState(true);
  const [phone, setPhone] = useState('');
  const [visible, setVisible] = useState(false);
  const [idInput, setIdInput] = useState('');
  const [infoPerson, setInfoPerson] = useState({
    first_name: JSON.parse(localStorage.getItem('person'))[0].first_name || '',
    last_name: JSON.parse(localStorage.getItem('person'))[0].last_name || '',
    email: JSON.parse(localStorage.getItem('person'))[0].email || '',
    phone: JSON.parse(localStorage.getItem('person'))[0].phone || '',
    jobTitle: '',
    birthday: JSON.parse(localStorage.getItem('person'))[0].birthday || '',
    personal: '',
  });
  const dispatch = useDispatch();
  const pathname = window.location.pathname;
  const pathReturn = pathname
    .split('/')
    .slice(0, pathname.split('/').length - 1)
    .join('/');

  const handleChange = ({ target: { name, value, files } }) => {
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      setInfoPerson((prevState) => ({
        ...prevState,
        [name]: fileReader,
      }));
      return;
    }
    setInfoPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.runPreloader(true));
    dispatch(
      actions.putUser(
        infoPerson,
        JSON.parse(localStorage.getItem('person'))[0].id
      )
    );
    setInfoPerson(() => ({
      photo: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      jobTitle: '',
      birthday: '',
      personal: '',
    }));
  };

  const changePhoneNumber = (e) => {
    setPhone(e);
    setInfoPerson((prevState) => ({
      ...prevState,
      phone: e,
    }));
  };

  const checkingPhoneNumber = () => {
    if (validator.isMobilePhone(phone)) {
      setChecking(true);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <form onSubmit={handleSubmit} action="">
        <div className="contact-details__form-edit">
          <label
            htmlFor="first-name"
            className={
              visible && idInput === 'first-name'
                ? `contact-details__label-visible-${config?.style}`
                : !infoPerson.first_name
                ? 'contact-details__label'
                : `contact-details__label-visible-${config?.style}`
            }
          >
            <i className="icon-person_outline"></i>
            <span>First name</span>
            <input
              style={
                infoPerson.first_name
                  ? { color: '#7A7B85' }
                  : { color: 'transparent' }
              }
              onChange={handleChange}
              onFocus={(e) => {
                setVisible(true);
                setIdInput(e.target.id);
              }}
              onBlur={() => {
                setVisible(false);
              }}
              id="first-name"
              name="first_name"
              type="text"
              value={infoPerson.first_name}
              className="contact-details__text"
            />
          </label>
          <label
            htmlFor="last-name"
            className={
              visible && idInput === 'last-name'
                ? `contact-details__label-visible-${config?.style}`
                : !infoPerson.last_name
                ? 'contact-details__label'
                : `contact-details__label-visible-${config?.style}`
            }
          >
            <span>Last name</span>
            <input
              style={
                infoPerson.last_name
                  ? { color: '#7A7B85' }
                  : { color: 'transparent' }
              }
              onChange={handleChange}
              onFocus={(e) => {
                setVisible(true);
                setIdInput(e.target.id);
              }}
              onBlur={() => {
                setVisible(false);
              }}
              id="last-name"
              name="last_name"
              type="text"
              value={infoPerson.last_name}
              className="contact-details__text-visible"
            />
          </label>
          <label
            htmlFor="job-title"
            className={
              visible && idInput === 'job-title'
                ? `contact-details__label-visible-${config?.style}`
                : !infoPerson.jobTitle
                ? 'contact-details__label'
                : `contact-details__label-visible-${config?.style}`
            }
          >
            <i className="icon-briefcase"></i>
            <span>Job title</span>
            <input
              style={
                infoPerson.jobTitle
                  ? { color: '#7A7B85' }
                  : { color: 'transparent' }
              }
              onChange={handleChange}
              onFocus={(e) => {
                setVisible(true);
                setIdInput(e.target.id);
              }}
              onBlur={() => {
                setVisible(false);
              }}
              id="job-title"
              name="jobTitle"
              type="text"
              value={infoPerson.jobTitle}
              className="contact-details__email-input"
            />
          </label>

          <label
            htmlFor="number-input"
            className={
              visible && idInput === 'number-input'
                ? `contact-details__label-visible-${config?.style}`
                : !infoPerson.email
                ? 'contact-details__label'
                : `contact-details__label-visible-${config?.style}`
            }
          >
            <i className="icon-mail_outline"></i>
            <span>Email</span>
            <input
              style={
                infoPerson.email
                  ? { color: '#7A7B85' }
                  : { color: 'transparent' }
              }
              onChange={handleChange}
              onFocus={(e) => {
                setVisible(true);
                setIdInput(e.target.id);
              }}
              onBlur={() => {
                setVisible(false);
              }}
              id="number-input"
              name="email"
              type="email"
              value={infoPerson.email}
              className="contact-details__number-input"
            />
          </label>

          <label
            htmlFor="email-input"
            className={
              visible && idInput === 'email-input'
                ? `contact-details__label-visible-${config?.style}`
                : !infoPerson.phone
                ? 'contact-details__label'
                : `contact-details__label-visible-${config?.style}`
            }
          >
            <span className="phone-input">Mobile phone</span>
            <PhoneInput
              required
              style={{ color: '#7A7B85' }}
              className="contact-details__number-phone"
              flags={flags}
              value={phone}
              id="email-input"
              name="phone"
              onChange={changePhoneNumber}
              onFocus={(e) => {
                setVisible(true);
                setIdInput(e.target.id);
              }}
              onBlur={() => {
                setVisible(false);
              }}
            />
          </label>

          <label
            htmlFor="birthday"
            className={
              visible && idInput === 'birthday'
                ? `contact-details__label-visible-${config?.style}`
                : !infoPerson.birthday
                ? 'contact-details__label'
                : `contact-details__label-visible-${config?.style}`
            }
          >
            <i className="icon-calendar"></i>
            <span>Birthday</span>
            <input
              style={
                infoPerson.birthday
                  ? { color: '#7A7B85' }
                  : { color: 'transparent' }
              }
              onChange={handleChange}
              onFocus={(e) => {
                setVisible(true);
                setIdInput(e.target.id);
              }}
              onBlur={() => {
                setVisible(false);
              }}
              id="birthday"
              name="birthday"
              type="date"
              value={infoPerson.birthday}
              className="contact-details__email-input contact-details__date-input"
            />
          </label>
          <label
            htmlFor="personal-page"
            className={
              visible && idInput === 'personal-page'
                ? `contact-details__label-visible-${config?.style}`
                : !infoPerson.personal
                ? 'contact-details__label'
                : `contact-details__label-visible-${config?.style}`
            }
          >
            <i className="icon-social"></i>
            <span>Personal page</span>
            <input
              onChange={handleChange}
              onFocus={(e) => {
                setVisible(true);
                setIdInput(e.target.id);
              }}
              onBlur={() => {
                setVisible(false);
              }}
              id="personal-page"
              name="personal"
              type="text"
              value={infoPerson.personal}
              className="contact-details__email-input"
            />
          </label>
        </div>
        <div className="contact-details__btn-block">
          <Link
            to={pathReturn}
            className={`contact-details__btn-save-${config?.style}`}
          >
            Cancel
          </Link>

          <button
            className={`contact-details__btn-save-${config?.style}`}
            type="submit"
          >
            Add contact
          </button>
        </div>
      </form>

      <div
        style={{ alignSelf: 'flex-start' }}
        className="contact-details__img-block"
      >
        <img src={addContactImg} alt="" />
      </div>
    </div>
  );
};
