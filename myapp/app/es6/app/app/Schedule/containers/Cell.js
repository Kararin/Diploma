import {connect} from 'react-redux';
import Cell from '../Cell';

const mapStateToProps = (
    state,
    {teacherId, dayId}
) => {
    return {
        data: {
            teacherId,
            dayId
        }
    };
};
export default connect (mapStateToProps, null)(Cell);