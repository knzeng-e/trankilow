import users from './usersReducer';
import travels from './travelsReducer';
import { combineReducers } from 'redux';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
    users,
    travels,
    mainReducer,
})


export default rootReducer;