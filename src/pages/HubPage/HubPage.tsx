import React, {FC, useState} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import accounts from '../../assets/images/hub/accounts.png';
import card from '../../assets/images/hub/card.png';
import cashbacks from '../../assets/images/hub/cashbacks.png';
import contacts from '../../assets/images/hub/contacts.png';
import earnings from '../../assets/images/hub/earnings.png';
import partners from '../../assets/images/hub/partners.png';

import Payments from '../../assets/images/hub/Payments.png';
import Referrals from '../../assets/images/hub/Referrals.png';
import Rentpayments from '../../assets/images/hub/Rentpayments.png';
import Rewards from '../../assets/images/hub/Rewards.png';
import Socials from '../../assets/images/hub/Socials.png';
import Wallet from '../../assets/images/hub/Wallet.png';

import close from '../../assets/images/hub/close.png';
import search from '../../assets/images/hub/search.png';

import '../../assets/scss/hub/hub.scss';

export const HubPage: FC = () => {
  const [text, setText] = useState();

  const searchText = ({target: {value}}) => {
    console.log(value);
    setText(value);
  };

  return (
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={5000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="page-content">
        <div className="page-content__hub-page hub-page">
          <div className="hub-page__search-inner">
            <input
              value={text}
              onChange={searchText}
              placeholder="Search..."
              type="text"
              className="hub-page__search"
            />
            <img
              className="hub-page__search-img"
              src={search}
              alt="icon search"
            />
            <img
              onClick={() => {
                setText('');
              }}
              className="hub-page__close-img"
              src={close}
              alt="icon close"
            />
          </div>

          <section className="hub-page__block-icons">
            <div className="hub-page__inner-icon">
              <img src={accounts} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Accounts</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={card} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Cards</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={cashbacks} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Cashbacks</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={contacts} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Contacts</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={earnings} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Earnings</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={partners} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Partners</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={Payments} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Payments</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={Referrals} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Referrals</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={Rentpayments} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Rentpayments</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={Rewards} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Rewards</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={Socials} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Socials</div>
            </div>
            <div className="hub-page__inner-icon">
              <img src={Wallet} alt="" className="hub-page__img" />
              <div className="hub-page__title-icon">Wallet</div>
            </div>
          </section>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};
