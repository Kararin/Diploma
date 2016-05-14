export const requestDays = () => {
    return {
        type: 'REQUEST_DAYS'
    };
};

export const responseError = () => {
    return {
        type: 'RESPONSE_DAYS_ERROR'
    };
};

export const responseSuccess = (days) => {
    return {
        type: 'RESPONSE_DAYS_SUCCESS',
        data: days
    };
};

export const fetchDays = () => {
    return (dispatch) => {
        dispatch(requestDays());
        return fetch('/days')
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