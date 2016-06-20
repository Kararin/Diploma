import {connect} from 'react-redux';
import AddNew from '../views/AddNew';
import {addNewTeacherServer, isAddNewOpen} from '../actions';

const setPropsToDispatch = ({teachers, teacherPositions, language}) => {
    var {isAddNewOpen} = teachers.options;

    return {
        isVisible: isAddNewOpen,
        lang: language.lang,
        data: {
            teacherPositions: teacherPositions.data
        }
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