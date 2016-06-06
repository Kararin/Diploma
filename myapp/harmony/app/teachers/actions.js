import {CLEAR_SCHEDULE} from '../utils/consts/teachers';
import * as actions from './actionTypes';
import * as selectors from './teacherSelectors';

export const addTeacher = (teacher) => ({
    type: 'ADD_TEACHER',
    teacher
});

export const requestTeachers= () => ({
    type: 'REQUEST_TEACHERS'
});

export const responseError = () => ({
    type: 'RESPONSE_TEACHERS_ERROR'
});

export const responseSuccess = (teachers) => ({
    type: 'RESPONSE_TEACHERS_SUCCESS',
    data: teachers
});

export const fetchTeachers = () => {
    return (dispatch) => {
        dispatch(requestTeachers);
        return fetch('/teachers')
            .then(response => {
                return response.json();
            })
            .then(json => {
                dispatch(responseSuccess(json));
            })
            .catch(error => {
                dispatch(responseError(error));
            });
    };
};

export const addNewTeacherServer = (teacher) => {
    return (dispatch) => {
        dispatch(requestTeachers);
        return fetch('/teachers/new', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(teacher)
        }).then(response => {
            return response.json();
        }).then(teacher => {
            dispatch(addTeacher(teacher));
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
};

export const isAddNewOpen = (isOpen) => {
    return {
        type: 'IS_ADD_NEW_TEACHER_PAGE_OPEN',
        isOpen
    };
};

export const deleteTeacherServer = (option) => {
    return (dispatch) => {
        dispatch(requestTeachers);
        return fetch(`/teachers/delete${option.id}`, {
            method: 'delete',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json();
        }).then(() => {
            dispatch(fetchTeachers());
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
};

export const editTeacherServer = (teacher) => {
    return (dispatch) => {
        dispatch(requestTeachers);
        return fetch('/teachers/edit', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(teacher)
        }).then(response => {
            return response.json();
        }).then(() => {
            dispatch(fetchTeachers());
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
};

export const clearInSchedule = () => ({type: CLEAR_SCHEDULE});

export const addToSchedule = id => ({type: 'ADD_TO_SCHEDULE', id});

export const removeFromSchedule = id => ({type: 'REMOVE_FROM_SCHEDULE', id});

export const setExportList = (teachers) => ({
    type: actions.SET_EXPORT_LIST,
    teachersId: teachers
});