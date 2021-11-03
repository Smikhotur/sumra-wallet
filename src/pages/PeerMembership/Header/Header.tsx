import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <div className="peer__inner">
      <section className="peer__header">
        <Link style={{ height: '55px' }} to="/">
          <div style={{ height: '55px' }} className="peer__logo">
            PeerWealth
          </div>
        </Link>
        <div className="peer__header-text peer__header-margin">
          <h2 className="peer__header-title">
            Accelerate the accumulation of assets with Peer on PeerWealth
          </h2>
          <p className="peer__header-subtitle">
            PeerWealth, pioneer in p2p daily compounding interest products In
            association with Peer, to provide a patently prosperous pathway{' '}
            <br /> for its members.
            <span className="peer__header-subtitle-indent">
              An heavenly partnership.
            </span>
          </p>
          <button type="button" className="peer__header-btn">
            Become a Member{' '}
          </button>
        </div>
      </section>
    </div>
  );
};
