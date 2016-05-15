import Schedule from '../app/Schedule/model/Schedule';
import {addToSchedule} from './teachers';

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
                processResponce(json, dispatch);
            })
            .catch(error => {
                dispatch(responseError(error));
            });
    };
};

const getCurrentId = (schedule) => {
    var resultItem = schedule.find(item => !item.name);

    return resultItem && resultItem.id;
};

const processResponce = (schedule, dispatch) => {
    var currentItem = Schedule.getCurrentItem(schedule),
        teachers = currentItem.teachers.map(item => item.id);

    dispatch(responseSuccess(schedule));
    dispatch(setCurrent(currentItem.id));

    teachers.forEach(item => dispatch(addToSchedule(item)));
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