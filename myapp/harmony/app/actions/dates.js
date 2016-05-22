import {
    SET_START_DATE,
    SET_END_DATE
} from '../utils/consts';
import Dates from '../app/Date/Dates';
import {setCurrent} from './schedule';

export const setStartDate = (date) => ({type: SET_START_DATE, date});

export const setEndDate = (date) => ({type: SET_END_DATE, date});

export const updateCurrentWeek = (date) => {
    return (dispatch, getCurrentState) => {
        var state,
            currentItem,
            start = Dates.getStartOfWeek(date),
            end = Dates.getEndOfWeek(date);

        dispatch(setStartDate(start));
        dispatch(setEndDate(end));

        state = getCurrentState();

        currentItem = state.schedule.schedule.getCurrentItemByDate({
            start,
            end
        });

        dispatch(setCurrent(currentItem));
    };
};