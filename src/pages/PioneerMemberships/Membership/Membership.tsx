import React, {FC} from 'react';
import {Basic} from './Basic';
import {Bronze} from './Bronze';
import {Gold} from './Gold';
import {Silver} from './Silver';

export const Membership: FC = () => {
  return (
    <section className="memberships__block-plans">
      <h2 className="memberships__plans-title">Membership Plans</h2>
      <p className="memberships__plans-subtitle">
        Join the many thousands of people who have upgraded to become premium
        Pioneer Members. It’s the fastest way to earning and withdrawing
        thousands in regular income from Pioneer Membership.
      </p>

      <div className="memberships__block-card">
        <div className="memberships__hover">
          <Basic />
        </div>
        <div className="memberships__hover">
          <Bronze />
        </div>
        <div className="memberships__hover">
          <Silver />
        </div>
        <div className="memberships__hover">
          <Gold />
        </div>
      </div>
    </section>
  );
};
