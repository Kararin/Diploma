import {handleActions} from 'redux-actions';
import {List} from 'immutable';

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
    )
}, {
    data: List(),
    isFetching: false,
    isError: false
});