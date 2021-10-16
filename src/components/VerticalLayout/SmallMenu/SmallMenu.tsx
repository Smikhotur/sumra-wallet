import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../../../assets/images/sumraMenu/Logo.svg';
import {actions} from '../../../store/sidebar/actions';

export const SmallMenu: FC = () => {
  const [visible, setVisible] = useState('');
  let pathname = window.location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pathname = window.location.pathname;
  }, [window.location.pathname]);

  const checkButton = ({currentTarget: {id}}) => {
    setVisible(id);
  };

  return (
    <>
      <div>
        <img className="img-logo" src={logo} alt="logo" />
        <ul className="metismenu list-unstyled" id="side-menu">
          <li style={{position: 'relative'}}>
            <Link
              id="dashboard"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              style={{position: 'relative'}}
              to="/dashboard"
              className={
                pathname.match('/dashboard')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-dashboard" />
              </div>
            </Link>
            <div
              className={
                visible === 'dashboard'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Dashboard
            </div>
          </li>

          <li style={{position: 'relative'}}>
            <Link
              id="wallet-page"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/wallet-page"
              className={
                pathname.match('/wallet-page')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-wallet1" />
              </div>
            </Link>
            <div
              className={
                visible === 'wallet-page'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Wallet
            </div>
          </li>

          <li>
            <Link
              id="payments"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/payments"
              className={
                pathname.match('/payments')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-pay" />
              </div>
            </Link>
            <div
              className={
                visible === 'payments'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Payments
            </div>
          </li>

          <li>
            <Link
              id="history"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/history"
              className={
                pathname.match('/history')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-history-1" />
              </div>
            </Link>
            <div
              className={
                visible === 'history'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              History
            </div>
          </li>

          <li>
            <Link
              id="sumra_pay"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/sumra_pay-page"
              className={
                pathname.match('/sumra_pay-page')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-sumra-pay" />
              </div>
            </Link>
            <div
              className={
                visible === 'sumra_pay'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Sumra pay
            </div>
          </li>

          <li>
            <Link
              id="sumra_card"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/sumra_card-page"
              className={
                pathname.match('/sumra_card-page')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-sumra-card" />
              </div>
            </Link>
            <div
              className={
                visible === 'sumra_card'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Sumra Card
            </div>
          </li>

          <li>
            <Link
              id="cashbacks"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/cashbacks-page"
              className={
                pathname.match('/cashbacks-page')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-cashbacks" />
              </div>
            </Link>
            <div
              className={
                visible === 'cashbacks'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Cashbacks
            </div>
          </li>

          <li>
            <Link
              id="creditline"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/creditline-page"
              className={
                pathname.match('/creditline-page')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-creditline" />
              </div>
            </Link>
            <div
              className={
                visible === 'creditline'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Creditline
            </div>
          </li>

          <li>
            <Link
              id="rentpayments"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/rentpayments-page"
              className={
                pathname.match('/rentpayments-page')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-rent" />
              </div>
            </Link>
            <div
              className={
                visible === 'rentpayments'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Rentpayments
            </div>
          </li>

          <li>
            <Link
              id="referrals"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/referrals-page"
              className={
                pathname.match('/referrals-page')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-referrals" />
              </div>
            </Link>
            <div
              className={
                visible === 'referrals'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Referrals
            </div>
          </li>

          <li>
            <Link
              id="global_earnings"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/global_earnings"
              className={
                pathname.match('/global_earnings')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-global" />
              </div>
            </Link>
            <div
              className={
                visible === 'global_earnings'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Earnings
            </div>
          </li>

          <li>
            <Link
              id="rewards"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/rewards-page"
              className={
                pathname.match('/rewards-page')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-rewards" />
              </div>
            </Link>
            <div
              className={
                visible === 'rewards'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Rewards
            </div>
          </li>

          <li>
            <Link
              id="leaderboard"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/leaderboard"
              className={
                pathname.match('/leaderboard')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-leaderboard" />
              </div>
            </Link>
            <div
              className={
                visible === 'leaderboard'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Leaderboard
            </div>
          </li>

          <li>
            <Link
              id="statistic"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/statistics-page"
              className={
                pathname.match('/statistics-page')
                  ? 'waves-effect link-active-menu'
                  : 'waves-effect'
              }
            >
              <div>
                <i className="icon-statistics" />
              </div>
            </Link>
            <div
              className={
                visible === 'statistic'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Statistics
            </div>
          </li>

          <li>
            <Link
              id="contact-book"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/contact-book"
              className="waves-effect"
            >
              <div>
                <i className="icon-contact" />
              </div>
            </Link>
            <div
              className={
                visible === 'contact-book'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Contact book
            </div>
          </li>
          <li>
            <Link
              id="memberships"
              onMouseOver={checkButton}
              onMouseOut={() => {
                setVisible('');
              }}
              to="/pioneer_memberships"
              className="waves-effect"
            >
              <div>
                <i className="icon-pioneer1" />
              </div>
            </Link>
            <div
              className={
                visible === 'memberships'
                  ? 'emergence-name-visible'
                  : 'emergence-name'
              }
            >
              Memberships
            </div>
          </li>
        </ul>
      </div>
      <div style={{position: 'relative'}} className="block-learn-more-small">
        <button
          className="btn-small-alone"
          onClick={() => {
            dispatch(actions.activeSmallMenu(true));
          }}
          id="expand"
          onMouseOver={checkButton}
          onMouseOut={() => {
            setVisible('');
          }}
          style={{marginLeft: '0'}}
          type="button"
        >
          <i className="icon-exit" />
        </button>
        <div
          style={{top: '0'}}
          className={
            visible === 'expand' ? 'emergence-name-visible' : 'emergence-name'
          }
        >
          Expand
        </div>
      </div>
    </>
  );
};
