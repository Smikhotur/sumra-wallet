import {all, fork} from 'redux-saga/effects';

//public
//import AuthSaga from "./auth/login/saga"
import AuthSaga from './auth/saga';
import LayoutSaga from './layout/saga';
import {referralsWatcher} from '../store/referrals/saga';
import {contactBookWatcher} from '../store/contactBook/saga';

export default function* rootSaga() {
  yield all([
    //public
    //fork(AuthSaga),
    fork(AuthSaga),
    LayoutSaga(),
    referralsWatcher(),
    contactBookWatcher(),
  ]);
}
