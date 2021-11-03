import { put, takeEvery, call } from 'redux-saga/effects';
import actions from './actions';
import data from './data.json';
// const user_id = localStorage.getItem('user_id');
// const token_api = localStorage.getItem('token_api');

const requestContactBook = (option) => {
  return fetch(
    `http://ec2-52-37-72-94.us-west-2.compute.amazonaws.com:8080/api/documentation${option.url}`,
    {
      headers: {
        'user-id': '00000000-1000-1000-1000-000000000000',
        // Authorization: `Bearer ${token_api}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
      ...option.option,
    }
  )
    .then((response) => response.json())
    .catch((e) => {
      console.log('Error: ', e);
      return [];
    });
};

const requestPostContactBook = (option) => {
  return fetch(
    `http://ec2-54-186-224-210.us-west-2.compute.amazonaws.com:8107/v1/documentation${option.url}`,
    {
      headers: {
        'user-id': '00000000-1000-1000-1000-000000000000',
        // Authorization: `Bearer ${token_api}`,
      },
      ...option.option,
    }
  )
    .then((response) => response.json())
    .catch((e) => {
      console.log(e.response);
      return [];
    });
};

function* getContactBookWorker(option) {
  // eslint-disable-next-line no-unused-vars
  const json = yield call(requestContactBook, option);
  console.log(data);
  // if (json.data !== undefined) {
  //   yield put(actions.getAllUsers(data));
  // }
  yield put(actions.getAllUsers(data));
  yield put(actions.getAllData(data));
}

function* getPaginationUsersWorker(option) {
  const json = yield call(requestContactBook, option);
  if (json.data !== undefined) {
    yield put(actions.setUsersPagination(json.data));
  }
}

function* getContactInfoUsersWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.setOneUser(json.data));
}

function* PostFetchContactBookWorker(option) {
  const json = yield call(requestPostContactBook, option);
  yield put(actions.runPreloader(false));
  yield put(actions.getUsers(`/contacts`));

  if (json.type === 'success') {
    yield put(actions.getMassage(json.message));
  } else {
    yield put(actions.getMassage(`The server is currently down`));
  }
}

function* PostAddUserWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));
  if (json.type === 'success') {
    window.history.go(-1);
    yield put(
      actions.getMassage(
        `${json.data.display_name} was added to the contact book`
      )
    );
  } else {
    yield put(actions.getMassage(`The server is currently down`));
  }
}

function* PutAddUserWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));
  if (json.type === 'success') {
    window.history.go(-1);
    yield put(
      actions.getMassage(
        `${json.data.display_name} was added to the contact book`
      )
    );
  } else {
    yield put(actions.getMassage(`The server is currently down`));
  }
}

function* MergeUsersWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));

  // if (json.type === "success") {
  //   yield put(actions
  //     .getMassage(`${json.data.display_name} was added to the contact book`));
  // }
}

function* ReverseUsersWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));

  // if (json.type === "success") {
  //   yield put(actions
  //     .getMassage(`${json.data.display_name} was added to the contact book`));
  // }
}

function* getContactFavouriteWorker(option) {
  const json = yield call(requestContactBook, option);
  // console.log([json.data]);
  localStorage.setItem('person', JSON.stringify([json.data]));
  // yield put(actions.getUsers(`/contacts`));
  yield put(actions.setOneUser(json.data));
}

function* getContactGroupsWorker(option) {
  const json = yield call(requestContactBook, option);

  // yield put(
  //   actions.getAllGroups(
  //     json.data.filter((person) => person.display_name !== null)
  //   )
  // );
}

function* PostFetchContactGroupsWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.getGroups());
  yield put(actions.runPreloader(false));
  console.log('Groups');
  if (json.type === 'success') {
    yield put(actions.getMassage(`You have created a ${json.data.name} group`));
  } else {
    yield put(actions.getMassage(`The server is currently down`));
  }
}

function* putFetchContactGroupsWorker(option) {
  yield put(actions.runPreloader(false));
  yield call(requestContactBook, option);
  yield put(actions.getGroups());
}

function* removeGroupWorker(option) {
  const json = yield call(requestContactBook, option);
  yield put(actions.getGroups());
  yield put(actions.runPreloader(false));
  if (json.data.type === 'success') {
    yield put(actions.getMassage(json.data.message));
  }
}

function* removeUserWorker(option) {
  yield put(actions.runPreloader(false));
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));
  // yield put(actions.getUsers(`/contacts`));
  if (json.data.type === 'success') {
    yield put(actions.getMassage(json.data.message));
  }
}

function* removeUsersWorker(option) {
  yield put(actions.runPreloader(false));
  const json = yield call(requestContactBook, option);
  yield put(actions.runPreloader(false));
  yield put(actions.getUsers(`/contacts`));
  if (json.data.type === 'success') {
    yield put(actions.getMassage(json.data.message));
  }
}

function* addContactsGroupWorker(option) {
  const json = yield call(requestContactBook, option);
  if (json.data.message.includes('successfully')) {
    yield put(actions.getMassage(json.data.message));
  }
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
  yield takeEvery('DELETE_USERS', removeUsersWorker);
  yield takeEvery('POST_USER', PostAddUserWorker);
  yield takeEvery('PUT_USER', PutAddUserWorker);
  yield takeEvery('GET_PAGINATION_USERS', getPaginationUsersWorker);
  yield takeEvery('MERGE_CONTACTS', MergeUsersWorker);
  yield takeEvery('REVERSE_CONTACTS', ReverseUsersWorker);
  yield takeEvery('ADD_CONTACTS_GROUPS', addContactsGroupWorker);
}
