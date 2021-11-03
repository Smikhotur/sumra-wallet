import React, { FC } from 'react';
import { LydianBady } from './LydianBody';
import { LydianFooter } from './LydianFooter';
import { LydianHeader } from './LydianHeader';

export const LydianMembership: FC = () => {
  return (
    <div id="lydian" className="lydian">
      <div id="wrapper-header" className="lydian__wrapper-header">
        <LydianHeader />
      </div>
      <div id="wrapper-body" className="lydian__wrapper-body">
        <LydianBady />
      </div>
      <div id="wrapper-footer" className="lydian__wrapper-footer">
        <LydianFooter />
      </div>
    </div>
  );
};
