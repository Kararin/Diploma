export const requestPositions = () => {
    return {
        type: 'REQUEST_POSITIONS'
    };
};

export const responseError = () => {
    return {
        type: 'RESPONSE_POSITIONS_ERROR'
    };
};

export const responseSuccess = (positions) => {
    return {
        type: 'RESPONSE_POSITIONS_SUCCESS',
        data: positions
    };
};

export const fetchPositions = () => {
    return (dispatch) => {
        dispatch(requestPositions);
        return fetch('/teacherPositions')
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

export const addPosition = (option) => {
    return {
        type: 'ADD_NEW_POSITION',
        data: option
    };
};

export const addPositionServer = (option) => {
    return (dispatch) => {
        dispatch(requestPositions);
        return fetch('/teacherPositions/new', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(option)
        }).then(response => {
            return response.json();
        }).then(position => {
            dispatch(addPosition(position));
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
};

export const deletePositionServer = (option) => {
    return (dispatch) => {
        dispatch(requestPositions);
        return fetch(`/teacherPositions/delete${option.id}`, {
            method: 'delete',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json();
        }).then(() => {
            dispatch(fetchPositions());
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
};

export const isAddNewOpen = (isOpen) => {
    return {
        type: 'IS_ADD_NEW_POSITION_PAGE_OPEN',
        isOpen
    };
};

export const toggleEditMode = (id) => ({type: 'TOGGLE_EDIT_MODE', id});

export const editPositionServer = (position) => {
        return (dispatch) => {
        dispatch(requestPositions);
        return fetch('/teacherPositions/edit', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(position)
        }).then(response => {
            return response.json();
        }).then(() => {
            dispatch(fetchPositions());
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
};