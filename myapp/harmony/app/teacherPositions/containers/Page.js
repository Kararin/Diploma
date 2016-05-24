import {connect} from 'react-redux';
import {isAddNewOpen} from '../actions';
import Page from '../views/Page';

const mapDispatchToProps = () => (
    (dispatch) => ({
        onAddAction: () => {
            dispatch(isAddNewOpen(true));
        }
    })
);

export default connect(null, mapDispatchToProps)(Page);

