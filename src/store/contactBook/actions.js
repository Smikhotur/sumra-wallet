import {
  USERS_TYPE,
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
  DELETE_USERS,
  POST_USER,
  GET_PAGINATION_USERS,
  ADD_PAGINATION,
  ID_GROUP,
  PRELOADER_START,
  MESSAGE_FROM_SERVER,
  REMOVE_GROUP_CONTACT,
  NAME_OF_THE_DELETED,
  REMOVE_ID_CONTACTS,
  MERGE_CONTACTS,
  REVERSE_CONTACTS,
  ADD_CONTACTS_GROUPS,
  PUT_USER,
  MESSAGE_ADD_CONTACT,
} from './actionTypes';

const actions = {
  getAllData: (data) => ({
    type: ALL_DATA,
    data,
  }),
  getAllUsers: (users) => ({
    type: USERS_TYPE,
    users,
  }),
  getAllGroups: (groups) => ({
    type: GROUPS_TYPE,
    groups,
  }),
  getUsers: (url) => ({
    type: GET_USERS,
    option: {
      method: 'GET',
    },
    url,
  }),
  getPaginationUsers: (number) => ({
    type: GET_PAGINATION_USERS,
    option: {
      method: 'GET',
    },
    url: `/contacts?page=${number}`,
  }),
  getInfoUser: (id) => ({
    type: GET_INFO_USERS,
    option: {
      method: 'GET',
    },
    url: '/contacts/' + id,
  }),
  getFavourite: (id) => ({
    type: GET_FAVOURITE,
    option: {
      method: 'GET',
    },
    url: '/contacts/' + id + '/favorite',
  }),
  getGroups: () => ({
    type: GET_GROUPS,
    option: {
      method: 'GET',
    },
    url: '/groups',
  }),
  postUsers: (contacts) => ({
    type: POST_USERS,
    option: {
      method: 'POST',
      body: contacts,
    },
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
            phone: list.phone,
            type: 'home',
            is_default: false,
          },
        ],
        emails: [
          {
            email: list.email,
            type: 'home',
            is_default: true,
          },
        ],
        is_favorite: false,
      }),
    },
    url: '/contacts',
  }),
  putUser: (list, id) => ({
    type: PUT_USER,
    option: {
      method: 'PUT',
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
            phone: list.phone,
            type: 'home',
            is_default: false,
          },
        ],
        emails: [
          {
            email: list.email,
            type: 'home',
            is_default: true,
          },
        ],
        works: [
          {
            company: '',
            department: '',
            post: '',
          },
        ],
        addresses: [
          {
            country: '',
            address_string1: '',
            address_string2: '',
            city: '',
            provinces: '',
            postcode: '',
            po_box: '',
            type: '',
            is_default: '',
          },
        ],
        sites: [
          {
            url: '',
            type: '',
            is_default: true,
          },
        ],
        chats: [
          {
            chat: '',
            type: '',
            is_default: true,
          },
        ],
        relations: [
          {
            relation: '',
            type: '',
            is_default: true,
          },
        ],
        is_favorite: false,
      }),
    },
    url: `/contacts/${id}`,
  }),
  postGroups: (group) => ({
    type: POST_GROUPS,
    option: {
      method: 'POST',
      body: JSON.stringify({name: group}),
    },
    url: '/groups',
  }),
  putGroups: (group, id) => ({
    type: PUT_GROUPS,
    option: {
      method: 'PUT',
      body: JSON.stringify({name: group}),
    },
    url: '/groups/' + id,
  }),
  getSearchText: (searchText) => ({
    type: SEARCH_TEXT,
    searchText,
  }),
  performUnfolding: (reverse) => ({
    type: REVERSE_TYPE,
    reverse,
  }),
  getLetter: (sendLetter) => ({
    type: SEND_LETTER,
    sendLetter,
  }),
  dovnloadSend: (download) => ({
    type: DOWNLOAD_SMS,
    download,
  }),
  changeModal: (modal) => ({
    type: MODAL_VISIBLE,
    modal,
  }),
  removeGroup: (id) => ({
    type: DELETE_GROUP,
    option: {
      method: 'DELETE',
    },
    url: '/groups/' + id,
  }),
  removeUser: (id) => ({
    type: DELETE_USER,
    option: {
      method: 'DELETE',
    },
    url: '/contacts/' + id,
  }),
  removeUsers: (usersId) => ({
    type: DELETE_USERS,
    option: {
      method: 'DELETE',
      body: JSON.stringify({ids: usersId}),
    },
    url: '/contacts/0',
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
  setIdGroup: (idGroup) => ({
    type: ID_GROUP,
    idGroup,
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
  runPreloader: (preloader) => ({
    type: PRELOADER_START,
    preloader,
  }),
  getMassageAddContact: (preloader) => ({
    type: MESSAGE_ADD_CONTACT,
    preloader,
  }),
  getMassage: (messageFromServer) => ({
    type: MESSAGE_FROM_SERVER,
    messageFromServer,
  }),
  removeGroupContact: (remove) => ({
    type: REMOVE_GROUP_CONTACT,
    remove,
  }),
  whatToDelete: (nameOfTheDeleted) => ({
    type: NAME_OF_THE_DELETED,
    nameOfTheDeleted,
  }),
  getIdContactsRemove: (removeContacts) => ({
    type: REMOVE_ID_CONTACTS,
    removeContacts,
  }),
  getContactsReverse: (url) => ({
    type: REVERSE_CONTACTS,
    option: {
      method: 'GET',
    },
    url,
  }),
  getIdContactsMerge: (idContacts) => ({
    type: MERGE_CONTACTS,
    option: {
      method: 'POST',
      body: JSON.stringify({
        contacts: idContacts,
      }),
    },
    url: '/contacts/merge',
  }),
  addContactsGroups: (contacts, groups) => ({
    type: ADD_CONTACTS_GROUPS,
    option: {
      method: 'POST',
      body: JSON.stringify({
        contacts: contacts,
        groups: groups,
      }),
    },
    url: '/contacts/join-groups',
  }),
};

export default actions;
