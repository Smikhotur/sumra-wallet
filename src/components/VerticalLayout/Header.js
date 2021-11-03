import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import {useSelector} from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/sumraMenu/Logo.svg';
import { useSelector, RootStateOrAny } from 'react-redux';

// import images
import user from '../../assets/images/users/user.svg';
import bell from '../../assets/images/users/bell.svg';

//i18n
import { withTranslation } from 'react-i18next';

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from '../../store/actions';
//Import Breadcrumb
// import Breadcrumbs from '../../components/Common/BreadcrumbSumra';

const Header = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [registration, setRegistration] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const smallMenu = useSelector(
    (state: RootStateOrAny) => state.sidebarReducer.smallMenu
  );

  function tToggle() {
    props.toggleLeftmenu(!props.leftMenu);
    if (props.leftSideBarType === 'default') {
      props.changeSidebarType('condensed', isMobile);
    } else if (props.leftSideBarType === 'condensed') {
      props.changeSidebarType('default', isMobile);
    }
  }

  if (tToggle) {
    tToggle;
  }

  const onPageChange = (e) => {
    switch (e) {
      case '/sumra-wallet':
        return 'Dashboard';
      case '/wallet-page':
        return 'Wallet';
      case '/payments':
        return 'Payments';
      case '/history':
        return 'History';
      case '/sumra_pay-page':
        return 'Sumra pay';
      case '/sumra_card-page':
        return 'Sumra card';
      case '/creditline-page':
        return 'Creditline';
      case '/accounts':
        return 'Accounts';
      case '/referrals-page':
        return 'Referrals';
      case '/global_earnings/referrals_program':
        return 'Global Earnings';
      case '/rewards-page':
        return 'Rewards';
      case '/cashbacks-page':
        return 'Cashbacks';
      case '/rentpayments-page':
        return 'Rentpayments';
      case '/leaderboard':
        return 'Leaderboard';
      case '/statistics-page/statistic':
        return 'Statistics';
      case '/Contact book':
        return 'contact-book';
      case '/pioneermemberships':
        return 'Pioneer memberships';
      case '/hub-page':
        return 'Hub';
      default:
        return 'Dashboard';
    }
  };
  // const {leftSideBarType} = useSelector((state) => state.Layout);

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className={smallMenu ? 'navbar-header' : 'navbar-header-small'}>
          <div className="navbar-header-box-title">
            <h2 className="navbar-header-box-title" style={{ margin: '0' }}>
              {onPageChange(location.pathname)}
            </h2>
          </div>
          {registration ? (
            <div className="d-flex">
              <div
                className="header-item"
                style={{
                  marginLeft: '50px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img src={bell} alt="img"></img>
              </div>
              <div
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                tag="button"
              >
                <img
                  // className="rounded-circle header-profile-user"
                  src={user}
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ml-2 mr-1">
                  Harriet Andersson
                </span>
              </div>
            </div>
          ) : (
            <div>
              <Link
                to="/hub-page"
                style={{ marginRight: '20px', color: '#7165E3' }}
              >
                HUB
              </Link>
              <Link to="/registration_page" className="registration-user">
                Sign Up or Login
              </Link>
            </div>
          )}
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
};

const mapStatetoProps = (state) => {
  const { layoutType, showRightSidebar, leftMenu, leftSideBarType } =
    state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header));
