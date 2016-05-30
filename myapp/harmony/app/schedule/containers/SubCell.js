import {
    connect
} from 'react-redux';
import SubCell from '../views/SubCell';
import {
    addSchedule,
    editSchedule,
    deleteSchedule
} from '../actions';
import Schedule from '../model/ScheduleModel';
import Immutable from 'immutable';
import Dates from '../../myDates/model/DatesModel';

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
        value = currentItem ? Schedule.getCellValue({
            schedule: schedule.schedule.data,
            current: schedule.schedule.current,
            teacherId,
            dayId,
            type
        }) : '',
        date = Dates.getStartOfWeek(Dates.getCurrentDate()),
        allowChange = Dates.isSameOrAfter(dates.start, date);

    return {
        data: {
            teacherId,
            dayId,
            value,
            type,
            current: currentItem,
            allowChange
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