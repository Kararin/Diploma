import {connect} from 'react-redux';
import Table from '../Table';
import moment from 'moment';
import {
    setStartDate,
    setEndDate
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
           dispatch(setStartDate(moment(currentDate).add(daysInWeek, 'd')));
           dispatch(setEndDate(moment(currentDate).add(daysInWeek, 'd')));
       },
       toPrevWeek: (currentDate) => {
           dispatch(setStartDate(moment(currentDate).subtract(daysInWeek, 'd')));
           dispatch(setEndDate(moment(currentDate).subtract(daysInWeek, 'd')));
       },
       toCurrentWeek: (currentDate) => {
           dispatch(setStartDate(new Date()));
           dispatch(setEndDate(new Date()));
       }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Table);