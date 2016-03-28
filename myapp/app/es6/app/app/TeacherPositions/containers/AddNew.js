import {connect} from 'react-redux';
import AddNew from './../AddNew';
import {addPositionServer} from './../../../teacherPositions';

const setDispatchToProps = (dispatch) => {
    return {
        onAdd: (position) => {
            dispatch(addPositionServer(position));
        }
    };
};
export default connect(null, setDispatchToProps)(AddNew);