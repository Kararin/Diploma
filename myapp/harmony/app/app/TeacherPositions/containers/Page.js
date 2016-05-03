import {connect} from 'react-redux';
import {isAddNewOpen} from '../../../actions/teacherPositions';
import Page from '../Page';

const mapDispatchToProps = () => (
    (dispatch) => ({
        onAddAction: () => {
            dispatch(isAddNewOpen(true));
        }
    })
);

export default connect(null, mapDispatchToProps)(Page);

