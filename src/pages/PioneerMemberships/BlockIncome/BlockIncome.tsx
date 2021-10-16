import React, {FC} from 'react';
import code from '../../../assets/images/memberships/code.svg';
import ivitations from '../../../assets/images/memberships/ivitations.svg';
import get from '../../../assets/images/memberships/get.svg';
import arrowBig from '../../../assets/images/memberships/arrowBig.svg';

export const BlockIncome: FC = () => {
  return (
    <section className="memberships__inner-income">
      <h2 className="memberships__plans-title">
        Drive up your Referrals income
      </h2>
      <div className="memberships__income-box">
        <div className="memberships__income-code">
          <img src={code} alt="" />
          <h3 className="memberships__income-code-title">
            Get your code and link
          </h3>
          <div className="memberships__income-code-subtitle">
            Get your referral code Register and copy <br /> referral links or QR
            codes.
          </div>
        </div>
        <img className="memberships__arrow-big" src={arrowBig} alt="" />
        <div className="memberships__income-code">
          <img src={ivitations} alt="" />
          <h3 className="memberships__income-code-title">Send invitations</h3>
          <div className="memberships__income-code-subtitle">
            Share your referral code Invite your friends <br /> to register
            through the link or code.
          </div>
        </div>
        <img className="memberships__arrow-big" src={arrowBig} alt="" />
        <div className="memberships__income-code">
          <img src={get} alt="" />
          <h3 className="memberships__income-code-title">
            Get higher rewards, merge and <br />
            withdraw.
          </h3>
          <div className="memberships__income-code-subtitle">
            Get $10, Give $7 in real-time, as Gold <br />
            Member. Earn unlimited.
          </div>
        </div>
      </div>
    </section>
  );
};
