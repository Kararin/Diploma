import {connect} from 'react-redux';
import Cell from '../views/Cell';

const mapStateToProps = (
    state,
    {teacherId, dayId}
) => {
    var schedule = state.schedule.schedule,
        znValue = schedule.getCellValue({
            teacherId,
            dayId,
            type: 'zn'
        }),
        chValue = schedule.getCellValue({
            teacherId,
            dayId,
            type: 'ch'
        });

    return {
        values: {
            ch: chValue,
            zn: znValue
        },
        teacherId,
        dayId
    };
};
export default connect (mapStateToProps, null)(Cell);