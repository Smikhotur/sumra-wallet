import React, { FC, useEffect, useState } from 'react';
import check from '../../../../assets/images/lydian/check.svg';

const cardsLydian = [
  {
    name: 'Lydian Blue',
    creditline: '5000',
    dasa: '',
    cost: '49',
    class: 'blue',
  },
  {
    name: 'Lydian Hustler',
    creditline: '25.000',
    dasa: '',
    cost: '249',
    class: 'hustler',
  },
  {
    name: 'Lydian Pro',
    creditline: '100.000',
    dasa: '',
    cost: '849',
    class: 'pro',
  },
  {
    name: 'Lydian Star',
    creditline: '300.000',
    dasa: '700.000',
    cost: '2,999',
    class: 'star',
  },
];

export const LydianCard: FC = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heightHeader = document.getElementById('wrapper-header');
  const heightBody = document.getElementById('wrapper-body');
  const heightFooter = document.getElementById('wrapper-footer')!;
  let sumHight: number;

  if (heightBody !== null && heightHeader !== null) {
    sumHight = heightFooter.clientHeight / 2;
  }

  return (
    <>
      {cardsLydian.map((card) => (
        <div
          key={card.cost}
          className={
            scroll > sumHight
              ? `lydian__card-inner-${card.class}-visible`
              : `lydian__card-inner-${card.class}`
          }
        >
          <h3 className="lydian__card-title">{card.name}</h3>
          <div className="lydian__card-price">
            <span className="lydian__card-price-dolar">$</span>
            {`${card.cost}`}
            <span className="lydian__card-price-sub">/yr</span>
          </div>
          <h4 className="lydian__card-billed">Billed anually</h4>
          <ul className="lydian__card-list">
            <li className="lydian__card-item">
              <img src={check} alt="Check mark" className="lydian__card-img" />
              <div className="lydian__card-text">Zero trading fees</div>
            </li>
            <li className="lydian__card-item">
              <img src={check} alt="Check mark" className="lydian__card-img" />
              <div className="lydian__card-text">Unlimited trades</div>
            </li>
            <li className="lydian__card-item">
              <img src={check} alt="Check mark" className="lydian__card-img" />
              <div className="lydian__card-text">
                Instant Ultainfinity Creditline
                <br />
                <span className="lydian__card-text-strong">
                  {`$${card.creditline}`}
                </span>
              </div>
            </li>
            <li className="lydian__card-item">
              <img src={check} alt="Check mark" className="lydian__card-img" />
              <div className="lydian__card-text">
                {!card.dasa ? 'No DASA Lending' : 'DASA lending upto'}
                <br />
                {card.dasa && (
                  <span className="lydian__card-text-strong">{`$${card.dasa}K`}</span>
                )}
              </div>
            </li>
          </ul>
          <button className="lydian__card-button" type="button">
            Upgrade plan
          </button>
        </div>
      ))}
    </>
  );
};
