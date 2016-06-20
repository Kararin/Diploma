import {connect} from 'react-redux';
import Table from '../views/Table';
import moment from 'moment';
import {
    updateCurrentWeek
} from '../../myDates/actions';

const mapStateToProps = ({dates, language}) => {
     return {
         currentDate: dates.start,
         lang: language.lang
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