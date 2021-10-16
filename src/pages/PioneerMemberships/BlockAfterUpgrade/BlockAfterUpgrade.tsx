import React, {FC} from 'react';
import one from '../../../assets/images/memberships/1.svg';
import two from '../../../assets/images/memberships/2.svg';
import thre from '../../../assets/images/memberships/3.svg';
import arrow from '../../../assets/images/memberships/arrowLarge.svg';

export const BlockAfterUpgrade: FC = () => {
  return (
    <section className="memberships__after-upgrade">
      <h2 className="memberships__after-upgrade-title">
        After my premium upgrade, what’s next?
      </h2>
      <h3 className="memberships__after-upgrade-subtitle">
        You’ll notice the following:
      </h3>
      <div className="memberships__after-upgrade-inner">
        <div className="memberships__after-upgrade-box">
          <img src={one} alt="" className="memberships__after-upgrade-img" />
          <h4 className="memberships__after-upgrade-sub">Dashboard </h4>
          <p className="memberships__after-upgrade-text">
            You’ll notice a change in your status and available benefits in the
            Dashboards of your integrated platforms. You’ll be able to enrol for
            higher Rentpayments rebates. These paid rent payment rebates can run
            into substantial thousands, depending on your current monthly rental
            payment to your landlord. There are other premium Pioneer membership
            benefits, with many more to be added as we roll out new and varied
            integrated online platforms including a Global Marketplace platform
            with Free Shipping, Free Listings and much more.
          </p>
        </div>
        <img className="memberships__after-upgrade-arrow" src={arrow} alt="" />
        <div className="memberships__after-upgrade-box">
          <img src={two} alt="" className="memberships__after-upgrade-img" />
          <h4 className="memberships__after-upgrade-sub">{`Merge & Withdraw`}</h4>
          <p className="memberships__after-upgrade-text memberships__after-upgrade-small">
            You’ll be able to merge at once, all your Global Earnings from
            different online platforms and also enjoy quicker access to, and
            withdrawals of, your available earnings . You’ll get around
            Threshold Levels and easily transfer your balance earnings or
            exchange your earnings into $DIVITS Tokens or Bitcoins or simply
            redeem and withdraw cash.
          </p>
        </div>
        <img className="memberships__after-upgrade-arrow" src={arrow} alt="" />
        <div className="memberships__after-upgrade-box">
          <img src={thre} alt="" className="memberships__after-upgrade-img" />
          <h4 className="memberships__after-upgrade-sub">
            Multiple Platform Rewards
          </h4>
          <p className="memberships__after-upgrade-text">
            You’ll be able to boost you earnings rapidly because of the number
            of platforms that you’ll receive higher levels of rewards and
            earnings from. The amounts you’ll earn per Referral will increase,
            plus you’ll have more cash bonus incentives to offer anyone that
            uses your referral code or link to join us. In short, you’ll easily
            earn more, merge, withdraw, access more benefits across different
            online platforms, accelerate your fortune by exchanging your rewards
            to crypto and cash assets.
          </p>
        </div>
      </div>
    </section>
  );
};
