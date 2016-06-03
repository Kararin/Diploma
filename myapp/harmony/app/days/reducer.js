import {handleActions} from 'redux-actions';
import * as actions from './actionTypes';
import {List, Set} from 'immutable';

export default handleActions({
    RESPONSE_DAYS_SUCCESS: (state, action) => (
        Object.assign({}, state, {
            data: List(action.data),
            isFetching: false,
            isError: false}
        )
    ),
    REQUEST_DAYS: (state, action) => (
        Object.assign({}, state, {
            isFetching: true,
            isError: false})
    ),
    RESPONSE_DAYS_ERROR: (state, action) => (
        Object.assign({}, state, {
            isFetching: false,
            isError: true})
    ),
    [actions.SET_EXPORT]: (state, action) => (
        Object.assign({}, state, {
            exportList: Set(action.daysId)
        })
    )

}, {
    data: List(),
    exportList: Set(),
    isFetching: false,
    isError: false
});