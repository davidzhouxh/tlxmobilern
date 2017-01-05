import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AcvReducer from './AcvReducer';

export default combineReducers({
    auth: AuthReducer,
    acv: AcvReducer
});