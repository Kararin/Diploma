import fetch from 'utils/fetch';

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
    return(dispatch) => {
        dispatch(requestPositions);
        return fetch('/teacherPositions')
            .then(response => {
                dispatch(responseSuccess(response));
            }, error => {
                dispatch(responseError(error));
            });
    };
};

//TODO: add file with all action types
//TODO: add file with all urls
