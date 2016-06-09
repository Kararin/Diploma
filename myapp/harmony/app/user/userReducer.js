
import {handleActions} from 'redux-actions';
import * as actions from './userActionTypes';

export default handleActions({
    [actions.SET_USER]: (state, {id, name, role, rights}) => {
        return Object.assign({}, state, {
            id,
            name,
            role,
            rights,
            isError: false
        });
    },
    [actions.RESPONSE_ERROR]: (state, actions) => {
        return Object.assign({}, state, {
            isError: true,
            id: null,
            name: '',
            role: null,
            rights: [],
        });
    }
}, {
    id: null,
    name: '',
    role: null,
    rights: [],
    isError: false
});