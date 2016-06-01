import {connect} from 'react-redux';
import TableBody from '../views/TableBody';
import * as teachSelectors from '../../teachers/teacherSelectors';

const mapStateToProps = (state) => {
    var teachersCount = teachSelectors.teachersCount(state),
        teacherInScheduleCount = teachSelectors.teacherInScheduleCount(state),
        emptyRowsCount = teachersCount - teacherInScheduleCount;

    return {
        teachers: teachSelectors.teachersInShedule(state),
        emptyRowsCount
    };
};

export default connect(mapStateToProps)(TableBody);