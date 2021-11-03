import React from 'react';
import { Redirect } from 'react-router-dom';

// Authentication related pages
import Login from '../pages/Auth/LoginForm';
import Confirm from '../pages/Auth/ConfirmForm';
import UserForm from '../pages/Auth/UserForm';
import FirstForm from '../pages/Auth/FirstForm';
// Dashboard
import { Dashboard } from '../pages/Dashboard';
import { WalletPage } from '../pages/WalletPage';
import { Payments } from '../pages/Payments';
import { History } from '../pages/History';
import { SumraPayPage } from '../pages/SumraPayPage';
import { SumraCardPage } from '../pages/SumraCardPage';
import { Cashbacks } from '../pages/Cashbacks';
import { CreditlinePage } from '../pages/CreditlinePage/CreditlinePage';
import { Rentpayments } from '../pages/Rentpayments';
import { Accounts } from '../pages/Accounts';
import { Referrals } from '../pages/Referrals';
import { GlobalEarnings } from '../pages/GlobalEarnings';
import { Rewards } from '../pages/Rewards';
import { Leaderboard } from '../pages/Leaderboard';
import { Statistics } from '../pages/Statistics';
import { HubPage } from '../pages/HubPage';

//Pages
const userRoutes = [
  { path: '/sumra-wallet', component: Dashboard },
  { path: '/wallet-page', component: WalletPage },
  { path: '/payments', component: Payments },
  { path: '/history', component: History },
  { path: '/sumra_pay-page', component: SumraPayPage },
  { path: '/sumra_card-page', component: SumraCardPage },
  { path: '/cashbacks-page', component: Cashbacks },
  { path: '/creditline-page', component: CreditlinePage },
  { path: '/rentpayments-page', component: Rentpayments },
  { path: '/accounts', component: Accounts },
  { path: '/referrals-page', component: Referrals },
  { path: '/global_earnings', component: GlobalEarnings },
  { path: '/rewards-page', component: Rewards },
  { path: '/leaderboard', component: Leaderboard },
  { path: '/statistics-page', component: Statistics },
  { path: '/hub-page', component: HubPage },
  // eslint-disable-next-line
  { path: "/", exact: true, component: () => <Redirect to="/sumra-wallet" /> },
];

const authRoutes = [
  { path: '/auth', component: FirstForm },
  { path: '/login', component: Login },
  { path: '/confirm', component: Confirm },
  { path: '/userform', component: UserForm },
];

export { userRoutes, authRoutes };
