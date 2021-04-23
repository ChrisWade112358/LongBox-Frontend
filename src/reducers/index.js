import { combineReducers } from 'redux';
import users from './users'
import manageLoading from './manageLoading'

const rootReducer = combineReducers({users, manageLoading});

export default rootReducer;