import React, { FC } from 'react';
import { Wallets } from './Wallets';
import { Operation } from './Operation';
import { Transaction } from './Transaction';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../../assets/scss/dashboard/dashboard.scss';
import '../../assets/scss/dashboard/operation.scss';
import '../../assets/scss/dashboard/transaction.scss';

export const Dashboard: FC = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="page-content">
        <div className="page-content__dashboard dashboard">
          <Wallets />
          <Operation />
          <h4 className="dashboard__transaction-title">Latest transaction</h4>
          <Transaction />
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};
