import {put, takeEvery, call} from 'redux-saga/effects';
import {actions} from './actions';

const requestContactBook = (option) => {
  return fetch(
    `http://ec2-54-212-236-7.us-west-2.compute.amazonaws.com:8107/v1${option.url}`,
    {
      headers: {
        'user-id': 1000,
        'Content-type': option.contentType,
      },
      ...option.option,
    }
  );
};

function* getContactBookWorker(option) {
  const data = yield call(requestContactBook, option);
  const json = yield call(() => new Promise((res) => res(data.json())));
  console.log(json);
  yield put(
    actions.getAllUsers(
      json.data.filter(
        (man) =>
          man.display_name.trim().length > 0 &&
          man.display_name !== null &&
          man.display_name.trim() !== ''
      )
    )
  );
  yield put(actions.getAllData(json));
}

function* getPaginationUsersWorker(option) {
  const data = yield call(requestContactBook, option);
  const json = yield call(() => new Promise((res) => res(data.json())));
  console.log(json.data);
  yield put(
    actions.setUsersPagination(
      json.data.filter(
        (man) =>
          man.display_name.trim().length > 0 &&
          man.display_name !== null &&
          man.display_name.trim() !== ''
      )
    )
  );
}

function* getContactInfoUsersWorker(option) {
  const data = yield call(requestContactBook, option);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(actions.setOneUser(json.data));
}

function* PostFetchContactBookWorker(option) {
  yield call(requestContactBook, option);
  yield put(actions.getUsers());
}

function* PostAddUserWorker(option) {
  console.log(option);
  yield call(requestContactBook, option);
  yield put(actions.getUsers());
}

function* getContactFavouriteWorker(option) {
  const favourite = yield call(requestContactBook, option);
  const json = yield call(() => new Promise((res) => res(favourite.json())));
  localStorage.setItem('person', JSON.stringify([json.data]));
  yield put(actions.getUsers());
  yield put(actions.setOneUser(json.data));
}

function* getContactGroupsWorker(option) {
  const data = yield call(requestContactBook, option);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(
    actions.getAllGroups(
      json.data.filter((person) => person.display_name !== null)
    )
  );
}

function* PostFetchContactGroupsWorker(option) {
  yield call(requestContactBook, option);
  yield put(actions.getGroups());
}

function* putFetchContactGroupsWorker(option) {
  yield call(requestContactBook, option);
  yield put(actions.getGroups());
}

function* removeGroupWorker(option) {
  yield call(requestContactBook, option);
  yield put(actions.getGroups());
}

function* removeUserWorker(option) {
  yield call(requestContactBook, option);
  yield put(actions.getUsers());
}

export function* contactBookWatcher() {
  yield takeEvery('GET_USERS', getContactBookWorker);
  yield takeEvery('GET_INFO_USERS', getContactInfoUsersWorker);
  yield takeEvery('GET_GROUPS', getContactGroupsWorker);
  yield takeEvery('GET_FAVOURITE', getContactFavouriteWorker);
  yield takeEvery('POST_USERS', PostFetchContactBookWorker);
  yield takeEvery('POST_GROUPS', PostFetchContactGroupsWorker);
  yield takeEvery('PUT_GROUPS', putFetchContactGroupsWorker);
  yield takeEvery('DELETE_GROUP', removeGroupWorker);
  yield takeEvery('DELETE_USER', removeUserWorker);
  yield takeEvery('POST_USER', PostAddUserWorker);
  yield takeEvery('GET_PAGINATION_USERS', getPaginationUsersWorker);
}
