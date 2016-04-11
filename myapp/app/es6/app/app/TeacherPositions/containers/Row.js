import {connect} from 'react-redux';
import Row from '../Row';
import {
    deletePositionServer,
    toggleEditMode,
    editPositionServer} from '../../../actions/teacherPositions';

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (position) => {
            dispatch(deletePositionServer(position));
        },
        toggleEditMode: (id) => {
            dispatch(toggleEditMode(id));
        },
        onEdit: (position) => {
            dispatch(editPositionServer(position));
        }

    };
};

export default connect(null, mapDispatchToProps)(Row);