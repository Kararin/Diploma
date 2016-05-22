import {handleActions} from 'redux-actions';
import Schedule from '../app/Schedule/model/Schedule';

export default handleActions({
    SET_CURRENT: (state, action) => Object.assign({}, state, {
        schedule: new Schedule({
            data: state.schedule.data,
            current: action.id
        })
    }),
    REQUEST_SCHEDULE: (state, action) => {
        return Object.assign({}, state, {
            isFetching: true
        });
    },
    RESPONSE_SCHEDULE_ERROR: (state, action) => {
        return Object.assign({}, state, {
            isError: true,
            isFetching: false
        });
    },
    RESPONSE_SCHEDULE_SUCCESS: (state, action) => {
        return Object.assign({}, state, {
            isFetching: false,
            isError: false,
            schedule: new Schedule({
                data: action.data,
                current: state.schedule.current
            })
        });
    },
    ADD_SCHEDULE_ITEM: (state, action) => {
        return Object.assign({}, state, {
            isFetching: false,
            isError: false,
            schedule: new Schedule({
                data: state.schedule.data.push(action.item),
                current: state.schedule.current
            })
        });
    }
}, {
    schedule: new Schedule({}),
    isFetching: false,
    isError: false
});