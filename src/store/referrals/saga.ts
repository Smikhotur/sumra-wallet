import {put, takeEvery, call} from 'redux-saga/effects';

const fetchReferralsFromApi = () =>
  fetch(
    'http://ec2-52-43-1-93.us-west-2.compute.amazonaws.com:8091/v1/referrals/referral-codes',
    {headers: {'user-id': '00000000-1000-1000-1000-000000000000'}}
  );

import {actions} from './action';

function* getReferralsWorker() {
  const data = yield call(fetchReferralsFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  console.log(json);
  yield put(actions.getCode(json.data));
}

function* PostFetchWalletsWorker(params) {
  const result = yield fetch(
    'http://ec2-52-43-1-93.us-west-2.compute.amazonaws.com:8091/v1/referrals/referral-codes',
    {
      method: 'POST',
      headers: {
        'user-id': '00000000-1000-1000-1000-000000000000',
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(params.option),
    }
  ).then((res) => res.json());

  yield put(actions.postCode(result.data));

  const newData = yield call(fetchReferralsFromApi);
  const json = yield call(() => new Promise((res) => res(newData.json())));
  yield put(actions.getCode(json.data));
}

function* removeReferralWorker({id}) {
  yield fetch(
    `http://ec2-52-43-1-93.us-west-2.compute.amazonaws.com:8091/v1/referrals/referral-codes/${id}`,
    {
      method: 'DELETE',
      headers: {
        'user-id': '00000000-1000-1000-1000-000000000000',
      },
    }
  );

  const newData = yield call(fetchReferralsFromApi);
  const json = yield call(() => new Promise((res) => res(newData.json())));
  yield put(actions.getCode(json.data));
}

export function* referralsWatcher() {
  yield takeEvery('GET_REFERRALS', getReferralsWorker);
  yield takeEvery('POST_REFERRALS', PostFetchWalletsWorker);
  yield takeEvery('DELETE_REFERRALS', removeReferralWorker);
}
