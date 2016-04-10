import {connect} from 'react-redux';
import Row from '../Row';
import {
    deletePositionServer,
    toggleEditMode} from '../../../actions/teacherPositions';

const mapStateToProps = ({teacherPositions}) => {
    var {editMode} = teacherPositions.options;

    return {
        editMode
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (position) => {
            dispatch(deletePositionServer(position));
        },
        toggleEditMode: (editMode) => {
            dispatch(toggleEditMode(editMode));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);