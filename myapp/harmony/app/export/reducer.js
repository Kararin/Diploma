import {handleActions} from 'redux-actions';
import * as actions from './actionTypes';

export default handleActions({
    [actions.EXPORT_TO_HTML_REQUEST]: (state, action) => {
        return Object.assign({}, state, {
            fetching: true
        });
    },
    [actions.EXPORT_TO_HTML_ERROR]: (state, action) => {
        return Object.assign({}, state, {
           fetching: false,
           isError: true
        });
    },
    [actions.EXPORT_TO_HTML_SUCCESS]: (state, action) => {
        return Object.assign({}, state, {
            isError: false,
            fetching: false
        });
    }
}, {
    fetching: false,
    isError: false
});