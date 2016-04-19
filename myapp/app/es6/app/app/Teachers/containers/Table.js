import {connect} from 'react-redux';
import Table from '../Table.jsx';
import {
    fetchTeachers,
    editTeacherServer,
    deleteTeacherServer} from '../../../actions/teachers';

const mapStateToDispatch = ({teachers}) => {
    return {
        teachers: teachers.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(fetchTeachers());
        },
        onDelete: (teacher) => {
            dispatch(deleteTeacherServer(teacher));
        },
        onEdit: (teacher) => {
            dispatch(editTeacherServer(teacher));
        }
    };
};

export default connect(mapStateToDispatch, mapDispatchToProps)(Table);