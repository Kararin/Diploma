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

export const fetchSchedule = () => {
    return (dispatch) => {
        dispatch(requestSchedule);
        return fetch('/schedule')
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

export const addScheduleItem = (item) => ({type: 'ADD_SCHEDULE_ITEM', item});

export const addScheduleServer = (option) => {
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
        }).then(scheduleItem => {
            dispatch(addScheduleItem(scheduleItem));
            dispatch(setCurrent(scheduleItem.id));
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
};

export const editScheduleServer = (item) => {
        return (dispatch) => {
        dispatch(requestSchedule);
        return fetch('/schedule/edit', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        }).then(response => {
            return response.json();
        }).then(() => {
            dispatch(fetchSchedule());
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
};