import * as actions from './userActionTypes';

const setUser = ({id, name, role, rights}) => ({
     type: actions.SET_USER,
     id,
     name,
     role,
     rights
 });

 const responseError = (error) => ({
     type: actions.RESPONSE_ERROR
 });

 export const checkUser = (name, pass) => {
    return dispatch => {
        return fetch('/users/check', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                pass
            })
        }).then(response => {
            return response.json();
        }).then(position => {
            dispatch(setUser(position));
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
 };