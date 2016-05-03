import {connect} from 'react-redux';
import AddNew from './../AddNew';
import {addPositionServer, isAddNewOpen} from '../../../actions/teacherPositions';

const setPropsToDispatch = ({teacherPositions}) => {
    var {isAddNewOpen} = teacherPositions.options;

    return {
        isVisible: isAddNewOpen
    };
};

const setDispatchToProps = (dispatch) => {
    return {
        onAdd: (position) => {
            dispatch(addPositionServer(position));
            dispatch(isAddNewOpen(false));
        },
        onClose: () => {
            dispatch(isAddNewOpen(false));
        }
    };
};
export default connect(setPropsToDispatch, setDispatchToProps)(AddNew);