import {connect} from 'react-redux';
import SubCell from '../SubCell';

const mapStateToProps = (
    state, {teachetId, dayId, value, type}
) => {
    return {
        data: {
            teachetId,
            dayId,
            value,
            type
        }
    };
};

export default connect(mapStateToProps)(SubCell);