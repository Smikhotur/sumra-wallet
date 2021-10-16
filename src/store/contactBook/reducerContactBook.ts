import {ContactBookState, ContactBookAction} from './typeScript';
import {
  USERS_TYPE,
  SEARCH_PEOPLE,
  SEARCH_TEXT,
  REVERSE_TYPE,
  SEND_LETTER,
  DOWNLOAD_SMS,
  MODAL_VISIBLE,
  GROUPS_TYPE,
  OPEN_CONTACT_DETAILS,
  ONE_USER,
  ID_USER,
  ALL_DATA,
  FILTER_GROUPS,
  ID_PERSON,
  ADD_PAGINATION,
} from './actionTypes';

const initialState: ContactBookState = {
  users: [],
  data: [],
  searchPeople: [],
  addPagination: [],
  groups: [],
  oneUser: [],
  idPerson: [],
  searchText: '',
  reverse: false,
  openContactDetails: false,
  sendLetter: '',
  download: 0,
  modal: false,
  idUser: '',
  filterGroups: '',
};

const reducerContactBook = (
  state = initialState,
  action: ContactBookAction
): ContactBookState => {
  const letter = [];
  const alfa = [];

  switch (action.type) {
    case USERS_TYPE:
      return {
        ...state,
        users: action.users
          .map((friends) => {
            const word = friends.display_name[0].toUpperCase();
            if (!letter.includes(word)) {
              letter.push(friends.display_name[0].toUpperCase());
              alfa.push({display_name: friends.display_name[0].toUpperCase()});
              return friends;
            }
            return friends;
          })
          .concat(alfa)
          .sort((a, b) =>
            !state.reverse
              ? a.display_name.localeCompare(b.display_name)
              : b.display_name.localeCompare(a.display_name)
          ),
      };

    case SEARCH_PEOPLE:
      return {
        ...state,
        // searchPeople: state.showPeople
        //   .map((friends) => {
        //     const word = friends.display_name[0].toUpperCase();
        //     if (!letter.includes(word)) {
        //       letter.push(friends.display_name[0].toUpperCase());
        //       alfa.push({display_name: friends.display_name[0].toUpperCase()});
        //       return friends;
        //     }
        //     return friends;
        //   })
        //   .concat(alfa)
        //   .sort((a, b) =>
        //     !state.reverse
        //       ? a.display_name.localeCompare(b.display_name)
        //       : b.display_name.localeCompare(a.display_name)
        //   )
        //   .filter((user) => {
        //     // const removeSpace = user.phonNumber.replace(/\s/g, '');
        //     if (
        //       user.display_name
        //         .toLowerCase()
        //         .includes(state.searchText.trim().toLowerCase())
        //     ) {
        //       return user.display_name
        //         .toLowerCase()
        //         .includes(state.searchText.trim().toLowerCase());
        //     }
        // if (
        //   user.email
        //     .toLowerCase()
        //     .includes(state.searchText.trim().toLowerCase())
        // ) {
        //   return user.email
        //     .toLowerCase()
        //     .includes(state.searchText.trim().toLowerCase());
        // }
        // if (removeSpace.includes(state.searchText.trim())) {
        //   return removeSpace.includes(state.searchText.trim());
        // }
        //     })
        //     .map((user) => {
        //       if (!newLetter.includes(user.display_name[0])) {
        //         console.log(user.display_name[0], user);

        //         newLetter.push(user.display_name[0].toUpperCase());
        //         alfa.push({display_name: user.display_name[0].toUpperCase()});
        //       }
        //       return user;
        //     })
        //     .concat(newAlfa)
        //     .sort((a, b) =>
        //       !state.reverse
        //         ? a.display_name.localeCompare(b.display_name)
        //         : b.display_name.localeCompare(a.display_name)
        //     ),
      };
    case ALL_DATA:
      return {
        ...state,
        data: action.data,
      };

    case ADD_PAGINATION:
      return {
        ...state,
        users: state.users
          .concat(action.addPagination)
          .map((friends) => {
            const word = friends.display_name[0].toUpperCase();
            if (friends.display_name.length === 1) {
              return;
            }
            if (!letter.includes(word)) {
              letter.push(friends.display_name[0].toUpperCase());
              alfa.push({display_name: friends.display_name[0].toUpperCase()});
              return friends;
            }
            return friends;
          })
          .concat(alfa)
          .sort((a, b) =>
            !state.reverse
              ? a.display_name.localeCompare(b.display_name)
              : b.display_name.localeCompare(a.display_name)
          )
          .filter((man) => man !== undefined),
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
    default:
      return state;
  }
};

export default reducerContactBook;
