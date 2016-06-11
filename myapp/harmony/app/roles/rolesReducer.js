import {handleActions} from 'redux-actions';
import * as actions from './roleActionTypes';
import { List } from 'immutable';

export default handleActions({
    [actions.SET_ROLES]: (state, action) => {
        return Object.asign({}, state, {
            list: List(action.list)
        });
    }
}, {
    list: List()
});