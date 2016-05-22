import {
    connect
} from 'react-redux';
import SubCell from '../SubCell';
import {
    addScheduleServer,
    editScheduleServer
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
        currentItem = schedule.schedule.data.toArray().find(item => item.id === schedule.schedule.current),
        // currentItem = Schedule.getCurrentItemByDate(schedule.data, dates),
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
            current: schedule.schedule.current,
            newItem: newItem(currentItem)
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            addAction: ({
                teacherId,
                value,
                dayId,
                type
            }) => {
                var scheduleItem = Schedule.getNewScheduleItem({
                    teacherId,
                    dayId,
                    value,
                    type
                });

                dispatch(addScheduleServer(scheduleItem));
            },
            editAction: (scheduleItem) => {
                dispatch(editScheduleServer(scheduleItem));
            }

        }
    };
};


const newItem = (currentItem) => {
    return ({
        teacherId,
        dayId,
        value,
        type
    }) => {
        var newValue = Schedule.getNewScheduleItem({
                teacherId,
                dayId,
                value,
                type
            }),
            result;

        result = Schedule.mergeItems(currentItem, newValue);

        return result;
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCell);