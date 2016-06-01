import Schedule from './model/ScheduleModel';
import Dates from '../myDates/model/DatesModel';
import {
    addToSchedule,
    clearInSchedule} from '../teachers/actions';


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

const changeCurrentItem = (scheduleItem) => {
    return (dispatch, getCurrentState) => {
        var state = getCurrentState(),
            startDate = state.dates.start,
            currentItem = state.schedule.schedule.currentItem,
            updatedCurrentItem = state.schedule.schedule.updateScheduleItemWithDate(state.schedule.schedule.current, startDate);

        if (Dates.isSame(scheduleItem.dates.start, startDate)) {
            dispatch(editScheduleServer(scheduleItem));
        } else {
            delete scheduleItem.id;
            delete scheduleItem._id;
            dispatch(editScheduleServer(updatedCurrentItem));
            dispatch(addScheduleServer(scheduleItem));
        }
    };
};

export const addSchedule = (scheduleData) => {
    return (dispatch, getCurrentState) => {
        var state = getCurrentState(),
            newItem = Schedule.getNewScheduleItem(scheduleData);

        newItem.dates = state.dates;

        dispatch(addScheduleServer(newItem));
    };
};

export const editSchedule = (scheduleData) => {
    return (dispatch, getCurrentState) => {
        var state = getCurrentState(),
            currentItem = state.schedule.schedule.currentItem,
            newScheduleItem = Schedule.getNewScheduleItem(scheduleData),
            result = Schedule.mergeItems(currentItem, newScheduleItem);

        dispatch(changeCurrentItem(result));
    };
};

export const deleteSchedule = (scheduleData) => {
    return (dispatch, getCurrentState) => {
        var state = getCurrentState(),
            currentItem = state.schedule.schedule.currentItem,
            result = state.schedule.schedule.deleteFromItem(currentItem, scheduleData);

        if (!result.deleted) {
            dispatch(changeCurrentItem(result.updatedItem));
        } else {
            dispatch(deleteScheduleServer({id: result.id}));
        }
    };
};

export const deleteScheduleServer = (option) => {
    return (dispatch) => {
        dispatch(requestSchedule);
        return fetch(`/schedule/delete${option.id}`, {
            method: 'delete',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json();
        }).then(() => {
            dispatch(fetchSchedule());
        }).catch(error => {
            dispatch(responseError(error));
        });
    };
};

export const removeTeacherFromCurrentSchedule = (teacherId) => {
    return (dispatch, getCurrentState) => {
        var state = getCurrentState(),
            schedule = state.schedule.schedule,
            currentItem = schedule.currentItem,
            updatedItem = schedule.removeTeacherFromItem(currentItem, teacherId);

        if (updatedItem.teachers.length) {
            dispatch(editScheduleServer(updatedItem));
        } else {
            dispatch(deleteScheduleServer(updatedItem));
        }
    };
};