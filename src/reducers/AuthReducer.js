import {
    USERNAME_CHANGED,
    STORENUMBER_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    ACCEPT_LEGAL_TERM,
    DECLINE_LEGAL_TERM    
} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    storeNumber: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    showModal: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGED:
            return { ...state, username: action.payload };
        case STORENUMBER_CHANGED:
            return { ...state, storeNumber: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, showModal: true, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Login Failed.', password: '', loading: false };
        case ACCEPT_LEGAL_TERM:
            return { ...state, showModal: false };
        case DECLINE_LEGAL_TERM:
            return { ...state, showModal: false };
        default:
            return state;
    }
}