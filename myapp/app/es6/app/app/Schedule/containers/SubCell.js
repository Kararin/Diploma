import {connect} from 'react-redux';
import SubCell from '../SubCell';
import { addScheduleServer } from '../../../actions/schedule';
import Schedule from '../model/Schedule';

const mapStateToProps = (
    state, {teacherId, dayId, type}
) => {
    var {schedule} = state,
        value = schedule.current ? getValue({
        schedule: schedule.data,
        current: schedule.current,
        teacherId,
        dayId,
        type
    }) : '';

    return {
        data: {
            teacherId,
            dayId,
            value,
            type
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
            }
        }
    };
};

const getValue = ({
    schedule,
    teacherId,
    current,
    dayId,
    type
}) => {
   var scheduleItem = schedule.find(item => item.id === current),
       teacher,
       day,
       cellValue = '';

   //TODO: refactor
   scheduleItem && (teacher = scheduleItem.teachers.find(item => item.id === teacherId));
   teacher && (day = teacher.days.find(item => item.id === dayId));
   day && (cellValue = day[type]);

   return cellValue && cellValue.join('');
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCell);