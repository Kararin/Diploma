import * as actions from './rightsActionTypes';

const setRights = (list) => ({type: actions.SET_RIGHTS, list});

const responseError = () => ({type: ''});

export const fetchRights = () => {
    return (dispatch) => {
        return fetch('/rights')
            .then(response => {
                return response.json();
            })
            .then(json => {
                dispatch(setRights(json));
            })
            .catch(error => {
                dispatch(responseError(error));
            });
    };
};
