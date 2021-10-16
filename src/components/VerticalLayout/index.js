import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
  changeLayoutWidth,
} from '../../store/actions';

// Layout Related Components
import Header from './Header';
import Sidebar from './Sidebar';
import Rightbar from '../CommonForBoth/Rightbar';
import {useSelector, RootStateOrAny} from 'react-redux';

const Layout = ({
  leftSideBarTheme,
  layoutWidth,
  leftSideBarType,
  topbarTheme,
  location,
  children,
  showRightSidebar,
  isPreloader,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );
  // eslint-disable-next-line no-unused-vars
  const smallMenu = useSelector(
    (state: RootStateOrAny) => state.sidebarReducer.smallMenu
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  useEffect(() => {
    if (isPreloader === true) {
      document.getElementById('preloader').style.display = 'block';
      document.getElementById('status').style.display = 'block';

      setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('status').style.display = 'none';
      }, 2500);
    } else {
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('status').style.display = 'none';
    }

    // Scroll Top to 0
    window.scrollTo(0, 0);
    let currentage = capitalizeFirstLetter(location.pathname);

    document.title = currentage + ' | Ulta Cards Infinity';
    if (leftSideBarTheme) {
      changeSidebarTheme(leftSideBarTheme);
    }

    if (layoutWidth) {
      changeLayoutWidth(layoutWidth);
    }

    if (leftSideBarType) {
      changeSidebarType(leftSideBarType);
    }
    if (topbarTheme) {
      changeTopbarTheme(topbarTheme);
    }
  });

  const toggleMenuCallback = () => {
    if (leftSideBarType === 'default') {
      changeSidebarType('condensed', isMobile);
    } else if (leftSideBarType === 'condensed') {
      changeSidebarType('default', isMobile);
    }
  };

  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header toggleMenuCallback={toggleMenuCallback} />
        <Sidebar
          theme={leftSideBarTheme}
          type={leftSideBarType}
          isMobile={isMobile}
        />
        <div className={smallMenu ? 'main-content' : 'main-content-small'}>
          {children}
        </div>
      </div>
      {showRightSidebar ? <Rightbar /> : null}
    </React.Fragment>
  );
};

Layout.propTypes = {
  changeLayoutWidth: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarType: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any,
};

const mapStatetoProps = (state) => {
  return {
    ...state.Layout,
  };
};
export default connect(mapStatetoProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
  changeLayoutWidth,
})(withRouter(Layout));
