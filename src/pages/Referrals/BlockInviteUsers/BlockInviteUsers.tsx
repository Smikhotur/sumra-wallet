/* eslint-disable no-unused-vars */
import React, {FC, useState} from 'react';
import {Table} from 'reactstrap';
import classNames from 'classnames';
import {people} from '../../people';
import '../../../assets/scss/referrals/blockInviteUsers.scss';
import copyImg from '../../../assets/images/referrals/copy1.svg';
import arrowSort from '../../../assets/images/referrals/Sort.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export const BlockInviteUsers: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  const [showUsers, setShowUsers] = useState(5);
  const [sortCashback, setSortCashback] = useState(people);
  const [allTime, setAllTime] = useState(true);
  const [today, setToday] = useState(false);
  const [week, setWeek] = useState(false);
  const [monht, setMonht] = useState(false);
  const [year, setYear] = useState(false);
  const [sortAlphabet, setSortAlphabet] = useState(false);
  const indexOfLastUsers = currentPage * showUsers;
  const indexOfFirstUsers = indexOfLastUsers - showUsers;
  const currentUsers = sortCashback.slice(indexOfFirstUsers, indexOfLastUsers);
  const [copy, setCopy] = useState(false);
  const [visibleSms, setVisibleSms] = useState('');

  const isCopy = ({currentTarget: {id}}) => {
    setVisibleSms(id);
    setTimeout(() => {
      setVisibleSms('');
    }, 2000);
  };
  const addPeople = () => {
    setShowUsers(sortCashback.length - showUsers + showUsers);
  };

  const day = new Date();
  const dd = String(day.getDate()).padStart(2, '0');
  const mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = day.getFullYear() + '';

  const month = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'Aug',
    '09': 'Sept',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };

  let monthStr = null;

  for (const key in month) {
    if (key === mm) {
      monthStr = month[key];
    }
  }

  function getWeekDates() {
    const now = new Date();
    const dayOfWeek = now.getDay(); //0-6
    const numDay = now.getDate();

    const start = new Date(now); //copy
    start.setDate(numDay - dayOfWeek);
    start.setHours(0, 0, 0, 0);

    const end = new Date(now); //copy
    end.setDate(numDay + (7 - dayOfWeek));
    end.setHours(0, 0, 0, 0);

    return [start, end];
  }

  const [start, end] = getWeekDates();

  const isAllTime = () => {
    setSortCashback(people);
  };

  const isThisDay = () => {
    setSortCashback(
      people.filter(
        (user) =>
          user.date.includes(dd) &&
          user.date.includes(yyyy) &&
          user.date.includes(monthStr)
      )
    );
  };

  const isThisWeek = () => {
    const startDay = String(start.getDate()).padStart(2, '0');
    const endDay = String(end.getDate()).padStart(2, '0');
    setSortCashback(
      people.filter((user) => {
        user.date.includes(dd) && user.date.includes(yyyy);
      })
    );
  };

  const isThisMonth = () => {
    setSortCashback(
      people.filter(
        (user) => user.date.includes(monthStr) && user.date.includes(yyyy)
      )
    );
  };

  const isThisYear = () => {
    setSortCashback(people.filter((user) => user.date.includes(yyyy)));
  };

  const isEmailSort = () => {
    setSortCashback(
      sortCashback.sort((a, b) =>
        sortAlphabet
          ? b.email.localeCompare(a.email)
          : a.email.localeCompare(b.email)
      )
    );
    setSortAlphabet(!sortAlphabet);
  };

  return (
    <section className="referrals-page__invite-users invite-users">
      <h2 className="invite-users__title">
        Invited users
        <div className="invite-users__title-sup">{people.length}</div>
      </h2>
      <div className="invite-users__block-btn-scroll">
        <div className="invite-users__block-btn">
          <button
            className={classNames('invite-users__btn', {
              'invite-users__btn-active': allTime,
            })}
            onClick={() => {
              setAllTime(true);
              setToday(false);
              setWeek(false);
              setMonht(false);
              setYear(false);
              isAllTime();
            }}
          >
            All time
          </button>
          <button
            className={classNames('invite-users__btn', {
              'invite-users__btn-active': today,
            })}
            onClick={() => {
              setAllTime(false);
              setToday(true);
              setWeek(false);
              setMonht(false);
              setYear(false);
              isThisDay();
            }}
          >
            Today
          </button>
          <button
            className={classNames('invite-users__btn', {
              'invite-users__btn-active': week,
            })}
            onClick={() => {
              setAllTime(false);
              setToday(false);
              setWeek(true);
              setMonht(false);
              setYear(false);
            }}
          >
            This week
          </button>
          <button
            className={classNames('invite-users__btn', {
              'invite-users__btn-active': monht,
            })}
            onClick={() => {
              setAllTime(false);
              setToday(false);
              setWeek(false);
              setMonht(true);
              setYear(false);
              isThisMonth();
            }}
          >
            This month
          </button>
          <button
            className={classNames('invite-users__btn', {
              'invite-users__btn-active': year,
            })}
            onClick={() => {
              setAllTime(false);
              setToday(false);
              setWeek(false);
              setMonht(false);
              setYear(true);
              isThisYear();
            }}
          >
            This year
          </button>
        </div>
      </div>

      <div className="invite-users__block-table">
        <div className="invite-users__block-table-fixed">
          <Table className="invite-users__block-table-fixed">
            <thead>
              <tr className="invite-users__table-tr">
                <th className="invite-users__th invite-users__th-num">#</th>
                <th className="invite-users__th">Full name</th>
                <th
                  className="invite-users__th invite-users__th-cursor"
                  onClick={isEmailSort}
                >
                  Email
                  <img
                    className="invite-users__img-arrow-sort"
                    src={arrowSort}
                    alt=""
                  />
                </th>
                <th className="invite-users__th invite-users__th-num">
                  Platform
                </th>
                <th className="invite-users__th">Registration date</th>
                <th className="invite-users__th">Code used</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id}>
                  <th
                    scope="row"
                    className="invite-users__td invite-users__th-number"
                  >
                    <div className="invite-users__th-number">{index + 1}</div>
                  </th>
                  <td className="invite-users__td">
                    <img
                      className="invite-users__td-img"
                      src={user.img}
                      alt=""
                    />
                    {user.name}
                  </td>
                  <td className="invite-users__td invite-users__td-color invite-users__td-left">
                    {user.email}
                  </td>
                  <td className="invite-users__td">
                    <img
                      className="invite-users__td-color"
                      src={user.social[1]}
                      alt=""
                    />
                  </td>
                  <td className="invite-users__td invite-users__td-color invite-users__td-left">
                    {user.date}
                  </td>
                  <td className="invite-users__td invite-users__td-color invite-users__td-left">
                    {visibleSms === user.id && (
                      <div className="invite-users__copy-text">
                        Сopied to the clipboard
                      </div>
                    )}
                    <CopyToClipboard
                      text={user.code}
                      onCopy={() => setCopy(true)}
                    >
                      <div
                        onClick={isCopy}
                        id={user.id}
                        className="invite-users__td-color-inner"
                      >
                        {user.code}
                        <img
                          className="invite-users__td-img-copy invite-users__td-left"
                          src={copyImg}
                          alt=""
                        />
                      </div>
                    </CopyToClipboard>
                  </td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr className="invite-users__table">
                <th className="invite-users__th invite-users__th-last">
                  {`Showing ${currentUsers.length} of ${people.length} users`}
                  <span onClick={addPeople} className="invite-users__arrow">
                    View all
                  </span>
                </th>
                <th className="invite-users__th"></th>
                <th className="invite-users__th"></th>
                <th className="invite-users__th"></th>
                <th className="invite-users__th"></th>
                <th className="invite-users__th"></th>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
    </section>
  );
};
