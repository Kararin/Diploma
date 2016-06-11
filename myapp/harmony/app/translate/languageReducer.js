import {handleActions} from 'redux-actions';
import * as actions from './languageActionsTypes';

export default handleActions({
    [actions.CHANGE_LANG]: (state, action) => {
        return Object.assign({}, state, {
            lang: action.lang
        });
    }
}, {
    lang: 'ua'
});