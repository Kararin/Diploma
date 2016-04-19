import {connect} from 'react-redux';
import Table from '../Table.jsx';
import {
    fetchPositions,
    deletePositionServer,
    editPositionServer} from '../../../actions/teacherPositions';

const mapStateToDispatch = ({teacherPositions}) => {
    return {
        positions: teacherPositions.data,
        editing: teacherPositions.options.editing
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(fetchPositions());
        },
        onEdit: (position) => {
            dispatch(editPositionServer(position));
        },
        onDelete: (position) => {
            dispatch(deletePositionServer(position));
        },

    };
};

export default connect(mapStateToDispatch, mapDispatchToProps)(Table);