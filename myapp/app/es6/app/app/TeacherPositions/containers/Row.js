import {connect} from 'react-redux';
import Row from '../Row';
import {deletePositionServer} from '../../../actions/teacherPositions';

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (position) => {
            dispatch(deletePositionServer(position));
        }
    };
};

export default connect(null, mapDispatchToProps)(Row);