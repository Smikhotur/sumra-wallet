import React, { FC } from 'react';
import check from '../../../../assets/images/peer/check.svg';

const cardsPeer = [
  {
    name: 'Peer Light',
    creditline: '100',
    dasa: '100',
    cost: '999',
    class: 'light',
  },
  {
    name: 'Peer Mint',
    creditline: '250',
    dasa: '1.5',
    cost: '4,999',
    class: 'mint',
  },
  {
    name: 'Peer Ruby',
    creditline: '750',
    dasa: 3,
    cost: '9,999',
    class: 'ruby',
  },
  {
    name: 'Peer Royal',
    creditline: '2.5',
    dasa: '20',
    cost: '49,999',
    class: 'royal',
  },
];

interface Props {
  scroll: number;
}

export const Card: FC<Props> = ({ scroll }) => {
  const heightHeader = document.getElementById('wrapper-header');
  const heightBody = document.getElementById('wrapper-body');
  const heightFooter = document.getElementById('wrapper-footer')!;
  let sumHight: number;
  if (heightBody !== null && heightHeader !== null) {
    sumHight = heightFooter.clientHeight / 2;
    console.log('body: ' + sumHight);
  }
  return (
    <>
      {cardsPeer.map((card) => (
        <div
          key={card.cost}
          className={
            scroll > sumHight
              ? `peer__card-inner-${card.class}-visible`
              : `peer__card-inner-${card.class}`
          }
        >
          <h3 className="peer__card-title">{card.name}</h3>
          <ul className="peer__card-list">
            <li className="peer__card-item">
              <img src={check} alt="Check mark" className="peer__card-img" />
              <div className="peer__card-text">
                Instant Ultainfinity
                <br /> Creditline
                <span className="peer__card-text-strong">{`$${card.creditline}K`}</span>
              </div>
            </li>
            <li className="peer__card-item">
              <img src={check} alt="Check mark" className="peer__card-img" />
              <div className="peer__card-text">
                No $DIVITS Staking
                <br /> required.
              </div>
            </li>
            <li className="peer__card-item">
              <img src={check} alt="Check mark" className="peer__card-img" />
              <div className="peer__card-text">
                Gross Assets Share
                <br />
                <span className="peer__card-text-strong">49/51</span>
              </div>
            </li>
            <li className="peer__card-item">
              <img src={check} alt="Check mark" className="peer__card-img" />
              <div className="peer__card-text">
                DASA lending upto
                <span className="peer__card-text-strong">{`$${card.dasa}K`}</span>
              </div>
            </li>
          </ul>
          <div className="peer__card-price">
            <span className="peer__card-price-dolar">$</span>
            {`${card.cost}`}
            <span className="peer__card-price-sub">/year</span>
          </div>
          <button className="peer__card-button" type="button">
            Choose
          </button>
        </div>
      ))}
    </>
  );
};
