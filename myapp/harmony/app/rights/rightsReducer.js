import {handleActions} from 'redux-actions';
import * as actions from './rightsActionTypes';
import { Set } from 'immutable';

export default handleActions({
    [actions.SET_RIGHTS]: (state, action) => {
        return Object.assign({}, state, {
            set: Set.of(...action.list)
        });
    }
}, {
    set: Set()
});