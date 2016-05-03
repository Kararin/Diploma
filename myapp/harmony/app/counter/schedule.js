import {handleActions} from 'redux-actions';
import {List} from 'immutable';

export default handleActions({
    SET_CURRENT: (state, action) => Object.assign({}, state, {
        current: action.id
    }),
    REQUEST_SCHEDULE: (state, action) => {
        return Object.assign({}, state, {
            isFetching: true
        });
    },
    RESPONSE_SCHEDULE_ERROR: (state, action) => {
        return Object.assign({}, state, {
            isError: true,
            isFetching: false
        });
    },
    RESPONSE_SCHEDULE_SUCCESS: (state, action) => {
        return Object.assign({}, state, {
            isFetching: false,
            isError: false,
            data: List(action.data)
        });
    },
    ADD_SCHEDULE_ITEM: (state, action) => {
        return Object.assign({}, state, {
            isFetching: false,
            isError: false,
            data: state.data.push(action.item)
        });
    }
}, {
    data: List(),
    current: null,
    isFetching: false,
    isError: false
});