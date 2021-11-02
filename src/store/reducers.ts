import {combineReducers} from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication
import authReducer from './auth/reducer';

// Contact Book

//Pioneer Memberships

import pioneerReducer from './PioneerMemberships/pioneerReduser';

import sidebarReducer from './sidebar/sidebarReducer';

import referralReducer from './referrals/referralsReducer';

import reducerContactBook from './contactBook/reducerContactBook';

const rootReducer = combineReducers({
  // public
  Layout,
  authReducer,
  pioneerReducer,
  sidebarReducer,
  referralReducer,
  reducerContactBook,
});

type RootReducerType = typeof rootReducer;
/*global ReturnType*/
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
