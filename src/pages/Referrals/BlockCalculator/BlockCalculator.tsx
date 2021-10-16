import React, {FC, useEffect, useState} from 'react';
import people from '../../../assets/images/users/people.svg';
import pers from '../../../assets/images/users/pers.svg';
import coins from '../../../assets/images/users/coins.svg';
import gold from '../../../assets/images/memberships/gold.png';
import silver from '../../../assets/images/memberships/silver.png';
import bronze from '../../../assets/images/memberships/bronze.png';
import medal from '../../../assets/images/memberships/Medal.svg';
import '../../../assets/scss/referrals/blockcalculator.scss';
import {Link} from 'react-router-dom';
import {IoCalculatorOutline} from 'react-icons/io5';
import {useSelector, RootStateOrAny} from 'react-redux';

export const BlockCalculator: FC = () => {
  const [result, setResult] = useState(100000);
  const [invitedUsers, setInvitedUsers] = useState(10000);
  const [bonus, setBonus] = useState('$ 5');

  const nameBronzeBtn = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.nameBronzeBtn
  );

  const calculate = ({target: {value, name}}) => {
    if (name === 'users') {
      setInvitedUsers(value);
    } else {
      setBonus(value);
    }
  };

  useEffect(() => {
    setResult(invitedUsers * +bonus.slice(1).trim());
  }, [invitedUsers, bonus]);

  const getMedal = () => {
    if (nameBronzeBtn === 'Bronze') {
      return bronze;
    }
    if (nameBronzeBtn === 'Silver') {
      return silver;
    }
    if (nameBronzeBtn === 'Gold') {
      return gold;
    }
  };

  return (
    <div className="referrals-page__block-calculator block-calculator">
      <div className="block-calculator__box-4-inner">
        <div className="block-calculator__img-inner">
          {nameBronzeBtn === 'Basic' ? (
            <img
              src={medal}
              alt="Medal bronze"
              className="block-calculator__img-medal-star"
            />
          ) : (
            <img
              src={getMedal()}
              alt="Medal bronze"
              className="block-calculator__img-medal"
            />
          )}

          <p className="block-calculator__text-level">Your Referral level</p>
          <h3 className="block-calculator__level-title">{nameBronzeBtn}</h3>
          <Link
            to="/pioneer_memberships"
            className="block-calculator__level-btn"
          >
            <span>Upgrade</span>
            <span className="arrow-hover">
              <span className="hover-arrow"></span>
            </span>
          </Link>
        </div>
      </div>

      <div className="block-calculator__box-5">
        <h3 className="block-calculator__title-1">Your Earnings</h3>
        <div className="block-calculator__box-5-form">
          <label className="block-calculator__box-5-calculate-label" htmlFor="">
            <span>Invited users</span>
            <input
              className="block-calculator__box-5-calculate-users"
              name="users"
              onChange={calculate}
              value={invitedUsers}
              type="number"
            />

            <img
              className="block-calculator__box-5-calculate-img-user"
              src={people}
              alt=""
            />
          </label>
          <span>x</span>
          <label className="block-calculator__box-5-calculate-label" htmlFor="">
            <span>Bonus per user</span>
            <select
              className="block-calculator__box-5-calculate-bonus"
              name="bonus"
              onChange={calculate}
              value={bonus}
            >
              <option value="$5">$ 8</option>
              <option value="$10">$ 9</option>
              <option value="$15">$ 10</option>
            </select>
            <img
              className="block-calculator__box-5-calculate-img"
              src={pers}
              alt=""
            />
          </label>
          <span>=</span>
          <label className="block-calculator__box-5-calculate-label" htmlFor="">
            <span>Total earnings</span>
            <div className="block-calculator__box-5-calculate-result">
              {`$ ${result}`}
            </div>
          </label>
        </div>
        <button className="block-calculator__box-5-calculate-btn" type="button">
          <IoCalculatorOutline className="block-calculator__calculate-btn-icon" />
          Calculate projected earnings
        </button>
        <img className="block-calculator__img-box-5" src={coins} alt="coins" />
      </div>
    </div>
  );
};
