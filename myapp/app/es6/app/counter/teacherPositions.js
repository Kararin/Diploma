import {handleActions} from 'redux-actions';
import {List} from 'immutable';

export default handleActions({
    REQUEST_POSITIONS: (state, action) => {
        return Object.assign({}, state, {
            isFetching: true
        });
    },
    RESPONSE_POSITIONS_ERROR: (state, action) => {
        return Object.assign({}, state, {
            isError: true,
            isFetching: false
        });
    },
    RESPONSE_POSITIONS_SUCCESS: (state, action) => {
        return Object.assign({}, state, {
            isFetching: false,
            isError: false,
            data: List(action.data)
        });
    },
    ADD_NEW_POSITION: (state, action) => {
        if (action.data) {
            state.data = state.data.push(action.data);
        }
        return Object.assign({}, state);
    },
    ADD_NEW_POSITIONS: (state, action) => {
        return Object.assign({}, state, {
            data: state.data.push(...action.data)
        });
    }
}, {
    data: List(),
    isFetching: false,
    isError: false
});