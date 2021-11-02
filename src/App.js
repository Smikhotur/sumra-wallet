import React from 'react';
import PropTypes from 'prop-types';
// import ContactBook from 'react-contact-book';
import { Switch, Route, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import logoWallet from './assets/images/contactBook/logo.svg';
// import logoMeet from './assets/images/contactBook/logoMeet.svg';
// import logoChat from './assets/images/contactBook/logoChat.svg';
import photo from './assets/images/contactBook/avatar.png';
// Import Routes all
import { userRoutes, authRoutes } from './routes/allRoutes';
// Import all middleware
import Authmiddleware from './routes/middleware/Authmiddleware';
// layouts Format
import VerticalLayout from './components/VerticalLayout/';
import NonAuthLayout from './components/NonAuthLayout';
import { PioneerMemberships } from './pages/PioneerMemberships';
// import {ExportContactsModal} from './pages/ContactBook/ExportContactsModal';
import { ModalCashbacks } from './pages/Cashbacks/ModalCashbacks';
import { ModalLeaderboard } from './pages/Leaderboard/ModalLeaderboard';
import { FormPayment } from './pages/PioneerMemberships/FormPayment';
import { ModalCongrats } from './pages/PioneerMemberships/ModalCongrats';
import { Registration } from './pages/Registration';
import { WalletModal } from './pages/WalletPage/WolletModal/WolletModal';
// import {ImportLoaderModal} from './pages/ContactBook/ImportContactsModal/ImportLoaderModal';
// import {PercentageSentModal} from './pages/ContactBook/SendReferralModal/PercentageSentModal';
// import {SendModal} from './pages/ContactBook/SendReferralModal/SendModal';
// import {SendReferralModal} from './pages/ContactBook/SendReferralModal';
import './assets/scss/styleGlobal.scss';
import { RouterInner } from './pages/ContactBook/RouterInner';
import logoWallet from './assets/images/contactBook/logo.svg';
const App = (props) => {
  const history = useHistory();

  function getLayout() {
    let layoutCls = VerticalLayout;

    switch (props.layout.layoutType) {
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  }

  const Layout = getLayout();

  const setPath = (pathName) => {
    console.log('Aloha');
    history.push(pathName);
  };

  const config = {
    routes: {
      setPath,
    },
    style: 'sumra-wallet',
    logo: logoWallet,
    header: {
      avatar: photo,
      name: 'Roman Smikhotur',
    },
  };

  return (
    <React.Fragment>
      <div className="style-global">
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          <Route path="/contact-book">
            <RouterInner config={config} />
          </Route>
          <Route path="/pioneer_memberships" component={PioneerMemberships} />
          <Route path="/registration_page" component={Registration} />

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              // exact
            />
          ))}
        </Switch>
        {/* <Route path="/" component={SendReferralModal} />
        <Route path="/" component={SendModal} />
        <Route path="/" component={PercentageSentModal} /> */}
        {/* <Route path="/" component={ImportContactsModal} /> */}
        {/* <Route path="/" component={ExportContactsModal} />
        <Route path="/" component={ImportLoaderModal} /> */}
        <Route path="/" component={ModalCashbacks} />
        <Route path="/" component={ModalLeaderboard} />
        <Route path="/" component={FormPayment} />
        <Route path="/" component={ModalCongrats} />
        <Route path="/" component={WalletModal} />
      </div>
    </React.Fragment>
  );
};

App.propTypes = {
  layout: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);
