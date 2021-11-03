import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import photo from './assets/images/contactBook/avatar.png';
import { userRoutes, authRoutes } from './routes/allRoutes';
import Authmiddleware from './routes/middleware/Authmiddleware';
import VerticalLayout from './components/VerticalLayout/';
import NonAuthLayout from './components/NonAuthLayout';
import { PeerMembership } from './pages/PeerMembership/PeerMembership';
import { PioneerMemberships } from './pages/PioneerMemberships';
import { ModalCashbacks } from './pages/Cashbacks/ModalCashbacks';
import { ModalLeaderboard } from './pages/Leaderboard/ModalLeaderboard';
import { FormPayment } from './pages/PioneerMemberships/FormPayment';
import { ModalCongrats } from './pages/PioneerMemberships/ModalCongrats';
import { Registration } from './pages/Registration';
import { WalletModal } from './pages/WalletPage/WolletModal/WolletModal';
import { LydianMembership } from './pages/LydianMembership';
import './assets/scss/styleGlobal.scss';
import { RouterInner } from './pages/ContactBook/RouterInner';
import logoWallet from './assets/images/contactBook/logo.svg';
import './assets/scss/peer/style.scss';
import './assets/scss/lydian/style.scss';
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
          <Route path="/peer-membership" component={PeerMembership} />
          <Route path="/lydian-membership" component={LydianMembership} />
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
