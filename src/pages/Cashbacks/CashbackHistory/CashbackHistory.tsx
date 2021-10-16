/* eslint-disable no-unused-vars */
import React, {FC, useState} from 'react';
import {Table} from 'reactstrap';
import classNames from 'classnames';
import {history} from './history';
import cashback from '../../../assets/images/cashbacks/cashbacks.svg';
import '../../../assets/scss/cashbacks/cashbackHistory.scss';

export const CashbackHistory: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  const [showUsers, setShowUsers] = useState(5);
  const [sortCashback, setSortCashback] = useState(history);
  const [allTime, setAllTime] = useState(true);
  const [today, setToday] = useState(false);
  const [week, setWeek] = useState(false);
  const [monht, setMonht] = useState(false);
  const [year, setYear] = useState(false);
  const indexOfLastUsers = currentPage * showUsers;
  const indexOfFirstUsers = indexOfLastUsers - showUsers;
  const currentUsers = sortCashback.slice(indexOfFirstUsers, indexOfLastUsers);

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
    setSortCashback(history);
  };

  const isThisDay = () => {
    setSortCashback(
      history.filter((pay) => pay.date.includes(dd) && pay.date.includes(yyyy))
    );
  };

  const isThisWeek = () => {
    const startDay = String(start.getDate()).padStart(2, '0');
    const endDay = String(end.getDate()).padStart(2, '0');
    setSortCashback(
      history.filter((pay) => {
        pay.date.includes(dd) && pay.date.includes(yyyy);
      })
    );
  };

  const isThisMonth = () => {
    setSortCashback(
      history.filter(
        (pay) => pay.date.includes(monthStr) && pay.date.includes(yyyy)
      )
    );
  };

  const isThisYear = () => {
    setSortCashback(history.filter((pay) => pay.date.includes(yyyy)));
  };

  return (
    <section className="page-content__cashbacks-history cashbacks-history">
      <h2 className="cashbacks-history__title">Cashback history</h2>
      <div className="cashbacks-history__block-btn-scroll">
        <div className="cashbacks-history__block-btn">
          <button
            className={classNames('cashbacks-history__btn', {
              'cashbacks-history__btn-active': allTime,
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
            className={classNames('cashbacks-history__btn', {
              'cashbacks-history__btn-active': today,
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
            className={classNames('cashbacks-history__btn', {
              'cashbacks-history__btn-active': week,
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
            className={classNames('cashbacks-history__btn', {
              'cashbacks-history__btn-active': monht,
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
            className={classNames('cashbacks-history__btn', {
              'cashbacks-history__btn-active': year,
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

      <div className="cashbacks-history__block-table">
        <div className="cashbacks-history__block-table-fixed">
          <Table className="cashbacks-history__block-table-fixed">
            <thead>
              <tr className="cashbacks-history__table">
                <th className="cashbacks-history__th">Operation type</th>
                <th className="cashbacks-history__th">Payment ID</th>
                <th className="cashbacks-history__th">Date</th>
                <th className="cashbacks-history__th">Amount</th>
                <th className="cashbacks-history__th">Cashback</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((payment) => (
                <tr key={payment.payment}>
                  <td className="cashbacks-history__td">
                    <img
                      className="cashbacks-history__td-img"
                      src={payment.currency}
                      alt=""
                    />
                    {payment.operation}
                  </td>
                  <td className="cashbacks-history__td cashbacks-history__td-color">
                    {payment.payment}
                  </td>
                  <td className="cashbacks-history__td cashbacks-history__td-color">
                    {payment.date}
                  </td>
                  <td className="cashbacks-history__td">{payment.amount}</td>
                  <td className="cashbacks-history__td">
                    {' '}
                    <img
                      className="cashbacks-history__td-img-dolar"
                      src={payment.dolar}
                      alt=""
                    />
                    {payment.cashback}
                  </td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr className="cashbacks-history__table">
                <th className="cashbacks-history__th">
                  {`Showing ${currentUsers.length} of ${history.length} operation`}
                  <span
                    onClick={addPeople}
                    className="cashbacks-history__arrow"
                  >
                    View all
                  </span>
                </th>
                <th className="cashbacks-history__th"></th>
                <th className="cashbacks-history__th"></th>
                <th className="cashbacks-history__th"></th>
                <th className="cashbacks-history__th"></th>
              </tr>
            </thead>
          </Table>
        </div>

        <img
          className="cashbacks-history__cashbacks-img"
          src={cashback}
          alt=""
        />
      </div>
    </section>
  );
};
