import {connect} from 'react-redux';
import Table from '../Table.jsx';
import {fetchTeachers} from '../../../actions/teachers';

const mapStateToDispatch = ({teachers}) => {
    return {
        teachers: teachers.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(fetchTeachers());
        }
    };
};

export default connect(mapStateToDispatch, mapDispatchToProps)(Table);