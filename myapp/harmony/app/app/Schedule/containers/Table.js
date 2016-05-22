import {connect} from 'react-redux';
import Table from '../Table';
import moment from 'moment';
import {
    updateCurrentWeek
} from '../../../actions/dates';

const mapStateToProps = ({dates}) => {
     return {
         currentDate: dates.start
     };
};

const mapDispatchToProps = (dispatch) => {
    var daysInWeek = 7;
    return {
       toNextWeek: (currentDate) => {
           dispatch(updateCurrentWeek(moment(currentDate).add(daysInWeek, 'd')));
       },
       toPrevWeek: (currentDate) => {
           dispatch(updateCurrentWeek(moment(currentDate).subtract(daysInWeek, 'd')));
       },
       toCurrentWeek: (currentDate) => {
           dispatch(updateCurrentWeek(new Date()));
       }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);