import React, {FC} from 'react';
import {Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import {Cashbacks} from '../../GlobalEarnings/GlobalEarningsMain/Cashbacks';
import {ReferralsProgram} from '../../GlobalEarnings/GlobalEarningsMain/ReferralsProgram';
import {Rentpayments} from '../../GlobalEarnings/GlobalEarningsMain/Rentpayments';
import {RewardsProgram} from '../../GlobalEarnings/GlobalEarningsMain/RewardsProgram';
import {Statistic} from '../../GlobalEarnings/GlobalEarningsMain/Statistic';

export const StatisticMain: FC = () => {
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
        <Redirect from="/" to={`${path}/statistic`} />
      </Switch>
    </>
  );
};
