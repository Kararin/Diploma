import {handleActions} from 'redux-actions';
import {List, Set} from 'immutable';

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
    },
    IS_ADD_NEW_POSITION_PAGE_OPEN: (state, action) => {
        return Object.assign({}, state, {
            options: teacherPositionOptions(state.options, action)
        });
    }
}, {
    data: List(),
    isFetching: false,
    isError: false,
    options: {
        editing: Set()
    }
});

export const teacherPositionOptions = handleActions({
    IS_ADD_NEW_POSITION_PAGE_OPEN: (state, action) => {
        return Object.assign({}, state, {
            isAddNewOpen: action.isOpen
        });
    },
    TOGGLE_EDIT_MODE: (state, action) => {
        var resSet = state.editing.has(action.id) ?
            state.editing.delete(action.id) :
            state.editing.add(action.id);

        return Object.assign({}, state, {
            editing: resSet
        });
    }
}, {
    editing: Set()
});