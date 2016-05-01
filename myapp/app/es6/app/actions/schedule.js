export const requestSchedule = () => {
    return {
        type: 'REQUEST_SCHEDULE'
    };
};

export const responseError = () => {
    return {
        type: 'RESPONSE_SCHEDULE_ERROR'
    };
};

export const responseSuccess = (schedule) => {
    return {
        type: 'RESPONSE_SCHEDULE_SUCCESS',
        data: schedule
    };
};

export const setCurrent = (id) => ({type: 'SET_CURRENT', id});

export const addPositionServer = (option) => {
    return (dispatch) => {
        dispatch(requestSchedule);
        return fetch('/schedule/new', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(option)
        }).then(response => {
            return response.json();
        }).then(schedule => {
            dispatch(responseSuccess(schedule));
            dispatch(setCurrent(schedule.id));
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
};