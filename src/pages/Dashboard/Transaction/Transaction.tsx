import React, {FC, useState} from 'react';
import {listTransaction} from './listTransaction';
import LineChart from '../../../components/chartjs/linechart';
import pic from '../../../assets/images/Dashboard/pic.svg';
import users from '../../../assets/images/Dashboard/users.svg';

export const Transaction: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  const [showUsers, setShowUsers] = useState(7);
  const [open, setOpen] = useState(false);
  const indexOfLastUsers = currentPage * showUsers;
  const indexOfFirstUsers = indexOfLastUsers - showUsers;
  const currentUsers = listTransaction.slice(
    indexOfFirstUsers,
    indexOfLastUsers
  );

  const addPeople = () => {
    if (open) {
      setShowUsers(7);
    } else {
      setShowUsers(listTransaction.length - showUsers + showUsers);
    }
  };

  return (
    <section className="dashboard__transaction-inner">
      <div className="dashboard__transaction-list-inner">
        <div className="dashboard__transaction-list-inner">
          <ul className="dashboard__transaction-list">
            {currentUsers.map((item) => (
              <li key={item.date} className="dashboard__transaction-item">
                <div className="dashboard__transaction-block">
                  <img
                    src={item.imgBtn}
                    alt=""
                    className="dashboard__transaction-photo"
                  />
                  <div className="dashboard__transaction-text">
                    {item.title}
                  </div>
                </div>

                <div className="dashboard__transaction-date">{item.date}</div>
                <div className="dashboard__transaction-block dashboard__transaction-block-last">
                  <div className="dashboard__transaction-total">
                    {item.cash}
                  </div>
                  <img
                    src={item.imgArrow}
                    alt=""
                    className="dashboard__transaction-photo"
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
          className={
            open ? 'dashboard__expand-button-open' : 'dashboard__expand-button'
          }
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
        <div className="dashboard__transaction-invite">
          <div className="dashboard__transaction-referrals">
            <h4 className="dashboard__transaction-referrals-title">
              Get up to $250 for <br />
              Referrals.
              <div className="dashboard__transaction-title-opacity">
                Earn Unlimited.
              </div>
            </h4>
            <img src={pic} alt="" />
          </div>
          <button className="dashboard__transaction-btn" type="button">
            <img src={users} alt="" /> Invite a Friend
          </button>
        </div>
      </div>
    </section>
  );
};
