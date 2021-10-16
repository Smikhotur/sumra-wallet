import {combineReducers} from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication
import authReducer from './auth/reducer';

// Contact Book
import reducerContactBook from './contactBook/reducerContactBook';

//Pioneer Memberships

import pioneerReducer from './PioneerMemberships/pioneerReduser';

import sidebarReducer from './sidebar/sidebarReducer';

import referralReducer from './referrals/referralsReducer';

const rootReducer = combineReducers({
  // public
  Layout,
  authReducer,
  reducerContactBook,
  pioneerReducer,
  sidebarReducer,
  referralReducer,
});

type RootReducerType = typeof rootReducer;
/*global ReturnType*/
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
