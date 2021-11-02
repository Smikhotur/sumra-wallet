import {
  USERS_TYPE,
  SEARCH_TEXT,
  REVERSE_TYPE,
  SEND_LETTER,
  DOWNLOAD_SMS,
  MODAL_VISIBLE,
  GROUPS_TYPE,
  OPEN_CONTACT_DETAILS,
  ONE_USER,
  ID_USER,
  ID_GROUP,
  ALL_DATA,
  FILTER_GROUPS,
  ID_PERSON,
  ADD_PAGINATION,
  PRELOADER_START,
  MESSAGE_FROM_SERVER,
  MESSAGE_ADD_CONTACT,
  REMOVE_GROUP_CONTACT,
  NAME_OF_THE_DELETED,
  REMOVE_ID_CONTACTS,
} from './actionTypes';

const initialState = {
  users: [],
  data: [],
  searchPeople: [],
  addPagination: [],
  groups: [],
  oneUser: [],
  idPerson: [],
  removeContacts: [],
  searchText: '',
  reverse: false,
  openContactDetails: false,
  modal: false,
  preloader: false,
  messageAddContact: false,
  remove: false,
  sendLetter: '',
  download: 0,
  idUser: '',
  idGroup: '',
  filterGroups: '',
  messageFromServer: '',
  nameOfTheDeleted: '',
};

const reducerContactBook = (state = initialState, action) => {
  switch (action.type) {
    case USERS_TYPE:
      return {
        ...state,
        users: action.users,
      };

    case ALL_DATA:
      return {
        ...state,
        data: action.data,
      };

    case ADD_PAGINATION:
      return {
        ...state,
        users: state.users.concat(action.addPagination),
      };

    case SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText,
      };

    case GROUPS_TYPE:
      return {
        ...state,
        groups: action.groups,
      };

    case REVERSE_TYPE:
      return {
        ...state,
        reverse: action.reverse,
      };

    case SEND_LETTER:
      return {
        ...state,
        sendLetter: action.sendLetter,
      };

    case DOWNLOAD_SMS:
      return {
        ...state,
        download: action.download,
      };
    case MODAL_VISIBLE:
      return {
        ...state,
        modal: action.modal,
      };
    case OPEN_CONTACT_DETAILS:
      return {
        ...state,
        openContactDetails: action.openContactDetails,
      };
    case ONE_USER:
      return {
        ...state,
        oneUser: action.oneUser,
      };
    case ID_USER:
      return {
        ...state,
        idUser: action.idUser,
      };
    case ID_GROUP:
      return {
        ...state,
        idGroup: action.idGroup,
      };
    case FILTER_GROUPS:
      return {
        ...state,
        filterGroups: action.filterGroups,
      };
    case ID_PERSON:
      return {
        ...state,
        idPerson: action.idPerson,
      };
    case PRELOADER_START:
      return {
        ...state,
        preloader: action.preloader,
      };
    case MESSAGE_FROM_SERVER:
      return {
        ...state,
        messageFromServer: action.messageFromServer,
      };
    case MESSAGE_ADD_CONTACT:
      return {
        ...state,
        messageAddContact: action.messageAddContact,
      };
    case REMOVE_GROUP_CONTACT:
      return {
        ...state,
        remove: action.remove,
      };
    case NAME_OF_THE_DELETED:
      return {
        ...state,
        nameOfTheDeleted: action.nameOfTheDeleted,
      };
    case REMOVE_ID_CONTACTS:
      return {
        ...state,
        removeContacts: action.removeContacts,
      };
    default:
      return state;
  }
};

export default reducerContactBook;
