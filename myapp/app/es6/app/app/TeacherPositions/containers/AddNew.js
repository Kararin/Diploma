import {connect} from 'react-redux';
import AddNew from 'teacherPositions/AddNew';
import {addPositionServer} from 'actions/teacherPositions';

const setDispatchToProps = (dispatch) => {
    return {
        onAdd: (position) => {
            dispatch(addPositionServer(position));
        }
    };
};

export default connect(null, setDispatchToProps)(AddNew);