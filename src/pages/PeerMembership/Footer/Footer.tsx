import React, { FC } from 'react';
import imgTab from '../../../assets/images/peer/imgTab.png';

interface Props {
  scroll: number;
}

export const Footer: FC<Props> = ({ scroll }) => {
  const heightHeader = document.getElementById('wrapper-header');
  const heightBody = document.getElementById('wrapper-body');
  const heightFooter = document.getElementById('wrapper-footer')!;
  let sumHight = 0;
  if (heightBody !== null && heightHeader !== null) {
    sumHight =
      heightBody.clientHeight +
      heightFooter.clientHeight -
      heightFooter.clientHeight / 1.5;
  }

  return (
    <section id="wrapper-header" className="peer__inner">
      <div className="peer__footer-box">
        <img
          src={imgTab}
          alt="chart"
          className={
            scroll > sumHight ? 'peer__footer-img-visible' : 'peer__footer-img'
          }
        />
        <div style={{ padding: 0 }} className="peer__header-text">
          <h2 className="peer__header-title">
            Experience the money-
            <br />
            making supersonics of DASA.
          </h2>
          <p className="peer__header-subtitle">
            Exclusive to PeerWealth; Peer Royals get DASA
            <br /> Lending upto $20M.
          </p>
          <button type="button" className="peer__header-btn">
            Become a Member{' '}
          </button>
        </div>
      </div>
    </section>
  );
};
