import {connect} from 'react-redux';
import AddNew from '../views/AddNew';
import {addPositionServer, isAddNewOpen} from '../actions';

const setPropsToDispatch = ({teacherPositions, language}) => {
    var {isAddNewOpen} = teacherPositions.options;

    return {
        isVisible: isAddNewOpen,
        lang: language.lang
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