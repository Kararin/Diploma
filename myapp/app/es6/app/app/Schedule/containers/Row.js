import {connect} from 'react-redux';
import Row from '../Row';

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

export default connect(mapStateToPtops)(Row);