import {handleActions} from 'redux-actions';
import Dates from './model/DatesModel';
import {SET_START_DATE, SET_END_DATE} from '../utils/const';

export default handleActions({
    SET_START_DATE: function (state, action) {
        return Object.assign({}, state, {
           start: Dates.getStartOfWeek(action.date)
        });
    },
    SET_END_DATE: function (state, action) {
        return Object.assign({}, state, {
            end: Dates.getEndOfWeek(action.date)
        });
    }
}, {
    start: Dates.getStartOfWeek(new Date()),
    end: Dates.getEndOfWeek(new Date())
});