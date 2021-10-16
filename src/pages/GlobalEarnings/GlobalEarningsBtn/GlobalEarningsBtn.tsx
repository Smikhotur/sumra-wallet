import React, {FC, useEffect} from 'react';
import {useRouteMatch} from 'react-router';
import {Link, NavLink} from 'react-router-dom';
import '../../../assets/scss/GlobalEarningsBtn/globalEarningsBtn.scss';

export const GlobalEarningsBtn: FC = () => {
  const {url} = useRouteMatch();
  let pathname = window.location.pathname;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pathname = window.location.pathname;
  }, [window.location.pathname]);

  return (
    <div className="page-content__wrap">
      <section className="page-content__global-earnings global-earnings">
        <Link
          to={`${url}/referrals_program`}
          className={`${
            pathname.match('/global_earnings/referrals_program')
              ? 'link-active'
              : 'global-earnings__btn'
          }`}
        >
          <i className="icon-referrals global-earnings__icon"></i>
          Referrals program
        </Link>
        <Link
          to={`${url}/rewards_program`}
          className={`${
            pathname.match('/global_earnings/rewards_program')
              ? 'link-active'
              : 'global-earnings__btn'
          }`}
        >
          <i className="icon-rewards"></i>
          Rewards program
        </Link>
        <NavLink
          to={`${url}/rentpayments`}
          className={`${
            pathname.match('/global_earnings/rentpayments')
              ? 'link-active'
              : 'global-earnings__btn'
          }`}
        >
          <i className="icon-rentpay"></i>
          Rentpayments
        </NavLink>
        <Link
          to={`${url}/cashbacks`}
          className={`${
            pathname.match('/global_earnings/cashbacks')
              ? 'link-active'
              : 'global-earnings__btn'
          }`}
        >
          <i className="icon-cashbacks"></i>
          Cashbacks
        </Link>
        <Link
          to={`${url}/statistic`}
          className={`${
            pathname.match('/global_earnings/statistic')
              ? 'link-active'
              : 'global-earnings__btn'
          }`}
        >
          <i className="icon-statistics"></i>
          Statistic
        </Link>
      </section>
    </div>
  );
};
