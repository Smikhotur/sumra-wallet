import {
  USERS_TYPE,
  SEARCH_PEOPLE,
  SEARCH_TEXT,
  REVERSE_TYPE,
  SEND_LETTER,
  DOWNLOAD_SMS,
  GET_USERS,
  POST_USERS,
  MODAL_VISIBLE,
  GET_GROUPS,
  GROUPS_TYPE,
  POST_GROUPS,
  DELETE_GROUP,
  PUT_GROUPS,
  OPEN_CONTACT_DETAILS,
  GET_INFO_USERS,
  ONE_USER,
  ID_USER,
  GET_FAVOURITE,
  ALL_DATA,
  FILTER_GROUPS,
  ID_PERSON,
  DELETE_USER,
  POST_USER,
  GET_PAGINATION_USERS,
  ADD_PAGINATION,
} from './actionTypes';

export const actions = {
  getAllData: (data: any) => ({
    type: ALL_DATA,
    data,
  }),
  getAllUsers: (users: any) => ({
    type: USERS_TYPE,
    users,
  }),
  getAllGroups: (groups: any) => ({
    type: GROUPS_TYPE,
    groups,
  }),
  getUsers: () => ({
    type: GET_USERS,
    option: {
      method: 'GET',
    },
    contentType: 'application/json; charset=UTF-8',
    url: '/contacts',
  }),
  getPaginationUsers: (number) => ({
    type: GET_PAGINATION_USERS,
    option: {
      method: 'GET',
    },
    contentType: 'application/json; charset=UTF-8',
    url: `/contacts?page=${number}`,
  }),
  getInfoUser: (id) => ({
    type: GET_INFO_USERS,
    option: {
      method: 'GET',
    },
    contentType: 'application/json; charset=UTF-8',
    url: '/contacts/' + id,
  }),
  getFavourite: (id) => ({
    type: GET_FAVOURITE,
    option: {
      method: 'GET',
    },
    contentType: 'application/json; charset=UTF-8',
    url: '/contacts/' + id + '/favorite',
  }),
  getGroups: () => ({
    type: GET_GROUPS,
    option: {
      method: 'GET',
    },
    contentType: 'application/json; charset=UTF-8',
    url: '/contacts/groups',
  }),
  postUsers: (list) => ({
    type: POST_USERS,
    option: {
      method: 'POST',
      body: list,
    },
    contentType: 'multipart/form-data',
    url: '/contacts/import/file',
  }),
  postUser: (list) => ({
    type: POST_USER,
    option: {
      method: 'POST',
      body: JSON.stringify({
        prefix_name: '',
        first_name: list.first_name,
        middle_name: '',
        last_name: list.last_name,
        suffix_name: '',
        display_name: '',
        nickname: '',
        birthday: list.birthday,
        avatar: '',
        note: '',
        phones: [
          {
            phone: list.phones,
            type: 'home',
            is_default: false,
          },
        ],
        emails: [
          {
            email: list.emails,
            type: 'home',
            is_default: true,
          },
        ],
        is_favorite: false,
      }),
    },
    contentType: 'application/json; charset=UTF-8',
    url: '/contacts',
  }),
  postGroups: (group) => ({
    type: POST_GROUPS,
    option: {
      method: 'POST',
      body: JSON.stringify({name: group}),
    },
    contentType: 'application/json; charset=UTF-8',
    url: '/contacts/groups',
  }),
  putGroups: (group, id) => ({
    type: PUT_GROUPS,
    option: {
      method: 'PUT',
      body: JSON.stringify({name: group}),
    },
    contentType: 'application/json; charset=UTF-8',
    url: '/contacts/groups/' + id,
  }),
  getSearchPeople: (searchPeople: any) => ({
    type: SEARCH_PEOPLE,
    searchPeople,
  }),
  getSearchText: (searchText: any) => ({
    type: SEARCH_TEXT,
    searchText,
  }),
  performUnfolding: (reverse: any) => ({
    type: REVERSE_TYPE,
    reverse,
  }),
  getLetter: (sendLetter: any) => ({
    type: SEND_LETTER,
    sendLetter,
  }),
  dovnloadSend: (download: any) => ({
    type: DOWNLOAD_SMS,
    download,
  }),
  changeModal: (modal: boolean) => ({
    type: MODAL_VISIBLE,
    modal,
  }),
  removeGroup: (id) => ({
    type: DELETE_GROUP,
    option: {
      method: 'DELETE',
    },
    contentType: 'application/json; charset=UTF-8',
    url: '/contacts/groups/' + id,
  }),
  removeUser: (id) => ({
    type: DELETE_USER,
    option: {
      method: 'DELETE',
    },
    contentType: 'application/json; charset=UTF-8',
    url: '/contacts/' + id,
  }),
  setOpenContactDetails: (openContactDetails) => ({
    type: OPEN_CONTACT_DETAILS,
    openContactDetails,
  }),
  setOneUser: (oneUser) => ({
    type: ONE_USER,
    oneUser,
  }),
  setIdUser: (idUser) => ({
    type: ID_USER,
    idUser,
  }),

  setFilterGroups: (filterGroups) => ({
    type: FILTER_GROUPS,
    filterGroups,
  }),

  getIdPerson: (idPerson) => ({
    type: ID_PERSON,
    idPerson,
  }),
  setUsersPagination: (addPagination) => ({
    type: ADD_PAGINATION,
    addPagination,
  }),
};
