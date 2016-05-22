import Schedule from '../app/Schedule/model/Schedule';
import {
    addToSchedule,
    clearInSchedule} from './teachers';

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

export const updateCurrent = (currentItem) => {
    return dispatch => {
        var teachers = currentItem.teachers.map(item => item.id);

        dispatch(setCurrent(currentItem.id));
        dispatch(clearInSchedule());

        teachers.forEach(item => dispatch(addToSchedule(item)));
    };
};

export const fetchSchedule = () => {
    return (dispatch, getCurrentItem) => {
        dispatch(requestSchedule);
        return fetch('/schedule')
            .then(response => {
                return response.json();
            })
            .then(json => {
                processResponce(json, dispatch, getCurrentItem);
            })
            .catch(error => {
                dispatch(responseError(error));
            });
    };
};

const processResponce = (schedule, dispatch, getCurrentItem) => {
    var currentItem,
        state;

    dispatch(responseSuccess(schedule));

    state = getCurrentItem();
    currentItem = state.schedule.schedule.getCurrentItemByDate(state.dates);

    dispatch(updateCurrent(currentItem));
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

export const deleteScheduleServer = (item) => {

};

export const addSchedule = (scheduleData) => {
    return dispatch => {
        var newItem = Schedule.getNewScheduleItem(scheduleData);

        dispatch(addScheduleServer(newItem));
    };
};

export const editSchedule = (scheduleData) => {
    return (dispatch, getCurrentState) => {
        var state = getCurrentState(),
            currentItem = state.schedule.schedule.currentItem,
            newScheduleItem = Schedule.getNewScheduleItem(scheduleData),
            result = Schedule.mergeItems(currentItem, newScheduleItem);

        dispatch(editScheduleServer(result));
    };
};

export const deleteSchedule = (scheduleData) => {
    return (dispatch, getCurrentState) => {
        var state = getCurrentState(),
            currentItem = state.schedule.schedule.currentItem,
            result = Schedule.deleteFromItem(currentItem, scheduleData);

        if (result) {
            dispatch(editScheduleServer(result));
        } else {
            consle.log('deleteScheduleServer');
        }
    };
};