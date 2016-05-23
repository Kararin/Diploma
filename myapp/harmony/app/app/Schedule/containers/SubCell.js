import {
    connect
} from 'react-redux';
import SubCell from '../SubCell';
import {
    addSchedule,
    editSchedule,
    deleteSchedule
} from '../../../actions/schedule';
import Schedule from '../model/Schedule';
import Immutable from 'immutable';

const mapStateToProps = (
    state, {
        teacherId,
        dayId,
        type
    }
) => {
    var {
        schedule,
        dates
    } = state,
        currentItem = schedule.schedule.currentItem,
        value = schedule.schedule.current ? Schedule.getCellValue({
            schedule: schedule.schedule.data,
            current: schedule.schedule.current,
            teacherId,
            dayId,
            type
        }) : '';

    return {
        data: {
            teacherId,
            dayId,
            value,
            type,
            current: schedule.schedule.current
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            editAction: (scheduleData) => {
                var action = selectAction({
                        current: scheduleData.current,
                        value: scheduleData.value,
                    }),
                    actions = {
                        ADD: (scheduleData) => addSchedule(scheduleData),
                        EDIT: (scheduleData) => editSchedule(scheduleData),
                        DELETE: (scheduleData) => deleteSchedule(scheduleData)
                    };

                dispatch(actions[action](scheduleData));
            }
        }
    };
};

const selectAction = ({
    value,
    current
}) => {
    var actions = {
        [!current]: 'ADD',
        [!value]: 'DELETE',
        [current && !!value]: 'EDIT'
    };

    return actions[true];
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCell);