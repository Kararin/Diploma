import {handleActions} from 'redux-actions';
import {List, Set} from 'immutable';
import { CLEAR_SCHEDULE } from '../utils/consts/teachers';
import * as actions from './actionTypes';

export default handleActions({
    ADD_TEACHER: (state, action) => Object.assign({}, state, {
        data: state.data.push(action.teacher)
    }),
    REQUEST_TEACHERS: (state, action) => Object.assign({}, state, {
        isFetching: true
    }),
    RESPONSE_TEACHERS_ERROR: (state, action) => {
        return Object.assign({}, state, {
            isError: true,
            isFetching: false
        });
    },
    RESPONSE_TEACHERS_SUCCESS: (state, action) => {
        return Object.assign({}, state, {
            isFetching: false,
            isError: false,
            data: List(action.data)
        });
    },
    IS_ADD_NEW_TEACHER_PAGE_OPEN: (state, action) => Object.assign({}, state, {
            options: teachersOptions(state.options, action)
    }),
    ADD_TO_SCHEDULE: (state, action) => Object.assign({}, state, {
        inSchedule: state.inSchedule.add(action.id)
    }),
    REMOVE_FROM_SCHEDULE: (state, action) => Object.assign({}, state, {
        inSchedule: state.inSchedule.delete(action.id)
    }),
    CLEAR_SCHEDULE: (state, actoin) => Object.assign({}, state, {
        inSchedule: Set()
    }),
    [actions.SET_EXPORT_LIST]: (state, action) => Object.assign({}, state, {
        exportList: Set(action.teachersId)
    })

}, {
    data: List(),
    isFetching: false,
    isError: false,
    options: {
        isAddNewOpen: false,
        editiong: Set()
    },
    inSchedule: Set(),
    exportList: Set()
});

const teachersOptions = handleActions({
    IS_ADD_NEW_TEACHER_PAGE_OPEN: (state,action) => Object.assign({}, state, {
        isAddNewOpen: action.isOpen
    })
});