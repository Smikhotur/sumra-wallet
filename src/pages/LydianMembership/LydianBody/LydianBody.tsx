import React, { FC } from 'react';
import { LydianCard } from './LydianCard';

export const LydianBady: FC = () => {
  return (
    <div className="lydian__inner">
      <section className="lydian__body">
        <div className="lydian__body-text-inner">
          <h3 className="lydian__body-title">About Lydian</h3>
          <p className="lydian__body-desc">
            Lydian is a premium annual paid membership program on Ultainfinity
            Exchange. It offers Rapid Wealth creation from zero trading fees,
            unlimited trades and the provision of instant ultainfinity
            creditlines for members to use on ultainfinity exchange. Some Lydian
            members also benefit from collateralised lending by DASA - a Divits
            large loans lending platform.
          </p>
        </div>
        <h3 className="lydian__body-title-card">Lydian Premium Membership </h3>
        <div className="lydian__card-wrapper">
          <LydianCard />
        </div>
      </section>
    </div>
  );
};
