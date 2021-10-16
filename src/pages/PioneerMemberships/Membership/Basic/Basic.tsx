import React, {FC} from 'react';
import classNames from 'classnames';
import {useSelector, RootStateOrAny} from 'react-redux';
import checkTrue from '../../../../assets/images/memberships/check-true.svg';
import checkLight from '../../../../assets/images/memberships/check-light.svg';
import checkFalse from '../../../../assets/images/memberships/check-false.svg';

export const Basic: FC = () => {
  const basicActive = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.activeBasic
  );
  const activeBronze = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.activeBronze
  );
  const activeSilver = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.activeSilver
  );
  const activeGold = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.activeGold
  );

  return (
    <div
      className={classNames('memberships__card', {
        'memberships__card-visible': basicActive,
      })}
    >
      <h3
        className={classNames('memberships__card-title', {
          'memberships__card-title-visible': basicActive,
        })}
      >
        Basic
      </h3>
      <div
        className={classNames('memberships__card-subtitle', {
          'memberships__card-subtitle-visible': basicActive,
        })}
      >
        Free
      </div>
      <ul className="memberships__card-list">
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={basicActive ? checkTrue : checkLight}
            alt=""
          />
          <div>
            Withdrawal threshold -{' '}
            <span
              className={
                !basicActive
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              $500
            </span>
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={basicActive ? checkTrue : checkLight}
            alt=""
          />
          <div>
            Rentpayments rebates -{' '}
            <span
              className={
                !basicActive
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              5%
            </span>
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={basicActive ? checkTrue : checkLight}
            alt=""
          />
          <div>
            For each Referral you get{' '}
            <strong
              className={
                !basicActive
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              $8
            </strong>
            . <br />
            Your referred contacts get{' '}
            <strong
              className={
                !basicActive
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              $5
            </strong>
            .
            <br />
            Earn Unlimited
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={basicActive ? checkTrue : checkLight}
            alt=""
          />
          <div>
            DIVITS reward for 1000 hours
            <br />+ Added Bonus{' '}
            <strong
              className={
                !basicActive
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              0%
            </strong>
          </div>
        </li>
        <li className="memberships__card-item">
          <img className="memberships__card-item-img" src={checkFalse} alt="" />
          <div>
            <strong
              className={
                !basicActive
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              Cannot merge
            </strong>{' '}
            all earnings to <br /> withdraw
          </div>
        </li>
        <li className="memberships__card-item">
          <img className="memberships__card-item-img" src={checkFalse} alt="" />
          <div>
            Withdrawal fee -{' '}
            <strong
              className={
                !basicActive
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              25%
            </strong>
          </div>
        </li>
        <li className="memberships__card-item">
          <img className="memberships__card-item-img" src={checkFalse} alt="" />
          <div>
            <strong
              className={
                !basicActive
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              No Redeem Rewards
            </strong>{' '}
            - To <br />
            Cash, $DIVITS Token, Bitcoin,
            <br /> ETH, SOL
          </div>
        </li>
        <li className="memberships__card-item">
          <img className="memberships__card-item-img" src={checkFalse} alt="" />
          <div>
            <strong
              className={
                !basicActive
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              No $DIVITS Token
            </strong>{' '}
            - Earn,
            <br /> Exchange, Trade
          </div>
        </li>
        <li className="memberships__card-item">
          <img className="memberships__card-item-img" src={checkFalse} alt="" />
          <div>
            <strong
              className={
                !basicActive
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              No Cryptocurrencies
            </strong>{' '}
            -<br /> Convert to Crypto
          </div>
        </li>
      </ul>
      <button
        disabled={true}
        className={
          !activeBronze && !activeSilver && !activeGold
            ? 'memberships__card-btn'
            : 'memberships__card-btn-opacity'
        }
      >
        Current plan
      </button>
    </div>
  );
};
