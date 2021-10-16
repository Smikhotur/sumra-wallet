/* eslint-disable no-unused-vars */
import React, {FC, useState} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal, {IProps} from '../../../modal';
import Close from '../../../assets/images/wallets/close.png';
import {useHistory} from 'react-router';
import '../../../assets/scss/wallet/walletModal.scss';

import sumraP from '../../../assets/images/wallet/sumra.png';
import sumraB from '../../../assets/images/wallet/sumraB.png';
import sumraC from '../../../assets/images/wallet/sumraC.png';
import visa from '../../../assets/images/wallet/visa.png';
import master from '../../../assets/images/wallet/master.png';

export const WalletModal: FC<IProps> = ({onClick}) => {
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const [checkboxPay, setCheckboxPay] = useState(false);
  const [checkboxBalance, setCheckboxBalance] = useState(false);
  const [checkboxCard, setCheckboxCard] = useState(false);
  const [checkboxVisa, setCheckboxVisa] = useState(false);

  return params.get('payments_modal') ? (
    <Modal onClick={onClick}>
      <ReactCSSTransitionGroup
        transitionName="anim"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <section className="payments-modal">
          <div className="payments-modal__wrapper">
            <div className="payments-modal__close">
              <img
                style={{cursor: 'pointer'}}
                className="payments-modal__img-close"
                src={Close}
                alt="Close modal"
                onClick={() => {
                  history.push(location.pathname);
                }}
              />
            </div>
            <div className="payments-modal__block-number">
              <div className="payments-modal__number">$3575.00</div>
              <div className="payments-modal__text">Amount to withdraw</div>
            </div>
            <div className="payments-modal__block-title">
              <div className="payments-modal__title">Choose payment method</div>
              <button className="payments-modal__btn-add">Add new</button>
            </div>
            <div className="payments-modal__block-checkbox">
              <label
                htmlFor="checkbox-1"
                className={
                  checkboxPay
                    ? 'payments-modal__inner-check'
                    : 'payments-modal__inner'
                }
              >
                <div className="payments-modal__sumra-block">
                  <img src={sumraP} alt="" />
                  <div>Sumra Pay</div>
                </div>
                <input
                  onClick={() => {
                    setCheckboxPay(!checkboxPay);
                  }}
                  id="checkbox-1"
                  type="radio"
                  className="payments-modal__checkbox"
                  checked={checkboxPay}
                />
              </label>

              <label
                className={
                  checkboxBalance
                    ? 'payments-modal__inner-check'
                    : 'payments-modal__inner'
                }
                htmlFor="checkbox-2"
              >
                <div className="payments-modal__sumra-block">
                  <img src={sumraB} alt="" />
                  <div>Sumra Balance</div>
                </div>
                <input
                  onClick={() => {
                    setCheckboxBalance(!checkboxBalance);
                  }}
                  id="checkbox-2"
                  type="radio"
                  className="payments-modal__checkbox"
                  checked={checkboxBalance}
                />
              </label>

              <label
                className={
                  checkboxCard
                    ? 'payments-modal__inner-check'
                    : 'payments-modal__inner'
                }
                htmlFor="checkbox-3"
              >
                <div className="payments-modal__sumra-block">
                  <img src={sumraC} alt="" />
                  <div>Sumra Card</div>
                </div>
                <input
                  onClick={() => {
                    setCheckboxCard(!checkboxCard);
                  }}
                  id="checkbox-3"
                  type="radio"
                  className="payments-modal__checkbox"
                  checked={checkboxCard}
                />
              </label>

              <label
                className={
                  checkboxVisa
                    ? 'payments-modal__inner-check'
                    : 'payments-modal__inner'
                }
                htmlFor="checkbox-4"
              >
                <div className="payments-modal__sumra-block">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <div>Credit/Debit card</div>
                </div>
                <input
                  onClick={() => {
                    setCheckboxVisa(!checkboxVisa);
                  }}
                  id="checkbox-4"
                  type="radio"
                  className="payments-modal__checkbox"
                  checked={checkboxVisa}
                />
              </label>
            </div>
            <button className="payments-modal__btn-continue" type="button">
              Continue
            </button>
          </div>
        </section>
      </ReactCSSTransitionGroup>
    </Modal>
  ) : null;
};
