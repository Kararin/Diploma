import {connect} from 'react-redux';
import ScheduleDates from '../ScheduleDates';


const mapStateToProps = (state) => {
    return {
        startDate: '01.01.2014',
        endDate: '03.03.1203'
    };
};

export default connect(mapStateToProps)(ScheduleDates);