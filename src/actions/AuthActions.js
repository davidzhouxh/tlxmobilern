import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
    USERNAME_CHANGED,
    STORENUMBER_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    ACCEPT_LEGAL_TERM,
    DECLINE_LEGAL_TERM
} from './types';

export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    };
};

export const storeNumberChanged = (text) => {
    return {
        type: STORENUMBER_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ username, storeNumber, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        var authRequest = {
            username: username,
            storeNumber: storeNumber,
            password: password,
            internalUser: true
        };

        axios.post('http://qamobile.titlemax.biz:8181/mobile-acv-service/api/login', authRequest)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => loginUserFail(dispatch, error));

    };
};

export const acceptLegalTerm = () => {
    return {
        type: ACCEPT_LEGAL_TERM
    };
};

export const declineLegalTerm = () => {
    return {
        type: DECLINE_LEGAL_TERM
    };
};

const loginUserFail = (dispatch, error) => {
    console.log(error);
    dispatch({ type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
    console.log(user);
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    // Actions.main();
}