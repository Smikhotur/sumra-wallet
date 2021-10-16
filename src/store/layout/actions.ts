import {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_TYPE,
  CHANGE_TOPBAR_THEME,
  SHOW_RIGHT_SIDEBAR,
  SHOW_SIDEBAR,
  CHANGE_PRELOADER,
  TOGGLE_LEFTMENU,
  CHANGE_REFERRAL_CLASS,
} from './actionTypes';

type ChangeLayoutActionType = {type: typeof CHANGE_LAYOUT; payload: string};
type ChangePreloaderActionType = {
  type: typeof CHANGE_PRELOADER;
  payload: boolean;
};
type ChangeLayoutWidthActionType = {
  type: typeof CHANGE_LAYOUT_WIDTH;
  payload: string;
};
type ChangeSidebarThemeActionType = {
  type: typeof CHANGE_SIDEBAR_THEME;
  payload: string;
};
type ChangeReferralClassActionType = {
  type: typeof CHANGE_REFERRAL_CLASS;
  payload: string;
};

type ChangeSidebarTypeActionType = {
  type: typeof CHANGE_SIDEBAR_TYPE;
  payload: {sidebarType: string; isMobile: boolean};
};
type ChangeTopbarThemeActionType = {
  type: typeof CHANGE_TOPBAR_THEME;
  payload: string;
};
type ShowRightSidebarActionActionType = {
  type: typeof SHOW_RIGHT_SIDEBAR;
  payload: boolean;
};
type ShowSidebarActionType = {type: typeof SHOW_SIDEBAR; payload: boolean};
type ToggleLeftmenuActionType = {
  type: typeof TOGGLE_LEFTMENU;
  payload: boolean;
};

export type LayoutActionType =
  | ChangeLayoutActionType
  | ChangePreloaderActionType
  | ChangeLayoutWidthActionType
  | ChangeSidebarThemeActionType
  | ChangeSidebarTypeActionType
  | ChangeTopbarThemeActionType
  | ShowRightSidebarActionActionType
  | ShowSidebarActionType
  | ToggleLeftmenuActionType
  | ChangeReferralClassActionType;

export const changeLayout = (layout: string): ChangeLayoutActionType => ({
  type: CHANGE_LAYOUT,
  payload: layout,
});

export const changePreloader = (
  layout: boolean
): ChangePreloaderActionType => ({
  type: CHANGE_PRELOADER,
  payload: layout,
});

export const changeLayoutWidth = (
  width: string
): ChangeLayoutWidthActionType => ({
  type: CHANGE_LAYOUT_WIDTH,
  payload: width,
});

export const changeSidebarTheme = (
  theme: string
): ChangeSidebarThemeActionType => ({
  type: CHANGE_SIDEBAR_THEME,
  payload: theme,
});
export const changeReferralClass = (
  referralClass: string
): ChangeReferralClassActionType => ({
  type: CHANGE_REFERRAL_CLASS,
  payload: referralClass,
});

export const changeSidebarType = (
  sidebarType: string,
  isMobile: boolean
): ChangeSidebarTypeActionType => {
  return {
    type: CHANGE_SIDEBAR_TYPE,
    payload: {sidebarType, isMobile},
  };
};

export const changeTopbarTheme = (
  topbarTheme: string
): ChangeTopbarThemeActionType => ({
  type: CHANGE_TOPBAR_THEME,
  payload: topbarTheme,
});

export const showRightSidebarAction = (
  isopen: boolean
): ShowRightSidebarActionActionType => ({
  type: SHOW_RIGHT_SIDEBAR,
  payload: isopen,
});

export const showSidebar = (isopen: boolean): ShowSidebarActionType => ({
  type: SHOW_SIDEBAR,
  payload: isopen,
});

export const toggleLeftmenu = (isopen: boolean): ToggleLeftmenuActionType => ({
  type: TOGGLE_LEFTMENU,
  payload: isopen,
});
