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