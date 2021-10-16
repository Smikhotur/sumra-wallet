import React, {FC} from 'react';
import BarChart from '../../../../../components/chartjs/globalEarnings';
import '../../../../../assets/scss/statistics/statistics.scss';

export const Overview: FC = () => {
  return (
    <section className="statistics-page__block">
      <h3 className="statistics-page__title">Overview</h3>
      <div className="statistics-page__inner-overview">
        <div className="statistics-page__inner-fixed">
          <BarChart />
        </div>
      </div>
    </section>
  );
};
