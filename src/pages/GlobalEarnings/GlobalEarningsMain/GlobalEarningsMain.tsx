import React, {FC} from 'react';
import {Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import {Cashbacks} from './Cashbacks';
import {ReferralsProgram} from './ReferralsProgram';
import {Rentpayments} from './Rentpayments';
import {RewardsProgram} from './RewardsProgram';
import {Statistic} from './Statistic';

export const GlobalEarningsMain: FC = () => {
  const {path} = useRouteMatch();

  return (
    <>
      <Switch>
        <Route
          path={`${path}/referrals_program`}
          component={ReferralsProgram}
        />
        <Route path={`${path}/rewards_program`} component={RewardsProgram} />
        <Route path={`${path}/rentpayments`} component={Rentpayments} />
        <Route path={`${path}/cashbacks`} component={Cashbacks} />
        <Route path={`${path}/statistic`} component={Statistic} />
        <Redirect from="/" to={`${path}/referrals_program`} />
      </Switch>
    </>
  );
};
