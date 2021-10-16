import React, {FC} from 'react';
import {GlobalEarningsBtn} from './GlobalEarningsBtn';
import {GlobalEarningsMain} from './GlobalEarningsMain';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const GlobalEarnings: FC = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="page-content">
        <GlobalEarningsBtn />
        <GlobalEarningsMain />
      </div>
    </ReactCSSTransitionGroup>
  );
};
