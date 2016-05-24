import {connect} from 'react-redux';
import TableBody from '../views/TableBody';

const mapStateToProps = ({teachers}) => {
    var {inSchedule, data: teachersData} = teachers,
        teachersInShedule =  teachersData.filter(item => inSchedule.has(item.id));

    return {
        teachers: teachersInShedule
    };
};

export default connect(mapStateToProps)(TableBody);