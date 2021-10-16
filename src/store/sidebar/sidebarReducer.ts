import {SMALL_MENU} from './actionTypes';

import {SidebarState, SidebarAction} from './typeScript';

const initialState = {
  smallMenu: true,
};

const sidebarReducer = (
  state = initialState,
  action: SidebarAction
): SidebarState => {
  switch (action.type) {
    case SMALL_MENU:
      return {
        ...state,
        smallMenu: action.smallMenu,
      };
    default:
      return {
        ...state,
      };
  }
};

export default sidebarReducer;
