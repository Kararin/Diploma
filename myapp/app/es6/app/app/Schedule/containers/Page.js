import {connect} from 'react-redux';
import Page from '../Page';
import {fetchSchedule} from '../../../actions/schedule';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSchedule: () => dispatch(fetchSchedule())
    };
};

export default connect(null, mapDispatchToProps)(Page);