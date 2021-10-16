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

import {PioneerState, PioneerAction} from './typeScript';

const initialState: PioneerState = {
  activeUpdrade: false,
  activePay: false,
  activeBasic: true,
  activeBronze: false,
  activeSilver: false,
  activeGold: false,
  nameBronzeBtn: 'Basic',
  nameSilverBtn: '',
  nameGoldBtn: '',
};

const pioneerReducer = (
  state = initialState,
  action: PioneerAction
): PioneerState => {
  switch (action.type) {
    case ACTIVE_UPDRADE_BUTTON:
      return {
        ...state,
        activeUpdrade: action.activeUpdrade,
      };
    case ACTIVE_PAY_BUTTON:
      return {
        ...state,
        activePay: action.activePay,
      };
    case ACTIVE_BASIC:
      return {
        ...state,
        activeBasic: action.activeBasic,
      };
    case ACTIVE_BRONZE:
      return {
        ...state,
        activeBronze: action.activeBronze,
      };
    case ACTIVE_SILVER:
      return {
        ...state,
        activeSilver: action.activeSilver,
      };
    case ACTIVE_GOLD:
      return {
        ...state,
        activeGold: action.activeGold,
      };

    case ACTIVE_BUTTON_BRONZE:
      return {
        ...state,
        nameBronzeBtn: action.nameBronzeBtn,
      };
    case ACTIVE_BUTTON_SILVER:
      return {
        ...state,
        nameSilverBtn: action.nameSilverBtn,
      };
    case ACTIVE_BUTTON_GOLD:
      return {
        ...state,
        nameGoldBtn: action.nameGoldBtn,
      };
    default:
      return {
        ...state,
      };
  }
};

export default pioneerReducer;
