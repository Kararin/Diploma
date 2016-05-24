import {connect} from 'react-redux';
import List from '../views/List';

const mapStateToProps = ({
    teachers
}) => {
    var {data, inSchedule} = teachers,
        notInSchedule = data.filter(item => !inSchedule.has(item.id));

    return {
        teachers: notInSchedule
    };
};

export default connect(mapStateToProps)(List);