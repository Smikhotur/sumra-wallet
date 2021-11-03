/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import giftBox from '../../../assets/images/contactBook/giftBox.png';
import money from '../../../assets/images/contactBook/money.png';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../store/contactBook/actions';
import classNames from 'classnames';
import NavigationSidebar from '../NavigationSidebar/NavigationSidebar.jsx';

const SidebarContactBook = ({ config }) => {
  const [newTextInput, setNewTextInput] = useState('');
  const [idGroup, setIdGroup] = useState('');
  const [groupId, setGroupId] = useState('');
  const [editTitle, setEditTitle] = useState(false);
  const [visibleSMS, setVisibleSms] = useState(false);
  const [smallName, setSmallName] = useState(false);
  const [similar, setSimilar] = useState(false);
  const [burger, setBurger] = useState(true);
  const [del, setDel] = useState(false);
  const [colorSvg, setColorSvg] = useState(false);

  const [linkIdColor, setLinkIdColor] = useState('');
  const dispatch = useDispatch();
  let pathname = window.location.pathname;

  useEffect(() => {
    pathname = window.location.pathname;
  }, [window.location.pathname]);
  const modalVisible = useSelector((state) => state.reducerContactBook.modal);

  const groups = useSelector((state) => state.reducerContactBook.groups);

  const removeGroup = (name) => {
    dispatch(actions.removeGroupContact(true));
    dispatch(actions.setIdUser(idGroup));
    dispatch(actions.whatToDelete(`the group "${name}"`));
  };

  const handleEdit = (e) => {
    setNewTextInput(e.target.value);
  };

  const handleDblClick = (event, title, id) => {
    event.preventDefault();
    setEditTitle(!editTitle);
    setNewTextInput(title);
    setGroupId(id);
    setVisibleSms(false);
  };

  function similarWords() {
    return groups.some(
      (group) => group.name.toLowerCase() === newTextInput.toLowerCase()
    );
  }

  function checkName() {
    dispatch(actions.runPreloader(true));
    if (newTextInput.length >= 3 && !similarWords()) {
      dispatch(actions.putGroups(newTextInput, groupId));
    } else if (newTextInput.length < 3) {
      dispatch(actions.runPreloader(false));
      setSmallName(true);
      setTimeout(() => {
        setSmallName(false);
      }, 3000);
    } else {
      dispatch(actions.runPreloader(false));
      setSimilar(true);
      setTimeout(() => {
        setSimilar(false);
      }, 3000);
    }
  }

  const handleKeyUp = (event) => {
    const { key } = event;

    switch (key) {
      case 'Enter':
        setEditTitle(false);
        setVisibleSms(false);
        checkName();
        break;

      case 'Escape':
        setEditTitle(false);
        setVisibleSms(false);
        checkName();
        break;

      default:
        break;
    }
  };

  const handleBlur = () => {
    setEditTitle(false);
    checkName();
  };

  const linkId = ({ currentTarget: { id } }) => {
    setLinkIdColor(id);
  };

  return (
    <section
      className={
        burger
          ? `contact-book__sidebar-block-${config?.style}`
          : `contact-book__sidebar-block-visible-${config?.style}`
      }
    >
      <div>
        <img
          className={`contact-book__logo-img-${config?.style}`}
          src={config?.logo}
          alt="logo on the page Contact Book"
        />
        <div
          id="menu"
          onClick={() => {
            setBurger(!burger);
          }}
        >
          <div id={`burger-${config?.style}`}>
            <input type="checkbox" />
            <span id={`span4-${config?.style}`}></span>
            <span id={`span5-${config?.style}`}></span>
            <span id={`span6-${config?.style}`}></span>
          </div>
        </div>
      </div>
      <div className={`contact-book__scroll-inner${config?.style}`}>
        <div className={`contact-book__scroll-${config?.style}`}>
          <div>
            <div
              className={`contact-book__back-${config?.style}`}
              onClick={() => {
                config?.routes.setPath('/sumra-wallet');
              }}
              onMouseMove={() => {
                setColorSvg(true);
              }}
              onMouseOut={() => {
                setColorSvg(false);
              }}
            >
              {config?.style === 'sumra-chat' ||
              config?.style === 'sumra-meet' ? (
                config?.style === 'sumra-chat' ? (
                  <svg
                    style={{ marginRight: '10px' }}
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.7559 0.410704C7.08134 0.736141 7.08134 1.26378 6.7559 1.58922L3.17849 5.16663H12.8333C13.2935 5.16663 13.6666 5.53972 13.6666 5.99996C13.6666 6.4602 13.2935 6.83329 12.8333 6.83329H3.17849L6.7559 10.4107C7.08134 10.7361 7.08134 11.2638 6.7559 11.5892C6.43046 11.9147 5.90283 11.9147 5.57739 11.5892L0.577391 6.58922C0.42111 6.43293 0.333313 6.22097 0.333313 5.99996C0.333313 5.77895 0.42111 5.56698 0.577391 5.4107L5.57739 0.410704C5.90283 0.0852667 6.43046 0.0852667 6.7559 0.410704Z"
                      fill={
                        colorSvg && config?.style === 'sumra-chat'
                          ? '#DD7021'
                          : '#8A94A6'
                      }
                    />
                  </svg>
                ) : (
                  <svg
                    style={{ marginRight: '10px' }}
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.7559 0.410704C7.08134 0.736141 7.08134 1.26378 6.7559 1.58922L3.17849 5.16663H12.8333C13.2935 5.16663 13.6666 5.53972 13.6666 5.99996C13.6666 6.4602 13.2935 6.83329 12.8333 6.83329H3.17849L6.7559 10.4107C7.08134 10.7361 7.08134 11.2638 6.7559 11.5892C6.43046 11.9147 5.90283 11.9147 5.57739 11.5892L0.577391 6.58922C0.42111 6.43293 0.333313 6.22097 0.333313 5.99996C0.333313 5.77895 0.42111 5.56698 0.577391 5.4107L5.57739 0.410704C5.90283 0.0852667 6.43046 0.0852667 6.7559 0.410704Z"
                      fill={
                        colorSvg && config?.style === 'sumra-meet'
                          ? '#377DFF'
                          : '#8A94A6'
                      }
                    />
                  </svg>
                )
              ) : (
                <i className="icon-arrow-left"></i>
              )}
              Back
            </div>
            <h3 className={`contact-book__title-sidebar-${config?.style}`}>
              Contacts
            </h3>
            <NavigationSidebar config={config} />

            <h3 className={`contact-book__title-sidebar-${config?.style}`}>
              Groups
              <span
                className={
                  visibleSMS
                    ? `contact-book__message-visible-${config?.style}`
                    : `contact-book__message-${config?.style}`
                }
              >
                Double click to change the name
              </span>
              <span
                className={
                  smallName
                    ? `contact-book__message-visible-${config?.style}`
                    : `contact-book__message-${config?.style}`
                }
              >
                The name must be at least three characters
              </span>
              <span
                className={
                  similar
                    ? `contact-book__message-visible-${config?.style}`
                    : `contact-book__message-${config?.style}`
                }
              >
                This name already exists
              </span>
            </h3>
            {true ? null : (
              <ul className={`contact-book__list-group-${config?.style}`}>
                {groups.map((group) => (
                  <Link
                    id={`${group.name.replace(/\s+/g, '-')}`}
                    key={group.id}
                    to={`/contact-book/${group.name.replace(/\s+/g, '-')}`}
                    className={classNames(
                      `contact-book__more-btn-${config?.style} contact-book__group-link-${config?.style}`,
                      {
                        [`contact-book__more-btn-active-${config?.style} contact-book__group-link${config?.style}`]:
                          pathname.match(`/${group.name.replace(/\s+/g, '-')}`),
                      }
                    )}
                    onClick={() => {
                      dispatch(actions.setIdGroup(group.id));
                    }}
                    onMouseOver={() => {
                      setDel(true);
                      setIdGroup(group.id);
                      setColorSvg(true);
                      linkId();
                    }}
                    onMouseOut={() => {
                      setDel(false);
                      setIdGroup(group.id);
                      setColorSvg(false);
                      linkId();
                    }}
                    onDoubleClick={(event) =>
                      handleDblClick(event, group.name, group.id)
                    }
                  >
                    <>
                      <div style={{ display: 'flex' }}>
                        {config?.style === 'sumra-chat' ||
                        config?.style === 'sumra-meet' ? (
                          config?.style === 'sumra-chat' ? (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.99997 10C8.20911 10 9.99997 8.20915 9.99997 6.00002C9.99997 3.79088 8.20911 2.00002 5.99997 2.00002C3.79083 2.00002 1.99997 3.79088 1.99997 6.00002C1.99997 8.20915 3.79083 10 5.99997 10ZM8.00003 5.99998C8.00003 7.10455 7.1046 7.99998 6.00003 7.99998C4.89546 7.99998 4.00003 7.10455 4.00003 5.99998C4.00003 4.89542 4.89546 3.99998 6.00003 3.99998C7.1046 3.99998 8.00003 4.89542 8.00003 5.99998Z"
                                fill={
                                  colorSvg && config?.style === 'sumra-chat'
                                    ? linkIdColor ===
                                      group.name.replace(/\s+/g, '-')
                                      ? '#DD7021'
                                      : '#8A94A6'
                                    : pathname.match(
                                        group.name.replace(/\s+/g, '-')
                                      )
                                    ? '#DD7021'
                                    : '#8A94A6'
                                }
                              />
                            </svg>
                          ) : (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.99997 10C8.20911 10 9.99997 8.20915 9.99997 6.00002C9.99997 3.79088 8.20911 2.00002 5.99997 2.00002C3.79083 2.00002 1.99997 3.79088 1.99997 6.00002C1.99997 8.20915 3.79083 10 5.99997 10ZM8.00003 5.99998C8.00003 7.10455 7.1046 7.99998 6.00003 7.99998C4.89546 7.99998 4.00003 7.10455 4.00003 5.99998C4.00003 4.89542 4.89546 3.99998 6.00003 3.99998C7.1046 3.99998 8.00003 4.89542 8.00003 5.99998Z"
                                fill={
                                  colorSvg && config?.style === 'sumra-meet'
                                    ? linkIdColor ===
                                      group.name.replace(/\s+/g, '-')
                                      ? '#377DFF'
                                      : '#8A94A6'
                                    : pathname.match(
                                        group.name.replace(/\s+/g, '-')
                                      )
                                    ? '#377DFF'
                                    : '#8A94A6'
                                }
                              />
                            </svg>
                          )
                        ) : (
                          <i className="icon-disc" />
                        )}
                        <li
                          title={group.name}
                          className={`contact-book__item-group-${config?.style}`}
                        >
                          {editTitle && groupId === group.id ? (
                            <input
                              type="text"
                              className={`contact-book__imput-edit-${config?.style}`}
                              value={newTextInput}
                              onChange={handleEdit}
                              onKeyUp={handleKeyUp}
                              onBlur={handleBlur}
                            />
                          ) : (
                            <span
                              onMouseOver={() => {
                                setVisibleSms(true);
                              }}
                              onMouseOut={() => {
                                setDel(false);
                                setVisibleSms(false);
                              }}
                            >
                              {group.name.length <= 16
                                ? group.name[0].toUpperCase() +
                                  group.name.slice(1)
                                : group.name[0].toUpperCase() +
                                  group.name.slice(1, 16) +
                                  '...'}
                            </span>
                          )}
                        </li>
                      </div>
                      <span
                        title="Delete"
                        onClick={() => {
                          removeGroup(group.name);
                        }}
                        className={
                          del && idGroup === group.id
                            ? `contact-book__group-del-visible-${config?.style}`
                            : `contact-book__group-del-${config?.style}`
                        }
                      >
                        <i className="icon-trash-2"></i>
                      </span>
                    </>
                  </Link>
                ))}
              </ul>
            )}

            <div
              id="add-new-group"
              className={`contact-book__add-new-group-${config?.style}`}
              onClick={() => {
                dispatch(actions.changeModal(!modalVisible));
              }}
              onMouseMove={(e) => {
                setColorSvg(true);
                linkId(e);
              }}
              onMouseOut={(e) => {
                setColorSvg(false);
                linkId(e);
              }}
            >
              {config?.style === 'sumra-chat' ||
              config?.style === 'sumra-meet' ? (
                config?.style === 'sumra-chat' ? (
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.92504 9.71411C3.98809 10.1566 4.44931 10.5 5.00889 10.5C5.61151 10.5 6.10002 10.1016 6.1 9.61029L6.09403 6.58834L9.11036 6.5823L9.21411 6.57496C9.65658 6.51191 10 6.05069 10 5.49111C9.99998 4.88849 9.60165 4.39998 9.11029 4.4L6.0892 4.40597L6.0823 1.38971L6.07591 1.29277C6.01669 0.847017 5.55365 0.500019 4.9912 0.5L4.86395 0.505981C4.32127 0.557355 3.90002 0.933382 3.9 1.38964L3.90683 4.4108L0.889714 4.4177L0.792773 4.42409C0.347017 4.48331 1.88771e-05 4.94635 0 5.5088L0.00598124 5.63605C0.0573553 6.17873 0.433382 6.59998 0.889641 6.6L3.91166 6.59316L3.9177 9.61036L3.92504 9.71411Z"
                      fill={
                        colorSvg && config?.style === 'sumra-chat'
                          ? linkIdColor === 'add-new-group'
                            ? '#DD7021'
                            : '#8A94A6'
                          : pathname.match('add-new-group')
                          ? '#DD7021'
                          : '#8A94A6'
                      }
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.92504 9.71411C3.98809 10.1566 4.44931 10.5 5.00889 10.5C5.61151 10.5 6.10002 10.1016 6.1 9.61029L6.09403 6.58834L9.11036 6.5823L9.21411 6.57496C9.65658 6.51191 10 6.05069 10 5.49111C9.99998 4.88849 9.60165 4.39998 9.11029 4.4L6.0892 4.40597L6.0823 1.38971L6.07591 1.29277C6.01669 0.847017 5.55365 0.500019 4.9912 0.5L4.86395 0.505981C4.32127 0.557355 3.90002 0.933382 3.9 1.38964L3.90683 4.4108L0.889714 4.4177L0.792773 4.42409C0.347017 4.48331 1.88771e-05 4.94635 0 5.5088L0.00598124 5.63605C0.0573553 6.17873 0.433382 6.59998 0.889641 6.6L3.91166 6.59316L3.9177 9.61036L3.92504 9.71411Z"
                      fill={
                        colorSvg && config?.style === 'sumra-meet'
                          ? linkIdColor === 'add-new-group'
                            ? '#377DFF'
                            : '#8A94A6'
                          : pathname.match('add-new-group')
                          ? '#377DFF'
                          : '#8A94A6'
                      }
                    />
                  </svg>
                )
              ) : (
                <i className="icon-plus"></i>
              )}
              <span>Add new group</span>
            </div>
            <Link
              id="import-contacts"
              to={{
                pathname,
                search: '?import-contacts=true',
              }}
              className={`contact-book__btn-import-${config?.style}`}
              onMouseMove={(e) => {
                setColorSvg(true);
                linkId(e);
              }}
              onMouseOut={(e) => {
                setColorSvg(false);
                linkId(e);
              }}
            >
              {config?.style === 'sumra-chat' ||
              config?.style === 'sumra-meet' ? (
                config?.style === 'sumra-chat' ? (
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16669 4.14901L7.25002 6.06786C6.91669 6.40157 6.41669 6.40157 6.08335 6.06786C5.75002 5.73415 5.75002 5.23358 6.08335 4.89987L9.41669 1.56274C9.45835 1.52103 9.50002 1.50017 9.54169 1.47931C9.58335 1.45846 9.62502 1.4376 9.66669 1.39588C9.91669 1.31246 10.1667 1.31246 10.3334 1.39588C10.4167 1.39588 10.5 1.47931 10.5834 1.56274L13.9167 4.89987C14.25 5.23358 14.25 5.73415 13.9167 6.06786C13.75 6.23472 13.5834 6.31814 13.3334 6.31814C13.0834 6.31814 12.9167 6.23472 12.75 6.06786L10.8334 4.14901V13.8267C10.8334 14.3272 10.5 14.661 10 14.661C9.50002 14.661 9.16669 14.3272 9.16669 13.8267V4.14901ZM18.3334 17.1638V14.661C18.3334 14.1604 18 13.8267 17.5 13.8267C17 13.8267 16.6667 14.1604 16.6667 14.661V17.1638C16.6667 17.6644 16.3334 17.9981 15.8334 17.9981H4.16669C3.66669 17.9981 3.33335 17.6644 3.33335 17.1638V14.661C3.33335 14.1604 3.00002 13.8267 2.50002 13.8267C2.00002 13.8267 1.66669 14.1604 1.66669 14.661V17.1638C1.66669 18.5821 2.75002 19.6666 4.16669 19.6666H15.8334C17.25 19.6666 18.3334 18.5821 18.3334 17.1638Z"
                      fill={
                        colorSvg && config?.style === 'sumra-chat'
                          ? linkIdColor === 'import-contacts'
                            ? '#DD7021'
                            : '#8A94A6'
                          : pathname.match('import-contacts')
                          ? '#DD7021'
                          : '#8A94A6'
                      }
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16669 4.14901L7.25002 6.06786C6.91669 6.40157 6.41669 6.40157 6.08335 6.06786C5.75002 5.73415 5.75002 5.23358 6.08335 4.89987L9.41669 1.56274C9.45835 1.52103 9.50002 1.50017 9.54169 1.47931C9.58335 1.45846 9.62502 1.4376 9.66669 1.39588C9.91669 1.31246 10.1667 1.31246 10.3334 1.39588C10.4167 1.39588 10.5 1.47931 10.5834 1.56274L13.9167 4.89987C14.25 5.23358 14.25 5.73415 13.9167 6.06786C13.75 6.23472 13.5834 6.31814 13.3334 6.31814C13.0834 6.31814 12.9167 6.23472 12.75 6.06786L10.8334 4.14901V13.8267C10.8334 14.3272 10.5 14.661 10 14.661C9.50002 14.661 9.16669 14.3272 9.16669 13.8267V4.14901ZM18.3334 17.1638V14.661C18.3334 14.1604 18 13.8267 17.5 13.8267C17 13.8267 16.6667 14.1604 16.6667 14.661V17.1638C16.6667 17.6644 16.3334 17.9981 15.8334 17.9981H4.16669C3.66669 17.9981 3.33335 17.6644 3.33335 17.1638V14.661C3.33335 14.1604 3.00002 13.8267 2.50002 13.8267C2.00002 13.8267 1.66669 14.1604 1.66669 14.661V17.1638C1.66669 18.5821 2.75002 19.6666 4.16669 19.6666H15.8334C17.25 19.6666 18.3334 18.5821 18.3334 17.1638Z"
                      fill={
                        colorSvg && config?.style === 'sumra-chat'
                          ? linkIdColor === 'import-contacts'
                            ? '#DD7021'
                            : '#8A94A6'
                          : pathname.match('import-contacts')
                          ? '#DD7021'
                          : '#8A94A6'
                      }
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16669 4.14901L7.25002 6.06786C6.91669 6.40157 6.41669 6.40157 6.08335 6.06786C5.75002 5.73415 5.75002 5.23358 6.08335 4.89987L9.41669 1.56274C9.45835 1.52103 9.50002 1.50017 9.54169 1.47931C9.58335 1.45846 9.62502 1.4376 9.66669 1.39588C9.91669 1.31246 10.1667 1.31246 10.3334 1.39588C10.4167 1.39588 10.5 1.47931 10.5834 1.56274L13.9167 4.89987C14.25 5.23358 14.25 5.73415 13.9167 6.06786C13.75 6.23472 13.5834 6.31814 13.3334 6.31814C13.0834 6.31814 12.9167 6.23472 12.75 6.06786L10.8334 4.14901V13.8267C10.8334 14.3272 10.5 14.661 10 14.661C9.50002 14.661 9.16669 14.3272 9.16669 13.8267V4.14901ZM18.3334 17.1638V14.661C18.3334 14.1604 18 13.8267 17.5 13.8267C17 13.8267 16.6667 14.1604 16.6667 14.661V17.1638C16.6667 17.6644 16.3334 17.9981 15.8334 17.9981H4.16669C3.66669 17.9981 3.33335 17.6644 3.33335 17.1638V14.661C3.33335 14.1604 3.00002 13.8267 2.50002 13.8267C2.00002 13.8267 1.66669 14.1604 1.66669 14.661V17.1638C1.66669 18.5821 2.75002 19.6666 4.16669 19.6666H15.8334C17.25 19.6666 18.3334 18.5821 18.3334 17.1638Z"
                      fill={
                        colorSvg && config?.style === 'sumra-meet'
                          ? linkIdColor === 'import-contacts'
                            ? '#377DFF'
                            : '#8A94A6'
                          : pathname.match('import-contacts')
                          ? '#377DFF'
                          : '#8A94A6'
                      }
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16669 4.14901L7.25002 6.06786C6.91669 6.40157 6.41669 6.40157 6.08335 6.06786C5.75002 5.73415 5.75002 5.23358 6.08335 4.89987L9.41669 1.56274C9.45835 1.52103 9.50002 1.50017 9.54169 1.47931C9.58335 1.45846 9.62502 1.4376 9.66669 1.39588C9.91669 1.31246 10.1667 1.31246 10.3334 1.39588C10.4167 1.39588 10.5 1.47931 10.5834 1.56274L13.9167 4.89987C14.25 5.23358 14.25 5.73415 13.9167 6.06786C13.75 6.23472 13.5834 6.31814 13.3334 6.31814C13.0834 6.31814 12.9167 6.23472 12.75 6.06786L10.8334 4.14901V13.8267C10.8334 14.3272 10.5 14.661 10 14.661C9.50002 14.661 9.16669 14.3272 9.16669 13.8267V4.14901ZM18.3334 17.1638V14.661C18.3334 14.1604 18 13.8267 17.5 13.8267C17 13.8267 16.6667 14.1604 16.6667 14.661V17.1638C16.6667 17.6644 16.3334 17.9981 15.8334 17.9981H4.16669C3.66669 17.9981 3.33335 17.6644 3.33335 17.1638V14.661C3.33335 14.1604 3.00002 13.8267 2.50002 13.8267C2.00002 13.8267 1.66669 14.1604 1.66669 14.661V17.1638C1.66669 18.5821 2.75002 19.6666 4.16669 19.6666H15.8334C17.25 19.6666 18.3334 18.5821 18.3334 17.1638Z"
                      fill={
                        colorSvg && config?.style === 'sumra-meet'
                          ? linkIdColor === 'import-contacts'
                            ? '#377DFF'
                            : '#8A94A6'
                          : pathname.match('import-contacts')
                          ? '#377DFF'
                          : '#8A94A6'
                      }
                    />
                  </svg>
                )
              ) : (
                <i className="icon-upload" />
              )}
              <span>Import</span>
            </Link>
            <Link
              id="export-contacts"
              to={{
                pathname,
                search: '?export-contacts=true',
              }}
              className={`contact-book__btn-import-${config?.style}`}
              onMouseMove={(e) => {
                setColorSvg(true);
                linkId(e);
              }}
              onMouseOut={(e) => {
                setColorSvg(false);
                linkId(e);
              }}
            >
              {config?.style === 'sumra-chat' ||
              config?.style === 'sumra-meet' ? (
                config?.style === 'sumra-chat' ? (
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9055 7.16674C16.5547 7.16674 18.039 8.00007 18.9461 9.25007C19.6883 10.4167 20.183 11.6667 19.9356 13.0001C19.6883 14.3334 18.9461 15.5001 17.8741 16.2501C17.7092 16.3334 17.5443 16.4167 17.3793 16.4167C17.132 16.4167 16.8846 16.3334 16.7196 16.0834C16.3898 15.6667 16.4723 15.1667 16.8846 14.9167C17.5443 14.4167 18.039 13.6667 18.204 12.7501C18.3689 11.8334 18.1215 11.0001 17.6267 10.2501C16.967 9.3334 15.9775 8.83341 14.9055 8.83341H13.9159C13.5036 8.83341 13.1738 8.50007 13.0913 8.16674C12.3492 5.0834 9.13317 3.16674 6.08209 4.00007C4.59778 4.3334 3.36086 5.3334 2.53624 6.66674C1.71162 8.00007 1.46424 9.5834 1.87655 11.0834C2.04147 12.0001 2.53624 12.8334 3.11347 13.5001C3.44332 13.8334 3.36086 14.3334 3.03101 14.6667C2.70116 15.0001 2.20639 14.9167 1.87655 14.5834C1.05193 13.7501 0.557159 12.6667 0.227313 11.5001C-0.267457 9.5834 0.0623894 7.58341 1.05193 5.8334C2.12393 4.0834 3.6907 2.91674 5.66978 2.41674C9.38056 1.41674 13.2563 3.50007 14.4932 7.16674H14.9055ZM13.8335 15.2501C14.1633 14.9167 14.1633 14.4167 13.8335 14.0834C13.5036 13.7501 13.0089 13.7501 12.679 14.0834L10.7824 16.0001V10.5001C10.7824 10.0001 10.4526 9.66674 9.95779 9.66674C9.46302 9.66674 9.13317 10.0001 9.13317 10.5001V16.0001L7.23655 14.0834C6.90671 13.7501 6.41194 13.7501 6.08209 14.0834C5.75224 14.4167 5.75224 14.9167 6.08209 15.2501L9.38056 18.5834C9.42179 18.6251 9.46302 18.6459 9.50425 18.6667C9.54548 18.6876 9.58671 18.7084 9.62794 18.7501C9.7104 18.8334 9.87533 18.8334 9.95779 18.8334C10.0402 18.8334 10.2052 18.8334 10.2876 18.7501C10.3701 18.7501 10.4526 18.6667 10.535 18.5834L13.8335 15.2501Z"
                      fill={
                        colorSvg && config?.style === 'sumra-chat'
                          ? linkIdColor === 'export-contacts'
                            ? '#DD7021'
                            : '#8A94A6'
                          : pathname.match('export-contacts')
                          ? '#DD7021'
                          : '#8A94A6'
                      }
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9055 7.16674C16.5547 7.16674 18.039 8.00007 18.9461 9.25007C19.6883 10.4167 20.183 11.6667 19.9356 13.0001C19.6883 14.3334 18.9461 15.5001 17.8741 16.2501C17.7092 16.3334 17.5443 16.4167 17.3793 16.4167C17.132 16.4167 16.8846 16.3334 16.7196 16.0834C16.3898 15.6667 16.4723 15.1667 16.8846 14.9167C17.5443 14.4167 18.039 13.6667 18.204 12.7501C18.3689 11.8334 18.1215 11.0001 17.6267 10.2501C16.967 9.3334 15.9775 8.83341 14.9055 8.83341H13.9159C13.5036 8.83341 13.1738 8.50007 13.0913 8.16674C12.3492 5.0834 9.13317 3.16674 6.08209 4.00007C4.59778 4.3334 3.36086 5.3334 2.53624 6.66674C1.71162 8.00007 1.46424 9.5834 1.87655 11.0834C2.04147 12.0001 2.53624 12.8334 3.11347 13.5001C3.44332 13.8334 3.36086 14.3334 3.03101 14.6667C2.70116 15.0001 2.20639 14.9167 1.87655 14.5834C1.05193 13.7501 0.557159 12.6667 0.227313 11.5001C-0.267457 9.5834 0.0623894 7.58341 1.05193 5.8334C2.12393 4.0834 3.6907 2.91674 5.66978 2.41674C9.38056 1.41674 13.2563 3.50007 14.4932 7.16674H14.9055ZM13.8335 15.2501C14.1633 14.9167 14.1633 14.4167 13.8335 14.0834C13.5036 13.7501 13.0089 13.7501 12.679 14.0834L10.7824 16.0001V10.5001C10.7824 10.0001 10.4526 9.66674 9.95779 9.66674C9.46302 9.66674 9.13317 10.0001 9.13317 10.5001V16.0001L7.23655 14.0834C6.90671 13.7501 6.41194 13.7501 6.08209 14.0834C5.75224 14.4167 5.75224 14.9167 6.08209 15.2501L9.38056 18.5834C9.42179 18.6251 9.46302 18.6459 9.50425 18.6667C9.54548 18.6876 9.58671 18.7084 9.62794 18.7501C9.7104 18.8334 9.87533 18.8334 9.95779 18.8334C10.0402 18.8334 10.2052 18.8334 10.2876 18.7501C10.3701 18.7501 10.4526 18.6667 10.535 18.5834L13.8335 15.2501Z"
                      fill={
                        colorSvg && config?.style === 'sumra-chat'
                          ? linkIdColor === 'export-contacts'
                            ? '#DD7021'
                            : '#8A94A6'
                          : pathname.match('export-contacts')
                          ? '#DD7021'
                          : '#8A94A6'
                      }
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9055 7.16674C16.5547 7.16674 18.039 8.00007 18.9461 9.25007C19.6883 10.4167 20.183 11.6667 19.9356 13.0001C19.6883 14.3334 18.9461 15.5001 17.8741 16.2501C17.7092 16.3334 17.5443 16.4167 17.3793 16.4167C17.132 16.4167 16.8846 16.3334 16.7196 16.0834C16.3898 15.6667 16.4723 15.1667 16.8846 14.9167C17.5443 14.4167 18.039 13.6667 18.204 12.7501C18.3689 11.8334 18.1215 11.0001 17.6267 10.2501C16.967 9.3334 15.9775 8.83341 14.9055 8.83341H13.9159C13.5036 8.83341 13.1738 8.50007 13.0913 8.16674C12.3492 5.0834 9.13317 3.16674 6.08209 4.00007C4.59778 4.3334 3.36086 5.3334 2.53624 6.66674C1.71162 8.00007 1.46424 9.5834 1.87655 11.0834C2.04147 12.0001 2.53624 12.8334 3.11347 13.5001C3.44332 13.8334 3.36086 14.3334 3.03101 14.6667C2.70116 15.0001 2.20639 14.9167 1.87655 14.5834C1.05193 13.7501 0.557159 12.6667 0.227313 11.5001C-0.267457 9.5834 0.0623894 7.58341 1.05193 5.8334C2.12393 4.0834 3.6907 2.91674 5.66978 2.41674C9.38056 1.41674 13.2563 3.50007 14.4932 7.16674H14.9055ZM13.8335 15.2501C14.1633 14.9167 14.1633 14.4167 13.8335 14.0834C13.5036 13.7501 13.0089 13.7501 12.679 14.0834L10.7824 16.0001V10.5001C10.7824 10.0001 10.4526 9.66674 9.95779 9.66674C9.46302 9.66674 9.13317 10.0001 9.13317 10.5001V16.0001L7.23655 14.0834C6.90671 13.7501 6.41194 13.7501 6.08209 14.0834C5.75224 14.4167 5.75224 14.9167 6.08209 15.2501L9.38056 18.5834C9.42179 18.6251 9.46302 18.6459 9.50425 18.6667C9.54548 18.6876 9.58671 18.7084 9.62794 18.7501C9.7104 18.8334 9.87533 18.8334 9.95779 18.8334C10.0402 18.8334 10.2052 18.8334 10.2876 18.7501C10.3701 18.7501 10.4526 18.6667 10.535 18.5834L13.8335 15.2501Z"
                      fill={
                        colorSvg && config?.style === 'sumra-meet'
                          ? linkIdColor === 'export-contacts'
                            ? '#377DFF'
                            : '#8A94A6'
                          : pathname.match('export-contacts')
                          ? '#377DFF'
                          : '#8A94A6'
                      }
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9055 7.16674C16.5547 7.16674 18.039 8.00007 18.9461 9.25007C19.6883 10.4167 20.183 11.6667 19.9356 13.0001C19.6883 14.3334 18.9461 15.5001 17.8741 16.2501C17.7092 16.3334 17.5443 16.4167 17.3793 16.4167C17.132 16.4167 16.8846 16.3334 16.7196 16.0834C16.3898 15.6667 16.4723 15.1667 16.8846 14.9167C17.5443 14.4167 18.039 13.6667 18.204 12.7501C18.3689 11.8334 18.1215 11.0001 17.6267 10.2501C16.967 9.3334 15.9775 8.83341 14.9055 8.83341H13.9159C13.5036 8.83341 13.1738 8.50007 13.0913 8.16674C12.3492 5.0834 9.13317 3.16674 6.08209 4.00007C4.59778 4.3334 3.36086 5.3334 2.53624 6.66674C1.71162 8.00007 1.46424 9.5834 1.87655 11.0834C2.04147 12.0001 2.53624 12.8334 3.11347 13.5001C3.44332 13.8334 3.36086 14.3334 3.03101 14.6667C2.70116 15.0001 2.20639 14.9167 1.87655 14.5834C1.05193 13.7501 0.557159 12.6667 0.227313 11.5001C-0.267457 9.5834 0.0623894 7.58341 1.05193 5.8334C2.12393 4.0834 3.6907 2.91674 5.66978 2.41674C9.38056 1.41674 13.2563 3.50007 14.4932 7.16674H14.9055ZM13.8335 15.2501C14.1633 14.9167 14.1633 14.4167 13.8335 14.0834C13.5036 13.7501 13.0089 13.7501 12.679 14.0834L10.7824 16.0001V10.5001C10.7824 10.0001 10.4526 9.66674 9.95779 9.66674C9.46302 9.66674 9.13317 10.0001 9.13317 10.5001V16.0001L7.23655 14.0834C6.90671 13.7501 6.41194 13.7501 6.08209 14.0834C5.75224 14.4167 5.75224 14.9167 6.08209 15.2501L9.38056 18.5834C9.42179 18.6251 9.46302 18.6459 9.50425 18.6667C9.54548 18.6876 9.58671 18.7084 9.62794 18.7501C9.7104 18.8334 9.87533 18.8334 9.95779 18.8334C10.0402 18.8334 10.2052 18.8334 10.2876 18.7501C10.3701 18.7501 10.4526 18.6667 10.535 18.5834L13.8335 15.2501Z"
                      fill={
                        colorSvg && config?.style === 'sumra-meet'
                          ? linkIdColor === 'export-contacts'
                            ? '#377DFF'
                            : '#8A94A6'
                          : pathname.match('export-contacts')
                          ? '#377DFF'
                          : '#8A94A6'
                      }
                    />
                  </svg>
                )
              ) : (
                <i className="icon-downloadCloud" />
              )}
              <span>Export</span>
            </Link>
          </div>

          <div className={`contact-book__more-wrapper-${config?.style}`}>
            <img
              className={`contact-book__gift-img-${config?.style}`}
              src={config?.style === 'sumra-chat' ? money : giftBox}
              alt="gift box referals"
            />
            <p className={`contact-book__desc-${config?.style}`}>
              Get up to <span>$250</span> for Referrals.
              <br />
              Earn Unlimited.
            </p>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                config?.routes.setPath('/referrals-page');
              }}
              className={`contact-book__more-btn-learn-${config?.style}`}
            >
              Learn more
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarContactBook;
