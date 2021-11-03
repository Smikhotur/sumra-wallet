import React, { FC, useState } from 'react';
import '@fontsource/dm-mono';
import { wallets } from './walet';

import orange from '../../../assets/images/Dashboard/orang.jpg';
import black from '../../../assets/images/Dashboard/black.svg';
import pink from '../../../assets/images/Dashboard/pink.svg';
import { Link } from 'react-router-dom';

const colors = [orange, black, pink];

export const Wallets: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  const [showWallets, setShowWallets] = useState(5);

  const indexOfLastWallet = currentPage * showWallets;
  const indexOfFirstUsers = indexOfLastWallet - showWallets;
  const currentWallets = wallets.slice(indexOfFirstUsers, indexOfLastWallet);

  const addPeople = () => {
    setShowWallets(wallets.length - showWallets + showWallets);
  };
  return (
    <section className="dashboard__wallets-inner">
      <div className="dashboard__wallets-title">Your wallet</div>
      <ul className="dashboard__wallets-list">
        {currentWallets.map((wallet, index) => (
          <Link
            key={wallet.numberWallet}
            to={{
              pathname: '/sumra-wallet',
              search: '?payments_modal=true',
            }}
          >
            <li
              style={{
                background: `url(${colors[index]})`,
                backgroundRepeat: 'no-repeat',
              }}
              key={wallet.numberWallet}
              className="dashboard__wallets-item"
            >
              <div className="dashboard__wallet-box">
                <div className="dashboard__name-box">
                  <img
                    src={wallet.img}
                    alt=""
                    className="dashboard__item-img"
                  />
                  <h3 className="dashboard__name-card">{wallet.nameWallet}</h3>
                </div>
                <img
                  src={wallet.walletIcon}
                  alt=""
                  className="dashboard__img"
                />
              </div>
              <div className="dashboard__number-wallet">
                {wallet.numberWallet
                  .slice(-4)
                  .padStart(wallet.numberWallet.length, '•••• ')}
              </div>
              <div className="dashboard__balance">{wallet.balance}</div>
              <div className="dashboard__total">{wallet.total}</div>
            </li>
          </Link>
        ))}
      </ul>
      <div onClick={addPeople} className="dashboard__wallets-pagination">
        View all
      </div>
    </section>
  );
};
