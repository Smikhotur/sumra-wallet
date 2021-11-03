import React, { FC, useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { PeerCard } from './PeerCard';

export const PeerMembership: FC = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="peer" className="peer">
      <div id="wrapper-header" className="peer__wrapper-header">
        <Header />
      </div>
      <div id="wrapper-body" className="peer__wrapper-body">
        <PeerCard scroll={scroll} />
      </div>
      <div id="wrapper-footer" className="peer__wrapper-footer">
        <Footer scroll={scroll} />
      </div>
    </div>
  );
};
