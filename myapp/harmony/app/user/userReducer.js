
import {handleActions} from 'redux-actions';
import * as actions from './userActionTypes';
import {List} from 'immutable';

export default handleActions({
    [actions.SET_USER]: (state, {id, name, role, rights}) => {
        return Object.assign({}, state, {
            id,
            name,
            role,
            rights: List.of(...rights),
            isError: false
        });
    },
    [actions.RESPONSE_ERROR]: (state, actions) => {
        return Object.assign({}, state, {
            isError: true,
            id: null,
            name: '',
            role: null,
            rights: List(),
        });
    }
}, {
    id: null,
    name: '',
    role: null,
    rights: List(),
    isError: false
});