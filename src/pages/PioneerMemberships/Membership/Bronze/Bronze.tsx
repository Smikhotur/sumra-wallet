import React, {FC} from 'react';
import classNames from 'classnames';
import checkTrue from '../../../../assets/images/memberships/check-true.svg';
import checkLight from '../../../../assets/images/memberships/check-light.svg';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import {actions} from '../../../../store/PioneerMemberships/actions';

export const Bronze: FC = () => {
  const activeForm = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.activeUpdrade
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
  const dispatch = useDispatch();
  const buttonActivation = ({target: {name}}) => {
    dispatch(actions.nameBronzeButton(name));
    dispatch(actions.activeUpdradeButton(!activeForm));
  };

  return (
    <div
      className={classNames('memberships__card', {
        'memberships__card-visible': activeBronze,
      })}
    >
      <h3
        className={classNames('memberships__card-title', {
          'memberships__card-title-visible': activeBronze,
        })}
      >
        Bronze
      </h3>
      <div
        className={classNames('memberships__card-subtitle', {
          'memberships__card-subtitle-visible': activeBronze,
        })}
      >
        <span>$99</span>
        <sub className="memberships__card-subtitle-sub">/ yr</sub>
      </div>
      <div className="memberships__card-subtitle-gray">Billed annually</div>
      <ul className="memberships__card-list">
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeBronze ? checkTrue : checkLight}
            alt=""
          />
          <div>
            Withdrawal threshold -{' '}
            <span
              className={
                !activeBronze
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              $350
            </span>
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeBronze ? checkTrue : checkLight}
            alt=""
          />
          <div>
            Rentpayments rebates -{' '}
            <span
              className={
                !activeBronze
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              10%
            </span>
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeBronze ? checkTrue : checkLight}
            alt=""
          />
          <div>
            For each Referral you get{' '}
            <strong
              className={
                !activeBronze
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
                !activeBronze
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
            src={activeBronze ? checkTrue : checkLight}
            alt=""
          />
          <div>
            DIVITS reward for 1000 hours
            <br />+ Added Bonus{' '}
            <strong
              className={
                !activeBronze
                  ? 'memberships__card-item-black'
                  : 'memberships__card-item-color'
              }
            >
              25%
            </strong>
          </div>
        </li>
        <li className="memberships__card-item">
          <img
            className="memberships__card-item-img"
            src={activeBronze ? checkTrue : checkLight}
            alt=""
          />
          <div>
            <strong
              className={
                !activeBronze
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
            src={activeBronze ? checkTrue : checkLight}
            alt=""
          />
          <div>
            Withdrawal fee -{' '}
            <strong
              className={
                !activeBronze
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
            src={activeBronze ? checkTrue : checkLight}
            alt=""
          />
          <div>
            <strong
              className={
                !activeBronze
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
            src={activeBronze ? checkTrue : checkLight}
            alt=""
          />
          <div>
            <strong
              className={
                !activeBronze
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
            src={activeBronze ? checkTrue : checkLight}
            alt=""
          />
          <div>
            <strong
              className={
                !activeBronze
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
          disabled={activeBronze}
          onClick={(event) => {
            buttonActivation(event);
          }}
          name="Bronze"
          className={
            !activeSilver && !activeGold
              ? 'memberships__card-btn'
              : 'memberships__card-btn-opacity'
          }
        >
          {activeBronze ? 'Current plan' : 'Upgrade plan'}
        </button>
      </Link>
    </div>
  );
};
