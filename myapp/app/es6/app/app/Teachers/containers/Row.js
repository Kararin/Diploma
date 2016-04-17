import {connect} from 'react-redux';
import Row from '../Row';
import {
    deletePositionServer,
    toggleEditMode,
    editPositionServer} from '../../../actions/teacherPositions';

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (teacher) => {
            // dispatch(deletePositionServer(position));
        },
        toggleEditMode: (id) => {
            // dispatch(toggleEditMode(id));
        },
        onEdit: (teacher) => {
            // dispatch(editPositionServer(position));
        }

    };
};

export default connect(null, null)(Row);