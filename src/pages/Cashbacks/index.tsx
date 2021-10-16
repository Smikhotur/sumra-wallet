import React, {FC} from 'react';
import {CashbackHistory} from './CashbackHistory';
import {CashbacksInformation} from './CashbacksInformation';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Cashbacks: FC = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="page-content">
        <CashbacksInformation />
        <CashbackHistory />
      </div>
    </ReactCSSTransitionGroup>
  );
};
