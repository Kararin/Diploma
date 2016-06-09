import {handleActions} from 'redux-actions';
import * as actions from './actionsTypes';

export default handleActions({
    [actions.SET_USER]: (state, {id, name, role, rights}) => {
        return Object.assign({}, state, {
            id,
            name,
            role,
            rights
        });
    }
}, {
    id: null,
    name: '',
    role: null,
    rights: []
});