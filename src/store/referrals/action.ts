import {
  REFERRAL_CODE,
  REFERRAL_CODE_POST,
  GENERATE_CODE,
  GET_REFERRALS,
  POST_REFERRALS,
  DELETE_REFERRALS,
  LAST_REFERRAL_CODE,
} from './actionTypes';

export const actions = {
  getCode: (referralCodes) => ({
    type: REFERRAL_CODE,
    referralCodes,
  }),
  getLastCode: (lastReferralCode) => ({
    type: LAST_REFERRAL_CODE,
    lastReferralCode,
  }),
  postCode: (referralCode) => ({
    type: REFERRAL_CODE_POST,
    referralCode,
  }),
  sentCode: (generateСode) => ({
    type: GENERATE_CODE,
    generateСode,
  }),
  fatchReferrals: () => ({
    type: GET_REFERRALS,
  }),
  postReferrals: (code) => ({
    type: POST_REFERRALS,
    option: {
      application_id: code,
    },
  }),
  removeReferrals: (id) => ({
    type: DELETE_REFERRALS,
    id,
  }),
};
