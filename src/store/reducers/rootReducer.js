import mainReducer from './mainReducer';
import { combineReducers } from 'redux';
//import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     mainReducer,
// })

const rootReducer = mainReducer;

export default rootReducer;