import {connect} from 'react-redux';
import ScheduleDates from '../views/ScheduleDates';
import moment from 'moment';

const mapStateToProps = ({dates}) => {
    var dateFormat = 'DD.MM.YYYY';

    return {
        startDate: moment(dates.start).format(dateFormat),
        endDate: moment(dates.end).format(dateFormat)
    };
};

export default connect(mapStateToProps)(ScheduleDates);