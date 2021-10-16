import React, {FC, useState} from 'react';
import {listTransaction} from '../../Dashboard/Transaction/listTransaction';
import classNames from 'classnames';
import LineChart from '../../../components/chartjs/linechart';
import HistorySpent from '../../../components/chartjs/historySpent';

export const BlockBtn: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  const [showUsers, setShowUsers] = useState(8);
  const [sortCashback, setSortCashback] = useState(listTransaction);
  const [allTime, setAllTime] = useState(true);
  const [today, setToday] = useState(false);
  const [week, setWeek] = useState(false);
  const [monht, setMonht] = useState(false);
  const [year, setYear] = useState(false);
  const [open, setOpen] = useState(false);
  const indexOfLastUsers = currentPage * showUsers;
  const indexOfFirstUsers = indexOfLastUsers - showUsers;
  const currentUsers = sortCashback.slice(indexOfFirstUsers, indexOfLastUsers);

  const addPeople = () => {
    if (open) {
      setShowUsers(8);
    } else {
      setShowUsers(sortCashback.length - showUsers + showUsers);
    }
  };

  const day = new Date();
  const dd = String(day.getDate()).padStart(2, '0');
  const mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = day.getFullYear() + '';

  // const month = {
  //   '01': 'Jan',
  //   '02': 'Feb',
  //   '03': 'Mar',
  //   '04': 'Apr',
  //   '05': 'May',
  //   '06': 'Jun',
  //   '07': 'Jul',
  //   '08': 'Aug',
  //   '09': 'Sept',
  //   '10': 'Oct',
  //   '11': 'Nov',
  //   '12': 'Dec',
  // };

  // let monthStr = null;

  // for (const key in month) {
  //   if (key === mm) {
  //     monthStr = month[key];
  //   }
  // }

  // function getWeekDates() {
  //   const now = new Date();
  //   const dayOfWeek = now.getDay(); //0-6
  //   const numDay = now.getDate();

  //   const start = new Date(now); //copy
  //   start.setDate(numDay - dayOfWeek);
  //   start.setHours(0, 0, 0, 0);

  //   const end = new Date(now); //copy
  //   end.setDate(numDay + (7 - dayOfWeek));
  //   end.setHours(0, 0, 0, 0);

  //   return [start, end];
  // }

  // const [start, end] = getWeekDates();

  const isAllTime = () => {
    setSortCashback(listTransaction);
  };

  const isThisDay = () => {
    setSortCashback(
      listTransaction.filter(
        (transaction) =>
          transaction.date.includes(dd) &&
          transaction.date.includes(yyyy) &&
          transaction.date.includes(mm)
      )
    );
  };

  // const isThisWeek = () => {
  //   const startDay = String(start.getDate()).padStart(2, '0');
  //   const endDay = String(end.getDate()).padStart(2, '0');
  //   setSortCashback(
  //     listTransaction.filter((transaction) => {
  //       transaction.date.includes(dd) && transaction.date.includes(yyyy);
  //     })
  //   );
  // };

  const isThisMonth = () => {
    setSortCashback(
      listTransaction.filter(
        (transaction) =>
          transaction.date.includes(mm) && transaction.date.includes(yyyy)
      )
    );
  };

  const isThisYear = () => {
    setSortCashback(
      listTransaction.filter((transaction) => transaction.date.includes(yyyy))
    );
  };

  return (
    <section className="history__block-btn">
      <h2 className="invite-users__title">Transaction</h2>
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

      <section className="history__inner">
        <div className="history__list-inner">
          <div className="history__list-inner">
            <ul className="history__list">
              {currentUsers.map((item) => (
                <li key={item.date} className="history__item">
                  <div className="history__block">
                    <img src={item.imgBtn} alt="" className="history__photo" />
                    <div className="history__text">{item.title}</div>
                  </div>

                  <div className="history__date">{item.date}</div>
                  <div className="history__block history__block-last">
                    <div className="history__total">{item.cash}</div>
                    <img
                      src={item.imgArrow}
                      alt=""
                      className="history__photo"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => {
              addPeople();
              setOpen(!open);
            }}
            className={open ? 'history__button-open' : 'history__button'}
          >
            View all
          </div>
        </div>

        <div className="dashboard__transaction-block-info">
          <div className="dashboard__transaction-incoms">
            <div className="dashboard__box-chart">
              <h3 className="dashboard__chart-title">Incomes</h3>
              <select className="dashboard__chart-select" name="" id="">
                <option className="dashboard__chart-opption" value="">
                  This year
                </option>
              </select>
            </div>
            <div className="dashboard__transaction-incoms-scroll">
              <div className="dashboard__transaction-incoms-width">
                <LineChart />
              </div>
            </div>
          </div>
          <div className="dashboard__transaction-incoms">
            <div className="dashboard__box-chart">
              <h3 className="dashboard__chart-title">Spent</h3>
              <select className="dashboard__chart-select" name="" id="">
                <option className="dashboard__chart-opption" value="">
                  This year
                </option>
              </select>
            </div>
            <div className="dashboard__transaction-incoms-scroll">
              <div className="dashboard__transaction-incoms-width">
                <HistorySpent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
