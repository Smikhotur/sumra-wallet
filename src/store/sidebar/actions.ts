import {SMALL_MENU} from './actionTypes';

export const actions = {
  activeSmallMenu: (smallMenu: boolean) => ({
    type: SMALL_MENU,
    smallMenu,
  }),
};
