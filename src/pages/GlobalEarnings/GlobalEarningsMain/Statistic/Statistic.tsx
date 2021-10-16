import React, {FC} from 'react';
import {TotalsBySections} from './TotalsBySections';
import {Overview} from './Overview';
import '../../../../assets/scss/statistics/statistics.scss';

export const Statistic: FC = () => {
  return (
    <div className="page-content__statistics-page statistics-page">
      <TotalsBySections />
      <Overview />
    </div>
  );
};
