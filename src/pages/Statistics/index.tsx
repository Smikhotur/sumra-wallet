import React, {FC} from 'react';
import {StatisticMain} from './StatisticMain';
import {StatisticNavigation} from './StatisticNavigation';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Statistics: FC = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={5000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="page-content">
        <StatisticNavigation />
        <StatisticMain />
      </div>
    </ReactCSSTransitionGroup>
  );
};
