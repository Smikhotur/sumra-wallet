import React, {FC, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';

import logo from '../../assets/images/sumraMenu/Logo.svg';
import {actions} from '../../store/sidebar/actions';

import '../../assets/scss/burger.scss';
import '../../assets/scss/menu/smallMenu.scss';
import {SmallMenu} from './SmallMenu';

export const SidebarContent: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const smallMenu = useSelector(
    (state: RootStateOrAny) => state.sidebarReducer.smallMenu
  );
  const [burger, setBurger] = useState(true);
  let pathname = window.location.pathname;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pathname = window.location.pathname;
  }, [window.location.pathname]);

  return (
    <>
      {smallMenu ? (
        <div id={burger ? 'sidebar-menu' : 'sidebar-menu-burger'}>
          <div
            id="menuNone"
            onClick={() => {
              setBurger(!burger);
            }}
          >
            <div id="menuToggle">
              <input type="checkbox" />
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
            </div>
          </div>
          <div className="scroll-menu" style={{overflowY: 'scroll'}}>
            <div>
              <img src={logo} alt="logo" />
              <ul className="metismenu list-unstyled" id="side-menu">
                <li>
                  <Link
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
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>Wallet</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>Payments</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>History</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>Sumra Pay</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>Sumra Card</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>Cashbacks</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>Creditline</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>Rentpayments</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>Referrals</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>Global Earnings</span>
                  </Link>
                </li>
                <li>
                  <Link
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
                    <span>Rewards</span>
                  </Link>
                </li>

                <li>
                  <Link
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
                    <span>Leaderboard</span>
                  </Link>
                </li>
                <li>
                  <Link
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
                    <span>Statistics</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact-book" className="waves-effect">
                    <div>
                      <i className="icon-contact" />
                    </div>
                    <span>Contact book</span>
                  </Link>
                </li>
                <li>
                  <Link to="/pioneer_memberships" className="waves-effect">
                    <div>
                      <i className="icon-pioneer1" />
                    </div>
                    <span>Pioneer Membership</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block-learn-more">
              <p className="block-learn-more__text">
                Get up to $250 for Referrals. Earn Unlimited.
              </p>
              <Link to="/referrals-page" className="block-learn-more__btn">
                Learn more
              </Link>
              <button
                className="btn-small"
                onClick={() => {
                  dispatch(actions.activeSmallMenu(false));
                }}
                style={{marginLeft: '100px'}}
                type="button"
              >
                <i className="icon-enter" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{overflowY: 'scroll'}} id="sidebar-menu-small">
          <SmallMenu />
        </div>
      )}
    </>
  );
};
