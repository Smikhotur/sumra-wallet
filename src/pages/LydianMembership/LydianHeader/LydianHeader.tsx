import React, { FC } from 'react';
import logo from '../../../assets/images/lydian/logo.svg';
import { useViewport } from '../../../custom.hooks/useViewport';

export const LydianHeader: FC = () => {
  const { width } = useViewport();

  return (
    <div className="lydian__inner">
      <section className="lydian__header">
        <div className="lydian__header-logo-inner">
          <div className="lydian__header-logo-box">
            <img
              src={logo}
              alt="Logo lydian premium membership"
              className="lydian__header-logo"
            />
            <div className="lydian__header-logo-title">
              Ultainfinity
              <span>exchange</span>
            </div>
          </div>
          <div className="lydian__header-btn-inner">
            {+width > 768 ? (
              <button className="lydian__header-btn-back">
                Back to dashboard
              </button>
            ) : (
              <button className="lydian__header-btn-back">Back</button>
            )}
          </div>
        </div>
        <div className="lydian__header-text-block">
          <h3 className="lydian__header-title">
            Reach your golden heights and accumulate great wealth
          </h3>
          <p className="lydian__header-subtitle">
            Let Lydian help you to create rapid, sustainable wealth
          </p>
          <button className="lydian__header-btn-more">Learn more</button>
        </div>
      </section>
    </div>
  );
};
