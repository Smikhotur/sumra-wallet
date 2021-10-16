import React, {FC, useEffect} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {BlockCalculator} from './BlockCalculator';
import {BlockCod} from './BlockCode';
import {BlockLeaderboard} from './BlockLeaderboard';
import {BlockQRCode} from './BlockQRCode';
import {BlockInviteUsers} from './BlockInviteUsers';
import '../../assets/scss/referrals/referralsPage.scss';
import {actions} from '../../store/referrals/action';
import {useDispatch} from 'react-redux';

export const Referrals: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fatchReferrals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="page-content">
        <div className="page-content__referrals-page referrals-page">
          <section className="referrals-page__header">
            <div className="referrals-page__inner">
              <BlockCalculator />
              <BlockCod />
            </div>
            <BlockLeaderboard />
          </section>
          <BlockQRCode />
          <BlockInviteUsers />
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};
