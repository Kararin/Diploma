import {connect} from 'react-redux';
import Row from '../Row';
import {removeFromSchedule} from '../../../actions/teachers';

const mapStateToPtops = (
    state, {teacher}
) => {
    return {
        data: {
            teacher: {
                id: teacher.id,
                displayName: `${teacher.lastName} ${teacher.name} ${teacher.position}`
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