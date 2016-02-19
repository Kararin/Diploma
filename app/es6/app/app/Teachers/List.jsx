import {connect} from 'react-redux';
import TeachersList from './TeachersList';

const mapStateToProps = (state = []) => {
    return {
        teachers: state.teachers.array
    };
};

const List = connect(mapStateToProps)(TeachersList);

export default List;