import {
  SET_USER_ACCESS_TOKEN,
  SET_USER_NAME,
  GET_USER_ACCESS_TOKEN,
  GET_USER_NAME,
  SET_VERIFICATION_CODE,
  SEND_CODE,
  GET_VERIFICATION_CODE,
  GET_VALIDATE_NAME,
  SET_VALIDATE_NAME,
  GET_REGISTRATION_DATA,
  SET_REGISTRATION_DATA,
} from './actionTypes';
export type SendCodeType = {
  phone_number: string;
  device_id: string;
};
export type RegistrationDataType = {
  code: string;
  username: string;
};

const actions = {
  setUserAccessToken: (accessToken: string) => ({
    type: SET_USER_ACCESS_TOKEN,
    payload: accessToken,
  }),
  setUserName: (username: string) => ({
    type: SET_USER_NAME,
    payload: username,
  }),
  getUserAccessToken: ({username, password}) => ({
    type: GET_USER_ACCESS_TOKEN,
    payload: {username, password},
  }),
  getUserName: () => ({
    type: GET_USER_NAME,
  }),
  setVerificationCode: (code: string) => ({
    type: SET_VERIFICATION_CODE,
    payload: code,
  }),
  getVerificationCode: (code: string) => ({
    type: GET_VERIFICATION_CODE,
    payload: code,
  }),
  sendCode: (code: SendCodeType) => ({
    type: SEND_CODE,
    payload: code,
  }),
  getValidateName: (value: string) => ({
    type: GET_VALIDATE_NAME,
    payload: value,
  }),

  setValidateName: (value: boolean) => ({
    type: SET_VALIDATE_NAME,
    payload: value,
  }),
  getRegistrationData: (data: RegistrationDataType) => ({
    type: GET_REGISTRATION_DATA,
    payload: data,
  }),
  setRegistrationData: (value: boolean) => ({
    type: SET_REGISTRATION_DATA,
    payload: value,
  }),
};

export const {
  setUserAccessToken,
  setUserName,
  getUserAccessToken,
  getUserName,
  setVerificationCode,
  sendCode,
  getVerificationCode,
  getValidateName,
  setValidateName,
  getRegistrationData,
  setRegistrationData,
} = actions;
