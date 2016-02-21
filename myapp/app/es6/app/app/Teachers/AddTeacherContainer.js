import {connect} from 'react-redux';
import {addTeacher} from 'actions/teachers';
import AddTeacher from './AddTeacher';

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (teacherInfo) => {
            dispatch(addTeacher(teacherInfo));
        }
    };
};

export default connect(null, mapDispatchToProps)(AddTeacher);