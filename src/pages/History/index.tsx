import React, {FC} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {BlockBtn} from './BlockBtn';
import '../../assets/scss/history/history.scss';

export const History: FC = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="page-content">
        <div className="page-content__history history">
          <BlockBtn />
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};
