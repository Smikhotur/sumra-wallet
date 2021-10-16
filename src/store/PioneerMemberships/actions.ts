import {
  ACTIVE_UPDRADE_BUTTON,
  ACTIVE_PAY_BUTTON,
  ACTIVE_BASIC,
  ACTIVE_BRONZE,
  ACTIVE_SILVER,
  ACTIVE_GOLD,
  ACTIVE_BUTTON_BRONZE,
  ACTIVE_BUTTON_SILVER,
  ACTIVE_BUTTON_GOLD,
} from './actionTypes';

import {
  FancActiveUpdradeButton,
  FancActivePayButton,
  FancActiveBasicButton,
  FancActiveBronzeButton,
  FancActiveSilverButton,
  FancActiveGoldButton,
  FancNameBronzeButton,
  FancNameSilverButton,
  FancNameGoldButton,
} from './typeScript';

export const actions = {
  activeUpdradeButton: (activeUpdrade: boolean): FancActiveUpdradeButton => ({
    type: ACTIVE_UPDRADE_BUTTON,
    activeUpdrade,
  }),
  activePayButton: (activePay: boolean): FancActivePayButton => ({
    type: ACTIVE_PAY_BUTTON,
    activePay,
  }),
  activeBasicButton: (activeBasic: boolean): FancActiveBasicButton => ({
    type: ACTIVE_BASIC,
    activeBasic,
  }),
  activeBronzeButton: (activeBronze: boolean): FancActiveBronzeButton => ({
    type: ACTIVE_BRONZE,
    activeBronze,
  }),
  activeSilverButton: (activeSilver: boolean): FancActiveSilverButton => ({
    type: ACTIVE_SILVER,
    activeSilver,
  }),
  activeGoldButton: (activeGold: boolean): FancActiveGoldButton => ({
    type: ACTIVE_GOLD,
    activeGold,
  }),
  nameBronzeButton: (nameBronzeBtn: string): FancNameBronzeButton => ({
    type: ACTIVE_BUTTON_BRONZE,
    nameBronzeBtn,
  }),
  nameSilverButton: (nameSilverBtn: string): FancNameSilverButton => ({
    type: ACTIVE_BUTTON_SILVER,
    nameSilverBtn,
  }),
  nameGoldButton: (nameGoldBtn: string): FancNameGoldButton => ({
    type: ACTIVE_BUTTON_GOLD,
    nameGoldBtn,
  }),
};
