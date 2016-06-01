import {connect} from 'react-redux';
import Row from '../views/Row';
import {removeFromSchedule} from '../../teachers/actions';

const mapStateToPtops = (
    state, {teacher}
) => {
    var {teacherPositions: {data: positions}} = state,
        teacherPosition = positions.find(item => item.id === +teacher.position),
        shortName = teacherPosition ? teacherPosition.shortName: '';

    return {
        data: {
            teacher: {
                id: teacher.id,
                displayName: `${teacher.lastName || ''} ${teacher.name || ''} ${shortName}`
            },
            days: state.days.data
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            removeFromSchedule: (id) => {
                dispatch(removeFromSchedule(id));
            }
        }
    };
};

export default connect(mapStateToPtops, mapDispatchToProps)(Row);