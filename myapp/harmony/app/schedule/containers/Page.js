import {connect} from 'react-redux';
import Page from '../views/Page';
import {fetchSchedule} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSchedule: () => dispatch(fetchSchedule())
    };
};

export default connect(null, mapDispatchToProps)(Page);