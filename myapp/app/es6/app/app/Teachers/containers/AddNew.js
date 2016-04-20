import {connect} from 'react-redux';
import AddNew from './../AddNew';
import {addNewTeacherServer, isAddNewOpen} from '../../../actions/teachers';

const setPropsToDispatch = ({teachers}) => {
    var {isAddNewOpen} = teachers.options;

    return {
        isVisible: isAddNewOpen
    };
};

const setDispatchToProps = (dispatch) => {
    return {
        onAdd: (position) => {
            dispatch(addNewTeacherServer(position));
            dispatch(isAddNewOpen(false));
        },
        onClose: () => {
            dispatch(isAddNewOpen(false));
        }
    };
};
export default connect(setPropsToDispatch, setDispatchToProps)(AddNew);