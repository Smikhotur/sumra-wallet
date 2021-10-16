import React, {FC} from 'react';
import {LeaderboardTable} from './LeaderboardTable';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Leaderboard: FC = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="page-content">
        <LeaderboardTable />
      </div>
    </ReactCSSTransitionGroup>
  );
};
