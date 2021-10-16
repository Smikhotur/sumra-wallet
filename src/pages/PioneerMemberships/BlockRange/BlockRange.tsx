import React, {FC} from 'react';
import lock from '../../../assets/images/memberships/lock.svg';
import people from '../../../assets/images/memberships/people.svg';
import beg from '../../../assets/images/memberships/beg.svg';
import hand from '../../../assets/images/memberships/hand.svg';
import bitcoin from '../../../assets/images/memberships/bitcoin.svg';
import radar from '../../../assets/images/memberships/radar.svg';

export const BlockRange: FC = () => {
  return (
    <section className="memberships__block-range">
      <h2 className="memberships__plans-title">
        Pioneer Membership, the premium range.
      </h2>
      <div className="memberships__range-subtitle">The Premium Edge</div>
      <p className="memberships__range-text">
        Pioneer premium plans are a facilitating range of wider, increased and
        higher levels of earnings, benefits and <br /> rebates running into many
        thousands of earnings per year.
      </p>
      <div className="memberships__range-inner">
        <div className="memberships__range-block-1">
          <div className="memberships__range-box memberships__range-box-1">
            <img src={lock} alt="" className="memberships__range-img" />
            <h4 className="memberships__range-box-title">{`Access & Thresholds`}</h4>
            <p className="memberships__range-box-text">
              Enjoy faster access to your earnings, merge your earnings so you
              can quickly withdraw and get around Threshold Levels
            </p>
          </div>
          <div className="memberships__range-box">
            <img src={people} alt="" className="memberships__range-img" />
            <h4 className="memberships__range-box-title">Referrals</h4>
            <p className="memberships__range-box-text">
              Higher amounts paid out to you per Referral.
            </p>
          </div>
          <div className="memberships__range-box">
            <img src={beg} alt="" className="memberships__range-img" />
            <h4 className="memberships__range-box-title">Rewards</h4>
            <p className="memberships__range-box-text">
              Higher DIVITS Rewards credited to you.
            </p>
          </div>
        </div>
        <div className="memberships__range-block-2">
          <div className="memberships__range-box">
            <img src={hand} alt="" className="memberships__range-img" />
            <h4 className="memberships__range-box-title">Rebates</h4>
            <p className="memberships__range-box-text">
              Higher rebate amounts paid out to you for your monthly rental
              payments
            </p>
          </div>
          <div className="memberships__range-box memberships__range-box-4">
            <img src={bitcoin} alt="" className="memberships__range-img" />
            <h4 className="memberships__range-box-title">Crypto</h4>
            <p className="memberships__range-box-text">
              Convert your DIVITS Rewards into other Cryptocurrencies - Bitcoin,
              ETH, SOL
            </p>
          </div>
          <div className="memberships__range-box memberships__range-box-6">
            <img src={radar} alt="" className="memberships__range-img" />
            <h4 className="memberships__range-box-title">$DIVITS Token</h4>
            <p className="memberships__range-box-text">
              Accumulate and Earn $DIVITS Tokens. Covert DIVITS Rewards into
              $DIVITS Tokens and use as Collateral!
            </p>
          </div>
        </div>
      </div>
      <h4 className="memberships__range-subtitle">{`Accelerate & Accumulate`}</h4>
      <p className="memberships__range-text">
        The premium range is purposely designed to cultivate Pioneer Ambassadors
        worldwide, to continually delight,
        <br /> to retain and to excessively reward its members. Indeed, it turns
        your premium Pioneer membership into a <br />
        fast-paced second income generator and a gateway to wealth creation,
        consolidation and accumulation.
      </p>
      <p className="memberships__range-text memberships__range-text-hight">
        Behold with delight, as your total Global Earnings accelerates, quite
        rapidly.
      </p>
      <div className="memberships__range-block-btn">
        <button className="memberships__range-btn">
          Join the premium range
        </button>
      </div>
      <p className="memberships__range-text">
        As a premium Pioneer, your total earnings will become easier to access
        and your benefits will all increase, as
        <br /> well as the possibilities for you to further accelerate the
        accumulation of cash and crypto assets. You’ll have
        <br /> new higher levels of earnings awarded, faster access,
        unrestricted transfers and conversions. Plus, you can
        <br /> earn, exchange, trade and collateralise your crypto assets to
        create wealth.
      </p>
    </section>
  );
};
