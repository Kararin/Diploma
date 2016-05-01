import {connect} from 'react-redux';
import Cell from '../Cell';

const mapStateToProps = (
    state,
    {teacherId, dayId}
) => {
    return {
        data: {
            teacherId,
            dayId,
            //TODO: add real values
            values: {
                zn: 2,
                ch: 1
            }
        }
    };
};
export default connect (null, null)(Cell);