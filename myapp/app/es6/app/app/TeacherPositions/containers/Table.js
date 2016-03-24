import {connect} from 'react-redux';
import Table from 'teacherPositions/Table';
import {fetchPositions} from 'actions/teacherPositions';

const mapStateToDispatch = ({teacherPositions}) => {
    return {
        positions: teacherPositions.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(fetchPositions());
        }
    };
};

export default connect(mapStateToDispatch, mapDispatchToProps)(Table);