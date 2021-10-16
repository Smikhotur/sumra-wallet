import React, {FC} from 'react';
import sug from '../../../../assets/images/memberships/sug.png';
import checkTrue from '../../../../assets/images/memberships/check-true.svg';
import checkLight from '../../../../assets/images/memberships/check-light.svg';
import classNames from 'classnames';
import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {actions} from '../../../../store/PioneerMemberships/actions';

export const Gold: FC = () => {
  const dispatch = useDispatch();
  const activeForm = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.activeUpdrade
  );
  const activeGold = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.activeGold
  );

  const buttonActivation = ({target: {name}}) => {
    dispatch(actions.nameBronzeButton(name));
    dispatch(actions.activeUpdradeButton(!activeForm));
  };

  return (
    <div
      className={classNames('memberships__card', {
        'memberships__card-visible': activeGold,
      })}
    >
      <img
        className="memberships__card-suggested"
        src={sug}
        alt="img suggested"
      />
      <h3
        className={classNames('memberships__card-title', {
          'memberships__card-title-visible': activeGold,
        })}
      >
        Gold
      </h3>
      <div
        className={classNames('memberships__card-subtitle', {
          'memberships__card-subtitle-visible': activeGold,
        })}
      >
        <span>$399</span>
        <sub className="memberships__card-subtitle-sub">/ yr</sub>
      </div>
      <div className="memberships__card-subtitle-gray">Billed annually</div>
      <ul className="memberships__card-list">
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeGold ? checkTrue : checkLight}
            alt=""
          />
          <div>
            Withdrawal threshold -{' '}
            <span
              className={
                !activeGold
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              $100
            </span>
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeGold ? checkTrue : checkLight}
            alt=""
          />
          <div>
            Rentpayments rebates -{' '}
            <span
              className={
                !activeGold
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              25%
            </span>
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeGold ? checkTrue : checkLight}
            alt=""
          />
          <div>
            For each Referral you get{' '}
            <strong
              className={
                !activeGold
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              $10
            </strong>
            . <br />
            Your referred contacts get{' '}
            <strong
              className={
                !activeGold
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              $7
            </strong>
            .
            <br />
            Earn Unlimited
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeGold ? checkTrue : checkLight}
            alt=""
          />
          <div>
            DIVITS reward for 1000 hours
            <br />+ Added Bonus{' '}
            <strong
              className={
                !activeGold
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              100%
            </strong>
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeGold ? checkTrue : checkLight}
            alt=""
          />
          <div>
            <strong
              className={
                !activeGold
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              Merge
            </strong>{' '}
            all earnings to <br /> withdraw
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeGold ? checkTrue : checkLight}
            alt=""
          />
          <div>
            Withdrawal fee -{' '}
            <strong
              className={
                !activeGold
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              0%
            </strong>
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeGold ? checkTrue : checkLight}
            alt=""
          />
          <div>
            <strong
              className={
                !activeGold
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              Redeem Rewards
            </strong>{' '}
            - To <br />
            Cash, $DIVITS Token, Bitcoin,
            <br /> ETH, SOL
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeGold ? checkTrue : checkLight}
            alt=""
          />
          <div>
            <strong
              className={
                !activeGold
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              $DIVITS Token
            </strong>{' '}
            - Earn,
            <br /> Exchange, Trade
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeGold ? checkTrue : checkLight}
            alt=""
          />
          <div>
            <strong
              className={
                !activeGold
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              Cryptocurrencies
            </strong>{' '}
            -<br /> Convert to Crypto
          </div>
        </li>
      </ul>
      <Link
        to={{pathname: '/pioneer_memberships', search: '?payment-details=true'}}
      >
        <button
          disabled={activeGold}
          onClick={(event) => {
            buttonActivation(event);
          }}
          name="Gold"
          className="memberships__card-btn"
        >
          {activeGold ? 'Current plan' : 'Upgrade plan'}
        </button>
      </Link>
    </div>
  );
};
