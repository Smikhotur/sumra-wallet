import {
  REFERRAL_CODE,
  GENERATE_CODE,
  REFERRAL_CODE_POST,
  LAST_REFERRAL_CODE,
} from './actionTypes';

import {ReferralsState, ReferralsAction} from './typeScript';

const initialState = {
  referralCodes: [],
  referralCode: [],
  lastReferralCode: [],
  generateСode: '',
};

const referralReducer = (
  state = initialState,
  action: ReferralsAction
): ReferralsState => {
  switch (action.type) {
    case REFERRAL_CODE:
      return {
        ...state,
        referralCodes: action.referralCodes,
      };
    case LAST_REFERRAL_CODE:
      return {
        ...state,
        lastReferralCode: action.lastReferralCode,
      };
    case REFERRAL_CODE_POST:
      return {
        ...state,
        referralCode: action.referralCode,
      };
    case GENERATE_CODE:
      return {
        ...state,
        generateСode: action.generateСode,
      };
    default:
      return {
        ...state,
      };
  }
};

export default referralReducer;
