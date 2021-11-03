import React, { FC } from 'react';
import { Card } from './Card';

interface Props {
  scroll: number;
}

export const PeerCard: FC<Props> = ({ scroll }) => {
  return (
    <section className="peer__inner">
      <div className="peer__membership-text">
        <h2 className="peer__membership-title">Peer Premium Membership</h2>
        <div className="peer__membership-subtitle">
          Peer provides a patently prosperous pathway for its members. Using the
          unique combinations of high Instant Ultainfinity Creditlines with a
          Gross Asset Share model and an exclusive lending program titled DASA.
          Lending upto $20M to Peer members.
        </div>
      </div>
      <div className="peer__card-wrapper">
        <Card scroll={scroll} />
      </div>
    </section>
  );
};
